import { BPM, ROWS, STEPS, notesForOctave } from './scale';
import { createVoice } from './instruments';

/**
 * Builds the audio graph, importing Tone only when called.
 *
 * Tone is 329 kB minified (75 kB gzipped), roughly three quarters of this
 * whole site's payload, and most visitors never press play. The dynamic
 * import below is what keeps it out of the main bundle: Vite emits it as a
 * separate chunk that is fetched on the first press and never before.
 *
 * Call this from a real user gesture. Browsers refuse to start an
 * AudioContext without one, and Tone.start() is what unlocks it.
 */
export async function createEngine({
  getPattern,
  getOctave,
  getInstrument,
  onStep,
  muted = false,
}) {
  const Tone = await import('tone');
  await Tone.start();

  // Applied up front so a visitor who muted before pressing play does not get
  // a burst of sound.
  Tone.getDestination().mute = muted;

  // The effects stay put for the life of the engine and only the voice is
  // swapped, so changing instrument mid-loop does not rebuild the reverb or
  // interrupt the transport.
  const filter = new Tone.Filter({ type: 'lowpass', frequency: 3200 });
  const delay = new Tone.FeedbackDelay({
    delayTime: '8n',
    feedback: 0.22,
    wet: 0.22,
  });
  const reverb = new Tone.Reverb({ decay: 6, wet: 0.34 });

  filter.chain(delay, reverb, Tone.getDestination());

  // Reverb builds its impulse response asynchronously and is silent until it
  // resolves, which would swallow the first bar.
  await reverb.ready;

  let voice = null;
  let voiceId = null;

  const mountVoice = (id) => {
    const { synth, volume } = createVoice(Tone, id);
    synth.volume.value = volume;
    synth.connect(filter);
    voice = synth;
    voiceId = id;
  };

  const swapVoice = (id) => {
    if (id === voiceId) return;
    const old = voice;
    mountVoice(id);
    if (old) {
      // Let whatever is ringing finish its release instead of cutting it off,
      // which would click. The node is dropped a moment later.
      try {
        old.releaseAll();
      } catch {
        // Not all voices expose releaseAll; disposing is enough.
      }
      setTimeout(() => old.dispose(), 400);
    }
  };

  mountVoice(getInstrument());

  const transport = Tone.getTransport();
  transport.bpm.value = BPM;

  const sequence = new Tone.Sequence(
    (time, step) => {
      // Read through getters so edits made while running take effect on the
      // next pass. Nothing here may be captured by value.
      const pattern = getPattern();
      const notes = notesForOctave(getOctave());
      const playing = ROWS.map((_, i) =>
        pattern[i][step] ? notes[i] : null,
      ).filter(Boolean);

      if (playing.length > 0 && voice) {
        voice.triggerAttackRelease(playing, '8n', time);
      }

      // Tone.Draw runs the callback on the animation frame that matches this
      // audio time. Calling onStep directly would light the cell when the
      // note was *scheduled*, which is ahead of when it is heard.
      Tone.getDraw().schedule(() => onStep(step), time);
    },
    Array.from({ length: STEPS }, (_, i) => i),
    '8n',
  );

  return {
    start() {
      sequence.start(0);
      transport.start();
    },
    stop() {
      transport.stop();
      transport.position = 0;
      sequence.stop();
      onStep(-1);
    },
    setInstrument(id) {
      swapVoice(id);
    },
    setMuted(flag) {
      // Muting the destination rather than the voice, so it silences the
      // delay and reverb tails too instead of leaving them ringing.
      Tone.getDestination().mute = flag;
    },
    dispose() {
      transport.stop();
      transport.cancel();
      sequence.dispose();
      voice?.dispose();
      filter.dispose();
      delay.dispose();
      reverb.dispose();

      // Disposing the nodes silences the graph but leaves Tone's shared
      // context running, which keeps the audio hardware awake and costs
      // battery for a page that is no longer making sound.
      try {
        const raw = Tone.getContext().rawContext;
        if (typeof raw?.suspend === 'function' && raw.state === 'running') {
          void raw.suspend();
        }
      } catch {
        // Nothing to suspend. The graph is already torn down.
      }
    },
  };
}

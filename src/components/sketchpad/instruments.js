/**
 * The four voices offered in the picker.
 *
 * All of them are PolySynth-compatible on purpose: PolySynth requires a
 * Monophonic voice, and Tone's PluckSynth extends Instrument instead, so a
 * real Karplus-Strong pluck cannot be made polyphonic. The plucked character
 * here comes from a short envelope on a plain Synth rather than from
 * PluckSynth, which keeps every voice able to play chords.
 *
 * Each patch is also voiced to survive the shared delay and reverb without
 * turning to mud, and to stay audible on a laptop speaker.
 */
export const INSTRUMENTS = [
  { id: 'pluck', label: 'Pluck' },
  { id: 'pad', label: 'Pad' },
  { id: 'bell', label: 'Bell' },
  { id: 'keys', label: 'Keys' },
];

export const DEFAULT_INSTRUMENT = 'pluck';

export const isInstrument = (id) => INSTRUMENTS.some((i) => i.id === id);

/**
 * Build a voice. Tone is passed in rather than imported so this module stays
 * free of the 79 kB dependency and can be read by the UI for its labels.
 *
 * Returns the synth and the level it should sit at, because a bell with a
 * long decay and a sustained pad do not balance at the same gain.
 */
export function createVoice(Tone, id) {
  switch (id) {
    case 'pad':
      // Slow swell. Attack is kept under the eighth-note interval so notes
      // still articulate instead of smearing into one continuous tone.
      return {
        synth: new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: 'sine' },
          envelope: {
            attack: 0.22,
            decay: 0.4,
            sustain: 0.5,
            release: 3.2,
          },
        }),
        volume: -19,
      };

    case 'bell':
      // FM with near-integer harmonicity gives the glassy partials of a
      // struck bell. No sustain, so it rings and decays on its own.
      return {
        synth: new Tone.PolySynth(Tone.FMSynth, {
          harmonicity: 3.01,
          modulationIndex: 12,
          oscillator: { type: 'sine' },
          envelope: { attack: 0.002, decay: 1.4, sustain: 0, release: 2.4 },
          modulation: { type: 'sine' },
          modulationEnvelope: {
            attack: 0.002,
            decay: 0.3,
            sustain: 0,
            release: 0.5,
          },
        }),
        volume: -7,
      };

    case 'keys':
      // AM gives a soft electric-piano edge without the cost of samples.
      return {
        synth: new Tone.PolySynth(Tone.AMSynth, {
          harmonicity: 2,
          oscillator: { type: 'triangle' },
          envelope: { attack: 0.01, decay: 0.6, sustain: 0.15, release: 1.6 },
        }),
        volume: 1,
      };

    case 'pluck':
    default:
      return {
        synth: new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: 'triangle' },
          envelope: { attack: 0.005, decay: 0.3, sustain: 0.06, release: 1.6 },
        }),
        volume: -12,
      };
  }
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DEFAULT_OCTAVE, SEED, clonePattern, emptyPattern } from './scale';
import { DEFAULT_INSTRUMENT } from './instruments';
import { setStep } from './step-store';
import { SketchpadContext } from './sketchpad-context';

/**
 * Owns the audio engine for the whole app.
 *
 * This sits above the router so a loop keeps playing when you move between
 * pages. Previously the engine lived inside the Sketchpad component, which
 * unmounts on navigation and took the sound with it.
 *
 * Because it outlives every page, the only things kept in state here change
 * rarely. The playhead goes through an external store instead, or every page
 * under this provider would re-render several times a second.
 */
export const SketchpadProvider = ({ children }) => {
  const [pattern, setPattern] = useState(() => clonePattern(SEED));
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);
  const [octave, setOctave] = useState(DEFAULT_OCTAVE);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [muted, setMuted] = useState(false);

  /**
   * Whether audio has been engaged at all this session. The mute control in
   * the navbar keys off this, so it appears when it can do something rather
   * than sitting there dead on a first visit.
   */
  const [engaged, setEngaged] = useState(false);

  // The sequence callback runs on the audio clock, outside React, so it reads
  // its inputs from refs. Synced after commit rather than during render,
  // which is what the hooks lint wants and is harmless here: a change lands
  // on the next pass of the sequence either way.
  const patternRef = useRef(pattern);
  const octaveRef = useRef(octave);
  const instrumentRef = useRef(instrument);
  const mutedRef = useRef(muted);

  useEffect(() => {
    patternRef.current = pattern;
  }, [pattern]);

  useEffect(() => {
    octaveRef.current = octave;
  }, [octave]);

  const engineRef = useRef(null);
  const aliveRef = useRef(true);

  // Swapping the voice keeps the transport running, so the sound changes
  // under your fingers without restarting the loop.
  useEffect(() => {
    instrumentRef.current = instrument;
    engineRef.current?.setInstrument(instrument);
  }, [instrument]);

  useEffect(() => {
    mutedRef.current = muted;
    engineRef.current?.setMuted(muted);
  }, [muted]);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      // Only on teardown of the whole app now, not on navigation.
      aliveRef.current = false;
      engineRef.current?.dispose();
      engineRef.current = null;
      setStep(-1);
    };
  }, []);

  const toggleCell = useCallback((rowIndex, stepIndex) => {
    setPattern((current) =>
      current.map((row, r) =>
        r === rowIndex ? row.map((on, s) => (s === stepIndex ? !on : on)) : row,
      ),
    );
  }, []);

  const toggleMuted = useCallback(() => setMuted((m) => !m), []);
  const reset = useCallback(() => setPattern(clonePattern(SEED)), []);
  const clear = useCallback(() => setPattern(emptyPattern()), []);

  const togglePlay = useCallback(async () => {
    if (playing) {
      engineRef.current?.stop();
      setPlaying(false);
      setStep(-1);
      return;
    }

    if (!engineRef.current) {
      setLoading(true);
      try {
        const engine = await createEngineSafely({
          getPattern: () => patternRef.current,
          getOctave: () => octaveRef.current,
          getInstrument: () => instrumentRef.current,
          muted: mutedRef.current,
          onStep: (s) => {
            if (aliveRef.current) setStep(s);
          },
        });
        if (!aliveRef.current) {
          engine?.dispose();
          return;
        }
        engineRef.current = engine;
      } finally {
        if (aliveRef.current) setLoading(false);
      }
    }

    if (!engineRef.current) return;
    engineRef.current.start();
    setPlaying(true);
    setEngaged(true);
  }, [playing]);

  const value = useMemo(
    () => ({
      pattern,
      instrument,
      octave,
      playing,
      loading,
      muted,
      engaged,
      toggleCell,
      togglePlay,
      toggleMuted,
      setInstrument,
      setOctave,
      reset,
      clear,
    }),
    [
      pattern,
      instrument,
      octave,
      playing,
      loading,
      muted,
      engaged,
      toggleCell,
      togglePlay,
      toggleMuted,
      reset,
      clear,
    ],
  );

  return (
    <SketchpadContext.Provider value={value}>
      {children}
    </SketchpadContext.Provider>
  );
};

/** Keeps a failed audio load from breaking the page it sits on. */
async function createEngineSafely(options) {
  try {
    const { createEngine } = await import('./engine');
    return await createEngine(options);
  } catch {
    return null;
  }
}

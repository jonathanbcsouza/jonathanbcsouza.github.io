/**
 * D minor pentatonic, lowest note on the top row.
 *
 * The scale is the whole design decision. With five notes and no semitone
 * clashes, every pattern a visitor can tap is consonant, so there is no way
 * to make it sound wrong and no reason to be timid with it.
 *
 * Rows are stored as a pitch class plus an octave offset rather than fixed
 * note names, so the whole grid transposes from one number. C carries an
 * offset of 1 because scientific pitch notation rolls over at C, not at the
 * root: the C above D3 is C4, not C3. That is also why the row labels carry
 * their octave number, since a bare "C" above a bare "D" reads like the
 * lower of the two when it is actually a seventh higher.
 */
const ROW_PITCHES = [
  { pitchClass: 'D', octaveOffset: 0 },
  { pitchClass: 'F', octaveOffset: 0 },
  { pitchClass: 'G', octaveOffset: 0 },
  { pitchClass: 'A', octaveOffset: 0 },
  { pitchClass: 'C', octaveOffset: 1 },
];

/** Semitone within the octave, used to order rows by real pitch. */
const SEMITONES = { C: 0, D: 2, F: 5, G: 7, A: 9 };

export const ROWS = ROW_PITCHES;

export const STEPS = 8;

/** Slow enough to breathe, which is what the rest of the page sounds like. */
export const BPM = 84;

export const DEFAULT_OCTAVE = 3;

/**
 * Offered range. Below 3 the fundamental disappears on the laptop and phone
 * speakers most visitors use, and above 5 it turns shrill against the reverb.
 */
export const OCTAVES = [
  { value: 3, label: '3 · low' },
  { value: 4, label: '4 · mid' },
  { value: 5, label: '5 · high' },
];

/** Note names for a base octave, in grid row order (top row first). */
export function notesForOctave(base) {
  return ROW_PITCHES.map(
    (row) => `${row.pitchClass}${base + row.octaveOffset}`,
  );
}

/**
 * Lowest and highest sounding note, for the readout above the grid.
 * Derived from real pitch rather than row position, so it stays correct if
 * the grid is ever reordered again.
 */
export function rangeLabel(base) {
  const ranked = ROW_PITCHES.map((row) => {
    const octave = base + row.octaveOffset;
    return {
      name: `${row.pitchClass}${octave}`,
      midi: (octave + 1) * 12 + SEMITONES[row.pitchClass],
    };
  }).sort((a, b) => a.midi - b.midi);

  return `${ranked[0].name}–${ranked[ranked.length - 1].name}`;
}

/**
 * Opening state, deliberately sparse: a root pulse with a line moving over it.
 * A visitor who presses play once should hear something intended rather than
 * a blank grid or a wall of notes.
 *
 * Row order here follows the grid, so the top row is the lowest note.
 */
export const SEED = [
  [true, false, false, false, true, false, false, false], // D, low
  [false, true, false, false, false, false, false, true], // F
  [false, false, false, true, false, false, false, false], // G
  [true, false, false, false, false, true, false, false], // A
  [false, false, true, false, false, false, true, false], // C, high
];

export const emptyPattern = () =>
  ROW_PITCHES.map(() => Array.from({ length: STEPS }, () => false));

export const clonePattern = (pattern) => pattern.map((row) => [...row]);

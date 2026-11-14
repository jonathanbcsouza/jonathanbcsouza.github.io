import { useRef, useState, useSyncExternalStore } from 'react';
import styled from 'styled-components';
import { FiPlay, FiSquare, FiRotateCcw } from 'react-icons/fi';
import { OCTAVES, ROWS, STEPS, notesForOctave, rangeLabel } from './scale';
import { INSTRUMENTS } from './instruments';
import { useSketchpad } from './sketchpad-context';
import { getServerStep, getStep, subscribeStep } from './step-store';

const Panel = styled.section`
  width: 100%;
  max-width: 560px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.28);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);

  /* Trimmed so the grid cells keep as much width as possible for fingers. */
  @media (max-width: 615px) {
    padding: 14px 12px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 4px;
`;

const Title = styled.h2`
  font-size: 0.78em;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-orange);
`;

const Hint = styled.p`
  margin-bottom: 14px;
  font-size: 0.82em;
  line-height: 1.5;
  opacity: 0.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2.1em repeat(${STEPS}, minmax(0, 1fr));
  gap: 5px;
  align-items: center;

  @media (max-width: 615px) {
    grid-template-columns: 1.9em repeat(${STEPS}, minmax(0, 1fr));
    gap: 4px;
  }
`;

const RowLabel = styled.span`
  font-size: 0.78em;
  letter-spacing: 0.06em;
  text-align: right;
  opacity: 0.65;
`;

const Cell = styled.button`
  appearance: none;
  aspect-ratio: 1;
  width: 100%;
  min-width: 0;
  padding: 0;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.$on ? 'var(--text-orange)' : 'rgba(255, 255, 255, 0.16)'};
  background: ${(props) =>
    props.$on ? 'rgba(255, 165, 0, 0.55)' : 'rgba(255, 255, 255, 0.03)'};
  /* The playhead reads as a ring so it can sit on top of an on or off cell
     without hiding which it is. */
  box-shadow: ${(props) =>
    props.$playing ? '0 0 0 2px var(--text-orange)' : 'none'};
  transition:
    background 0.12s ease,
    border-color 0.12s ease;

  &:hover {
    border-color: var(--text-orange);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 40px;
  padding: 0 14px;
  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.$primary ? 'var(--text-orange)' : 'rgba(255, 255, 255, 0.22)'};
  background: ${(props) =>
    props.$primary ? 'rgba(255, 165, 0, 0.14)' : 'transparent'};
  color: ${(props) =>
    props.$primary ? 'var(--text-orange)' : 'var(--text-white)'};
  font-size: 0.84em;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover:not(:disabled) {
    border-color: var(--text-orange);
    color: var(--text-orange);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const Field = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.78em;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.75;
`;

// A native select, so it gets the platform picker on a phone and keyboard
// support without reimplementing either.
const Select = styled.select`
  appearance: none;
  min-height: 34px;
  padding: 0 26px 0 10px;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(0, 0, 0, 0.5);
  color: var(--text-white);
  font-size: 1.1em;
  letter-spacing: 0.02em;
  text-transform: none;
  cursor: pointer;
  /* Chevron drawn in CSS to avoid shipping an icon for two selects. */
  background-image:
    linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position:
    right 13px center,
    right 8px center;
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;

  &:hover {
    border-color: var(--text-orange);
  }

  option {
    background: #140303;
    color: var(--text-white);
  }
`;

const ErrorNote = styled.p`
  margin-top: 12px;
  font-size: 0.84em;
  line-height: 1.5;
  color: #ffb4a8;
`;

const Status = styled.span`
  font-size: 0.78em;
  opacity: 0.7;
  font-variant-numeric: tabular-nums;
`;

/**
 * An eight step sketchpad on a five note scale.
 *
 * The audio engine is loaded on the first press of play, never on page load,
 * so the landing page stays as light as it was. Nothing makes a sound until
 * the visitor asks for it.
 */
export const Sketchpad = () => {
  const {
    pattern,
    instrument,
    octave,
    playing,
    loading,
    error,
    toggleCell,
    togglePlay,
    setInstrument,
    setOctave,
    reset,
    clear,
  } = useSketchpad();

  // Subscribed separately so the playhead re-renders this panel only, not the
  // provider and everything else under it.
  const step = useSyncExternalStore(subscribeStep, getStep, getServerStep);

  const noteNames = notesForOctave(octave);

  // The 40 cells are one tab stop, not forty. Arrow keys move between them,
  // the same way a native grid or toolbar behaves, so a keyboard user can
  // reach the Play button without tabbing through the whole pattern.
  const [focusCell, setFocusCell] = useState({ row: 0, step: 0 });
  const gridRef = useRef(null);

  const onGridKeyDown = (event) => {
    const lastRow = ROWS.length - 1;
    const lastStep = STEPS - 1;
    const { row, step: col } = focusCell;

    const next = {
      ArrowRight: { row, step: Math.min(col + 1, lastStep) },
      ArrowLeft: { row, step: Math.max(col - 1, 0) },
      ArrowDown: { row: Math.min(row + 1, lastRow), step: col },
      ArrowUp: { row: Math.max(row - 1, 0), step: col },
      Home: { row, step: 0 },
      End: { row, step: lastStep },
    }[event.key];

    if (!next) return;
    event.preventDefault();
    setFocusCell(next);
    gridRef.current
      ?.querySelector(`[data-cell="${next.row}-${next.step}"]`)
      ?.focus();
  };

  return (
    <Panel aria-labelledby="sketchpad-title">
      <Header>
        <Title id="sketchpad-title">Sketchpad</Title>
        <Status>
          {STEPS} steps · {rangeLabel(octave)}
        </Status>
      </Header>
      <Hint>
        Tap the grid to build a phrase. The scale has no semitone clashes, so
        whatever you land on stays in key. With a keyboard, use the arrow keys
        to move and Space to toggle.
      </Hint>

      <Grid
        ref={gridRef}
        role="group"
        aria-label="Note grid"
        onKeyDown={onGridKeyDown}
      >
        {noteNames.map((note, rowIndex) => (
          <Row
            key={note}
            note={note}
            rowIndex={rowIndex}
            cells={pattern[rowIndex]}
            step={step}
            focusCell={focusCell}
            onFocusCell={setFocusCell}
            onToggle={toggleCell}
          />
        ))}
      </Grid>

      <Controls>
        <Button
          $primary
          type="button"
          onClick={() => void togglePlay()}
          disabled={loading}
        >
          {playing ? <FiSquare size={13} /> : <FiPlay size={13} />}
          {loading ? 'Loading sound\u2026' : playing ? 'Stop' : 'Play'}
        </Button>
        <Button type="button" onClick={reset}>
          <FiRotateCcw size={13} />
          Reset
        </Button>
        <Button type="button" onClick={clear}>
          Clear
        </Button>
      </Controls>

      {error ? <ErrorNote role="alert">{error}</ErrorNote> : null}

      <Options>
        <Field htmlFor="sketchpad-instrument">
          Sound
          <Select
            id="sketchpad-instrument"
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
          >
            {INSTRUMENTS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field htmlFor="sketchpad-octave">
          Octave
          <Select
            id="sketchpad-octave"
            value={octave}
            onChange={(e) => setOctave(Number(e.target.value))}
          >
            {OCTAVES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </Field>
      </Options>
    </Panel>
  );
};

const Row = ({
  note,
  rowIndex,
  cells,
  step,
  focusCell,
  onFocusCell,
  onToggle,
}) => (
  <>
    <RowLabel aria-hidden="true">{note}</RowLabel>
    {cells.map((on, stepIndex) => (
      <Cell
        key={stepIndex}
        type="button"
        $on={on}
        $playing={step === stepIndex}
        data-cell={`${rowIndex}-${stepIndex}`}
        tabIndex={
          focusCell.row === rowIndex && focusCell.step === stepIndex ? 0 : -1
        }
        aria-pressed={on}
        aria-label={`${note}, step ${stepIndex + 1}`}
        onFocus={() => onFocusCell({ row: rowIndex, step: stepIndex })}
        onClick={() => onToggle(rowIndex, stepIndex)}
      />
    ))}
  </>
);

import { useSyncExternalStore } from 'react';
import styled from 'styled-components';
import { FiPlay, FiSquare, FiRotateCcw } from 'react-icons/fi';
import { OCTAVES, STEPS, notesForOctave, rangeLabel } from './scale';
import { INSTRUMENTS } from './instruments';
import { useSketchpad } from './sketchpad-context';
import { getServerStep, getStep, subscribeStep } from './step-store';

const Panel = styled.section`
  max-width: 560px;
  margin-top: 44px;
  padding: 18px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.28);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);

  /* Trimmed so the grid cells keep as much width as possible for fingers. */
  @media (max-width: 615px) {
    margin-top: 32px;
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
  font-size: 0.68em;
  letter-spacing: 0.06em;
  text-align: right;
  opacity: 0.45;
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
  font-size: 0.74em;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.6;
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

const Status = styled.span`
  font-size: 0.74em;
  opacity: 0.55;
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
        whatever you land on stays in key.
      </Hint>

      <Grid role="group" aria-label="Note grid">
        {noteNames.map((note, rowIndex) => (
          <Row
            key={note}
            note={note}
            rowIndex={rowIndex}
            cells={pattern[rowIndex]}
            step={step}
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

const Row = ({ note, rowIndex, cells, step, onToggle }) => (
  <>
    <RowLabel aria-hidden="true">{note}</RowLabel>
    {cells.map((on, stepIndex) => (
      <Cell
        key={stepIndex}
        type="button"
        $on={on}
        $playing={step === stepIndex}
        aria-pressed={on}
        aria-label={`${note}, step ${stepIndex + 1}`}
        onClick={() => onToggle(rowIndex, stepIndex)}
      />
    ))}
  </>
);

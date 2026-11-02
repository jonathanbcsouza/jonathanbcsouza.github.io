import styled from 'styled-components';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { useSketchpad } from './sketchpad/sketchpad-context';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 36px;
  padding: 0 10px;
  border: 1px solid
    ${(props) =>
      props.$muted ? 'rgba(255, 255, 255, 0.22)' : 'var(--text-orange)'};
  border-radius: 6px;
  background: transparent;
  color: ${(props) =>
    props.$muted ? 'var(--text-white)' : 'var(--text-orange)'};
  font-size: 0.78em;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    border-color: var(--text-orange);
    color: var(--text-orange);
  }

  svg {
    flex-shrink: 0;
  }
`;

const Label = styled.span`
  @media (max-width: 760px) {
    /* The word is dropped before the icon on a narrow bar. */
    display: none;
  }
`;

/**
 * Global mute, shown in the navbar.
 *
 * Audio now outlives the page it started on, so there has to be a way to
 * silence it from anywhere. It only appears once sound has actually been
 * started, because a mute button on a silent first visit controls nothing.
 *
 * The word carries the state rather than an animation. A pulsing icon was
 * measured at 84 style recalculations every five seconds on whatever page
 * the visitor was reading, which is a perpetual cost for a cue that a label
 * states more plainly.
 *
 * The state is deliberately not persisted. A remembered mute would mean a
 * visitor returning later presses play and hears nothing, with the reason
 * sitting in a control they have not noticed yet.
 */
export const MuteToggle = () => {
  const { engaged, muted, playing, toggleMuted } = useSketchpad();

  if (!engaged) return null;

  const label = muted ? 'Muted' : playing ? 'Playing' : 'Sound';

  return (
    <Button
      type="button"
      onClick={toggleMuted}
      $muted={muted}
      aria-pressed={muted}
      aria-label={muted ? 'Unmute sound' : 'Mute sound'}
      title={muted ? 'Unmute sound' : 'Mute sound'}
    >
      {muted ? <FiVolumeX size={15} /> : <FiVolume2 size={15} />}
      <Label>{label}</Label>
    </Button>
  );
};

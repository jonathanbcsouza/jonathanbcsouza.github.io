import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const MenuItem = styled.li`
  /* The item itself must be removed from the flex row, not just the button.
     While it stayed a zero-width flex item, the row's gap still applied and
     pushed every label 34px right of the page's left edge. */
  display: none;

  @media (max-width: 615px) {
    display: block;
  }
`;

// Sized to the icon rather than the full bar. At 100% width its hit area
// covered the whole top bar, so a tap anywhere up there opened the menu, and
// it sat underneath the mute control.
const StyledMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--nav-height);
  min-height: var(--nav-height);
  margin-left: auto;
  padding: 0;
  border: none;
  font-size: 1.3333em;
  color: var(--text-orange);
  background: transparent;
  cursor: pointer;
`;

export const DropdownMenu = ({ isMenuOpen, onToggle }) => (
  <MenuItem>
    <StyledMenuBtn
      type="button"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
      onClick={onToggle}
    >
      {isMenuOpen ? <FaTimes /> : <FaBars />}
    </StyledMenuBtn>
  </MenuItem>
);

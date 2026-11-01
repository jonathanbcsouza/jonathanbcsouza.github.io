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

const StyledMenuBtn = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: var(--nav-height);
  padding: 0 20px;
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

import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'

const StyledMenuBtn = styled.button`
  display: none;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px 25px;
  border: none;
  font-size: 1.3333em;
  color: var(--text-orange);
  background: transparent;
  cursor: pointer;

  @media (max-width: 615px) {
    display: flex;
  }
`

export const DropdownMenu = ({ isMenuOpen, onToggle }) => (
  <li>
    <StyledMenuBtn
      type="button"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isMenuOpen}
      onClick={onToggle}
    >
      {isMenuOpen ? <FaTimes /> : <FaBars />}
    </StyledMenuBtn>
  </li>
)

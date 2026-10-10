import { useState } from 'react';
import styled from 'styled-components';
import { DropdownMenu } from './DropdownMenu';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  top: 0;
  width: 100%;
  padding-left: calc(5vw + 60px);
  z-index: 2;
  text-transform: uppercase;

  @media (max-width: 615px) {
    padding-left: 0vw;
    position: fixed;
  }

  a {
    text-decoration: none;
  }

  ul {
    display: flex;
    text-align: center;

    @media (max-width: 615px) {
      flex-direction: column;
      background: var(--background-colour);
    }

    a:hover {
      color: var(--text-hovers);
      border-bottom: 1px solid;
      border-color: var(--text-hovers);
    }
  }
`;

const StyledLi = styled.li`
  a {
    display: block;
    padding: 30px;
    color: var(--text-white);
  }
  @media (max-width: 615px) {
    display: ${(props) => (props.$isMenuOpen ? '' : 'none')};
    height: inherit;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:active {
    background: #121212;
  }
`;

const routes = [
  { title: 'Home', url: '/home' },
  { title: 'About', url: '/about' },
  { title: 'Labs', url: '/labs' },
  { title: 'Music', url: '/music' },
];

const NavbarItem = ({ item, isMenuOpen, onNavigate }) => (
  <StyledLi $isMenuOpen={isMenuOpen}>
    <StyledNavLink to={item.url} onClick={onNavigate}>
      {item.title}
    </StyledNavLink>
  </StyledLi>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <StyledNav>
      <ul>
        <DropdownMenu
          isMenuOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((open) => !open)}
        />
        {routes.map((item) => (
          <NavbarItem
            key={item.url}
            item={item}
            isMenuOpen={isMenuOpen}
            onNavigate={() => setIsMenuOpen(false)}
          />
        ))}
      </ul>
    </StyledNav>
  );
};

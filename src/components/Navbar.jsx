import { useState } from 'react';
import styled from 'styled-components';
import { DropdownMenu } from './DropdownMenu';
import { NavLink } from 'react-router-dom';
import { siteRoutes } from '../data/siteRoutes';

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
    display: ${(props) => (props.$isMenuOpen ? 'block' : 'none')};
    height: inherit;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:active {
    background: #121212;
  }
`;

const NavbarItem = ({ route, isMenuOpen, onNavigate }) => (
  <StyledLi $isMenuOpen={isMenuOpen}>
    <StyledNavLink
      to={route.path}
      end={route.path === '/'}
      onClick={onNavigate}
    >
      {route.title}
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
        {siteRoutes.map((route) => (
          <NavbarItem
            key={route.path}
            route={route}
            isMenuOpen={isMenuOpen}
            onNavigate={() => setIsMenuOpen(false)}
          />
        ))}
      </ul>
    </StyledNav>
  );
};

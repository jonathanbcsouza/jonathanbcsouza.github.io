import { useState } from 'react';
import styled from 'styled-components';
import { DropdownMenu } from './DropdownMenu';
import { NavLink, Link } from 'react-router-dom';
import { siteRoutes } from '../data/siteRoutes';
import { MuteToggle } from './MuteToggle';

const StyledNav = styled.nav`
  width: min(92%, 1180px);
  margin: 0 auto;
  text-transform: uppercase;
  font-size: 0.92em;
  letter-spacing: 0.06em;

  @media (max-width: 615px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    z-index: 3;
    background: var(--dark-red);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.55);
  }

  ul {
    display: flex;
    /* Spacing comes from gap rather than link padding, so the first label
       lines up with the page content's left edge instead of sitting 20px
       inside it. */
    gap: 34px;

    @media (max-width: 615px) {
      flex-direction: column;
      gap: 0;
      background: var(--dark-red);
    }
  }
`;

// The mobile bar was an empty strip with only the menu icon on the right.
// The name gives it a left anchor and a way home from any page.
// A plain Link, not a NavLink: as a NavLink it also claimed
// aria-current="page" on the home route, so the nav announced two current
// pages at once.
const MobileBrand = styled(Link)`
  display: none;

  @media (max-width: 615px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 24px;
    height: var(--nav-height);
    color: var(--text-white);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-decoration: none;
    z-index: 1;
  }
`;

const StyledLi = styled.li`
  @media (max-width: 615px) {
    display: ${(props) => (props.$isMenuOpen ? 'block' : 'none')};
  }
`;

const MuteItem = styled.li`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 615px) {
    position: absolute;
    top: 0;
    right: 56px;
    height: var(--nav-height);
    margin: 0;
  }
`;

// The indicator is a pseudo-element pinned just under the label. As a
// border-bottom it sat at the base of the link's padding, which read as a
// detached line roughly 30px below the word.
const StyledNavLink = styled(NavLink)`
  position: relative;
  display: block;
  padding: 18px 0;
  color: var(--text-white);
  text-decoration: none;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    height: 2px;
    background: var(--text-orange);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover {
    color: var(--text-hovers);
  }

  &:hover::after,
  &[aria-current='page']::after {
    opacity: 1;
  }

  &[aria-current='page'] {
    color: var(--text-orange);
  }

  @media (max-width: 615px) {
    padding: 14px 24px;

    /* Stacked full-width rows: an underline spanning the row reads as a
       divider, so colour alone marks the current page. */
    &::after {
      display: none;
    }
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
      <MobileBrand to="/" onClick={() => setIsMenuOpen(false)}>
        Jonathan Souza
      </MobileBrand>
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
        <MuteItem>
          <MuteToggle />
        </MuteItem>
      </ul>
    </StyledNav>
  );
};

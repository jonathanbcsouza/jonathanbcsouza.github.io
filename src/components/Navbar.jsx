import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownMenu } from './DropdownMenu';
import { NavLink } from 'react-router-dom';
import data from '../data/data.json';

const StyledNav = styled.nav`
  top: 0;
  width: 100%;
  padding-left: 5vw;
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

    * :hover {
      color: var(--text-hovers);
      border-bottom: 1px solid;
      border-color: var(--text-hovers);
    }
  }
`;

const StyledLi = styled.div`
  a {
    display: block;
    padding: 30px;
    color: var(--text-white);
  }
  @media (max-width: 615px) {
    display: ${(props) => (props.$isBtnClicked ? 'none' : '')};
    height: inherit;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:active {
    background: '#121212';
  }
`;

const NavbarItem = ({ item, isMenuOpen }) => (
  <StyledLi $isBtnClicked={isMenuOpen}>
    <StyledNavLink to={item.url}>{item.title}</StyledNavLink>
  </StyledLi>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const handleToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <StyledNav>
      <ul onClick={handleToggle}>
        <DropdownMenu isBtnClicked={isMenuOpen} />
        {data.navitems.map((item) => (
          <NavbarItem key={item.title} item={item} isMenuOpen={isMenuOpen} />
        ))}
      </ul>
    </StyledNav>
  );
};

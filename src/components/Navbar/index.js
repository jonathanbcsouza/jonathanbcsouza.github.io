import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuItems } from './menuItems';
import DropdownMenu from '../DropdownMenu';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  text-transform: uppercase;
  position: fixed;
  top: 0;
  z-index: 3;
  padding-left: 5vw;
  width: 100%;

  @media (max-width: 615px) {
    padding-left: 0vw;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    float: left;

    @media (max-width: 615px) {
      flex-direction: column;
      border-color: none;
      float: none;
      padding-left: 0vw;
    }

    * :hover {
      color: var(--text-hovers);
      border-bottom: 1px solid;
      border-color: var(--text-hovers);
    }
  }
`;

const StyledLi = styled.div`
  margin: 10px;

  a {
    display: block;
    padding: 30px;
    color: var(--text-white);
  }
  @media (max-width: 615px) {
    display: ${(props) => (props.isBtnCLicked ? 'none' : '')};
    height: inherit;
    margin: 10px 0;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => setOpen(!open);

  return (
    <StyledNav>
      <ul>
        <div onClick={handleToggle}>
          <DropdownMenu isBtnCLicked={open} />
        </div>
        {MenuItems.map((item) => {
          return (
            <StyledLi isBtnCLicked={open} key={item.id}>
              <NavLink
                onClick={handleToggle}
                activeStyle={{ background: '#121212' }}
                to={item.url}
              >
                {item.title}
              </NavLink>
            </StyledLi>
          );
        })}
      </ul>
    </StyledNav>
  );
};

export default Navbar;

import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "./menuItems";
import DropdownIcon from "../DropdownIcon";

const StyledNav = styled.nav`
  text-transform: uppercase;
`;

const StyledLogo = styled.img`
  font-size: 1.45em;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  list-style: none;

  @media (min-width: 615px) {
    flex-direction: row;
  }
`;

const StyledLi = styled.li`
  margin: 20px;

  a {
    text-decoration: none;
    color: white;
    flex-direction: row;
    &:hover {
      transition: 0.5s;
      color: red;
    }
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => setOpen(!open);

  return (
    <StyledNav onClick={handleToggle}>
      <StyledUl>
        <DropdownIcon openProps={open} />
        <StyledLogo />
        {MenuItems.map((item) => {
          if (open === false) {
          }
          return (
            <StyledLi isDropdownOpen={open} key={item.id}>
              <a href={item.url}>{item.title}</a>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;

import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "./menuItems";
import DropdownIcon from "../DropdownIcon";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  text-transform: uppercase;
  overflow: hidden;
  position: fixed;
  background: black;
  width: 100%;
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

const StyledLi = styled.div`
  margin: 10px;
  a {
    display: block;
    padding: 30px;
    text-decoration: none;
    color: white;
  }
  &:hover {
    background: #444444;
    cursor: pointer;
    transition: 0.5s;
    color: red;
  }

  @media (max-width: 615px) {
    display: ${(props) => (props.isBtnCLicked ? "none" : "")};
    height: inherit;
  }
`;

const StyledMenuicon = styled.div``;

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const handleToggle = () => setOpen(!open);

  return (
    <StyledNav>
      <StyledUl>
        <StyledMenuicon onClick={handleToggle}>
          <DropdownIcon isBtnCLicked={open} />
        </StyledMenuicon>
        {MenuItems.map((item) => {
          return (
            <StyledLi isBtnCLicked={open} key={item.id}>
              <NavLink to={item.url}>{item.title}</NavLink>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;

import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "./menuItems";
import DropdownIcon from "../DropdownIcon";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  text-transform: uppercase;
  margin-top: -10px;
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
  color: var(--background);

  a {
    display: block;
    padding: 30px;
    text-decoration: none;
    color: var(--text-white);
  }
  &:hover {
    background: #121212;
    cursor: pointer;
    transition: 0.5s;
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
              <NavLink
                onClick={handleToggle}
                activeStyle={{
                  background: "#121212",
                }}
                to={item.url}
              >
                {item.title}
              </NavLink>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;

import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "./menuItems";
import DropdownIcon from "../DropdownIcon";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  text-transform: uppercase;
  margin-top: -10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;

  & :hover {
    color: var(--text-hovers);
    border-bottom: 1px solid;
    border-color: var(--text-hovers);
  }

  @media (max-width: 615px) {
    flex-direction: column;
    border-color: none;

    & :hover {
    color: var(--text-hovers);
    border-bottom: none;
    }
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

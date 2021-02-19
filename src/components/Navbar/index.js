import React, { useState } from "react";
import styled from "styled-components";
import { MenuItems } from "./menuItems";
import DropdownIcon from "../DropdownIcon";

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

const StyledLi = styled.li`
  padding: 20px;
  a {
    text-decoration: none;
    color: white;
    flex-direction: row;
  }
  &:hover {
    background: #444444;
    cursor: pointer;
    transition: 0.5s;
    color: red;
  }

  @media (max-width: 615px) {
    display: ${(props) => (props.isBtnCLicked ? "none" : "")};
    height: 0;
  }
`;

const StyledMenuicon = styled.li``;

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
              <a href={item.url}>{item.title}</a>
            </StyledLi>
          );
        })}
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;

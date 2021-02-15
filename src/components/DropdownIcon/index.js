import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const StyledMenuBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: ${(props) => props.colour};
  background-image: linear-gradient(${(props) => props.backColour}, #000);
  cursor: pointer;
  padding: 10px 25px;
  height: 50px;
  font-size: 24px;

  &:hover {
    background-image: linear-gradient(#272643, #000);
    cursor: pointer;
    transition: 0.5s;
  }
  @media (min-width: 615px) {
    display: none;
  }
`;

const Menuicon = (props) => {
  if (props.isBtnCLicked) {
    return (
      <StyledMenuBtn colour={"red"}>
        <FaBars />
      </StyledMenuBtn>
    );
  }
  return (
    <StyledMenuBtn backColour={"#272643"} colour={"darkred"}>
      <FaTimes />
    </StyledMenuBtn>
  );
};

export default Menuicon;

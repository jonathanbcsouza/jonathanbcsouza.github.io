import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const StyledMenuBtn = styled.div`
  color: ${(props) => props.colour};
  cursor: pointer;
  padding: 10px;
  text-align: right;

  @media (min-width: 615px) {
    display: none;
  }
`;

const DropdownIcon = (props) => {
  if (props.openProps) {
    return (
      <StyledMenuBtn colour={"red"}>
        <FaBars />
      </StyledMenuBtn>
    );
  }
  return (
    <StyledMenuBtn colour={"darkred"}>
      <FaTimes />
    </StyledMenuBtn>
  );
};

export default DropdownIcon;

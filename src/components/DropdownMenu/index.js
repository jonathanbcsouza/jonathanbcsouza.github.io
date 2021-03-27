import React from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const StyledMenuBtn = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 25px;
  height: 50px;
  font-size: 1.3333em;
  cursor: pointer;
  color: var(--text-orange);
  background-image: linear-gradient(${(props) => props.colour}, #000);

  @media (max-width: 615px) {
    display: flex;
  }
`;

const Menuicon = (props) => {
  if (props.isBtnCLicked) {
    return (
      <StyledMenuBtn>
        <FaBars />
      </StyledMenuBtn>
    );
  }
  return (
    <StyledMenuBtn>
      <FaTimes />
    </StyledMenuBtn>
  );
};

export default Menuicon;

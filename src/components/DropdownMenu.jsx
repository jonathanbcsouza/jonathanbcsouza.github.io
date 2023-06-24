import React from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from 'react-icons/fa'

const StyledMenuBtn = styled.div`
  display: none;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  padding: 10px 25px;
  font-size: 1.3333em;
  color: var(--text-orange);
  background-image: linear-gradient(${(props) => props.colour}, #000);
  cursor: pointer;

  @media (max-width: 615px) {
    display: flex;
  }
`

export const DropdownMenu = (props) => {
  if (props.isBtnCLicked) {
    return (
      <StyledMenuBtn>
        <FaBars />
      </StyledMenuBtn>
    )
  }
  return (
    <StyledMenuBtn>
      <FaTimes />
    </StyledMenuBtn>
  )
}

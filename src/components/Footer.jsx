import React from 'react'
import styled from 'styled-components'
import { SocialMedia } from './SocialMedia'

const currentDate = new Date().getFullYear()

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  border-top: 1px solid var(--headers);
  padding-bottom: 10px;
  font-size: 12px;
  color: var(--text-orange);
  text-align: center;
  background: var(--background-colour);
  z-index: 1;
`

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialMedia />
      <br />
      <p>Copyright {currentDate} © Jonathan Souza</p>
    </StyledFooter>
  )
}

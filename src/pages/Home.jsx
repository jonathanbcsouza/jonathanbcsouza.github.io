import React, { useState } from 'react'
import styled from 'styled-components'
import { Greetings } from '../components/Greetings'
import { updateGreeting } from '../utils/stringUtils'
import { setTextLightness } from '../utils/styleUtils'
import { convertTimeToPercent } from '../utils/timeUtils'

const StyledContainer = styled.div`
  margin-top: 15vh;
  padding-left: 7.5vw;
  color: var(--text-white);

  h2 {
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  p {
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-delay: 1s;
    margin-top: 20px
  }

  .styledGreeting {
    animation-delay: 2s;
  }

  @keyframes text_entrance {
    from {
      top: 0px;
      opacity: 0;
    }
    to {
      top: 20px;
      opacity: 1;
    }
  }

  @media (max-width: 615px) {
    margin-top: 20vh;
  }
`

export const Home = () => {
  const timeInPercent = convertTimeToPercent()
  const [greeting, setGreeting] = useState('loading...')
  const [lightness, setLightness] = useState('...')

  setInterval(() => {
    setTextLightness(timeInPercent, setLightness)
    updateGreeting(setGreeting)
  }, 1000)

  return (
    <StyledContainer>
      <h2>I am Jonathan Souza.</h2>
      <p>Software Enginner with passion for the web, innovation, and music.</p>
      <Greetings greeting={greeting} hsl={lightness} />
    </StyledContainer>
  )
}

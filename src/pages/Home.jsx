import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Greetings } from '../components/Greetings'
import { showTime } from '../utils/timerUtils'

const StyledContainer = styled.div`
  position: relative;
  top: 20vh;
  padding-left: 7.5vw;
  color: var(--text-white);
  z-index: 0;
  height: 200px;

  h2 {
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  p {
    position: relative;
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  p {
    animation-delay: 1s;
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
    padding-left: 3vw;
  }
`

const currentTime = new Date().getHours()

export const Home = () => {
  const time = showTime()

  const [colourLightness, setTextColour] = useState('...')
  function updateColour() {
    const setLightness = 100 - timeToPercent() / 2
    setTextColour(setLightness)
  }

  const [hour, min, sec] = time.split(':')
  const timeToString = hour + min + sec

  function timeToPercent() {
    const total = 235959
    return Math.round((timeToString * 100) / total)
  }

  const [greeting, setGreeting] = useState('loading...')

  function updateGreeting() {
    let displayGreeting
    if (currentTime > 6 && currentTime < 12) {
      displayGreeting = 'Good morning'
    } else if (currentTime < 17) {
      displayGreeting = 'Good afternoon'
    } else {
      displayGreeting = 'Good evening'
    }
    setGreeting(displayGreeting)
  }

  setInterval(() => {
    updateColour()
    updateGreeting()
  }, 1000)

  return (
    <StyledContainer>
      <h2>I am Jonathan Souza.</h2>
      <p>Software Enginner with passion for the web, innovation, and music.</p>
      <br />
      <Greetings greeting={greeting} hsl={colourLightness} />
      <br />
      <Greetings
        greeting={'Auckland, New Zealand - ' + time}
        hsl={colourLightness}
      />
    </StyledContainer>
  )
}

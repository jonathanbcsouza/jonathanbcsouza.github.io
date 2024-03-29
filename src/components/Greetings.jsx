import React from 'react'
import styled from 'styled-components'

const StyledGreetings = styled.p`
  color: hsl(35, 100%, ${(props) => props.$setLightness + '%'});
`

export const Greetings = (props) => {
  return (
    <StyledGreetings className="styledGreeting" $setLightness={props.hsl}>
      {props.greeting} <br />
    </StyledGreetings>
  )
}

import React from 'react';
import styled from 'styled-components';

const StyledGreetings = styled.p`
  z-index: 2;
  color: hsl(35, 100%, ${(props) => props.setLightness + '%'});
`;

const Greetings = (props) => {
  return (
    <StyledGreetings className="styledGreeting" setLightness={props.setHsl}>
      {props.setGreeting}
    </StyledGreetings>
  );
};

export default Greetings;

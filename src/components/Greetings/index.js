import React, { useState } from "react";
import styled from "styled-components";

const StyledGreetings = styled.p`
  display: inline-block;
  z-index: 2;
  color: hsl(35, 100%, ${(props) => props.setLightness + "%"});
`;

const currentTime = new Date().getHours();

const Greetings = (props) => {
  const [greeting, setGreeting] = useState("loading...");
  function updateGreeting() {
    let displayGreeting;

    if (currentTime > 6 && currentTime < 12) {
      displayGreeting = "morning";
    } else if (currentTime < 17) {
      displayGreeting = "afternoon";
    } else {
      displayGreeting = "evening";
    }

    setGreeting(displayGreeting);
  }

  setInterval(() => {
    updateGreeting();
  }, 1000);

  return (
    <StyledGreetings setLightness={props.setHsl}>
      <br />
      <p>Good {greeting}</p>
    </StyledGreetings>
  );
};

export default Greetings;

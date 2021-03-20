import React, { useState } from "react";
import styled from "styled-components";

const StyledGreetings = styled.div`
  position: relative;
  top: 0vh;
  display: inline-block;
  font-size: smaller;
  float: right;
  margin-right: 2%;
  z-index: 3;

  @media (max-width: 615px) {
    float: left;
    margin-left: 10px;
  }

  p {
    color: hsl(35, 100%, ${(props) => props.colourOfHour + "%"});
  }
`;

const currentTime = new Date().getHours();

const Greetings = () => {
  const [time, setTime] = useState("loading...");
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  const [greeting, setGreeting] = useState("loading...");
  function updateGreeting() {
    let displayGreeting;

    switch (true) {
      case currentTime > 6 && currentTime < 12:
        displayGreeting = "morning";
        break;
      case currentTime === 12:
        displayGreeting = "noon";
        break;
      case currentTime < 17:
        displayGreeting = "afternoon";
        break;
      case currentTime < 21:
        displayGreeting = "evening";
        break;
      default:
        displayGreeting = "night";
    }
    setGreeting(displayGreeting);
  }

  // Iterate the (HSL) negatively from 100% to a limit of 50%
  // It syncs with the daytime
  const [colourLightness, setTextColour] = useState("...");
  function updateColour() {
    const setLightness = 100 - timeToPercent(timeToString) / 2;
    setTextColour(setLightness);
  }

  const [hour, min, sec] = time.split(":");
  const timeToString = hour + min + sec;

  function timeToPercent() {
    const total = 235959;
    return Math.round((timeToString * 100) / total);
  }

  setInterval(() => {
    updateTime();
    updateColour();
    updateGreeting();
  }, 1000);

  return (
    <>
      <StyledGreetings colourOfHour={colourLightness}>
        <br />
        <p>Good {greeting}.</p>
      </StyledGreetings>
    </>
  );
};

export default Greetings;

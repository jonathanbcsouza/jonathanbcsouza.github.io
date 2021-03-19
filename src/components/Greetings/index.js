import React, { useState } from "react";
import styled from "styled-components";

const StyledGreetings = styled.div`
  position: relative;
  top: 0vh;
  z-index: 11;
  display: inline-block;
  font-size: smaller;
  float: right;
  margin-right: 2%;

  @media (max-width: 615px) {
    float: left;
    margin-left: 10px;
  }
`;

let currentTime;
const currentTimeStr = new Date().toLocaleTimeString();

const Greetings = () => {
  const [textColour, setTextColour] = useState("#d8b97f");
  function updateColour() {
    currentTime = new Date().getHours();
    let checkColour;
    const newColour = handleHookStatement(
      checkColour,
      "d8b97f",
      "orange",
      "darkorange"
    );
    setTextColour(newColour);
  }

  const [greeting, setGreeting] = useState("...");
  function updateGreeting() {
    currentTime = new Date().getHours();
    let checkGreeting;
    const newGreeting = handleHookStatement(
      checkGreeting,
      "morning",
      "afternoon",
      "evening"
    );
    setGreeting(newGreeting);
  }

  const [time, setTime] = useState(currentTimeStr);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(() => {
    updateTime();
    updateColour();
    updateGreeting();
  }, 1000);

  function handleHookStatement(focus, condA, condB, condC) {
    if (currentTime < 12) {
      focus = condA;
    } else if (currentTime < 18) {
      focus = condB;
    } else {
      focus = condC;
    }
    return focus;
  }

  const [hour, min, sec] = time.split(":");
  const timeToString = hour + min + sec;

  function timeSpent(params) {
    const total = 235959;
    return Math.round((params * 100) / total);
  }
  // left: ${(props) => props.width + "px"};
  // <StyledProgBar width={timeSpent(timeToString)}>HI</StyledProgBar>

  return (
    <>
      <br />
      <StyledGreetings>
        <p style={{ color: textColour }}>
          Good {greeting}. <br /> Total day spent {timeSpent(timeToString)} %.
        </p>
        <br />
        {/* <BackgroundImage/> */}
      </StyledGreetings>
    </>
  );
};

export default Greetings;

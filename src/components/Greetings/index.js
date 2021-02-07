import React, { useState } from "react";
import styled from "styled-components";

const StyledGreetings = styled.p`
  font-family: "opensans-bold";
  font-size: 24px;
  text-align: center;
`;

let currentTime;
const currentTimeStr = new Date().toLocaleTimeString();

const Greetings = () => {
  setInterval(updateTime, 1000);
  const [time, setTime] = useState(currentTimeStr);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateColour, 1000);
  const [textColour, setTextColour] = useState("#d8b97f");
  function updateColour() {

    currentTime = new Date().getHours();
    let newColour;

    if (currentTime < 12) {
      newColour = "d8b97f";
    } else if (currentTime < 18) {
      newColour = "red";
    } else {
      newColour = "green";
    }
    setTextColour(newColour);
  }

  setInterval(updateGreeting, 1000);
  const [greeting, setGreeting] = useState("...");
  function updateGreeting() {

    currentTime = new Date().getHours();
    let newGreeting;

    if (currentTime < 12) {
      newGreeting = "morning";
    } else if (currentTime < 18) {
      newGreeting = "afternoon";
    } else {
      newGreeting = "evening";
    }
    setGreeting(newGreeting);
  }

  return (
    <>
      <br />
      <StyledGreetings>
        <p style={{ color: textColour }}>
          Good {greeting} - {time}
        </p>
        <br />
      </StyledGreetings>
    </>
  );
};

export default Greetings;

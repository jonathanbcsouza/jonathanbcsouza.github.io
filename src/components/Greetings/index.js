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
    
    let checkColour;
    const newColour = setStatement(checkColour, "d8b97f", "red", "green");
    setTextColour(newColour);
  }

  setInterval(updateGreeting, 1000);
  const [greeting, setGreeting] = useState("...");
  function updateGreeting() {
    currentTime = new Date().getHours();
    
    let checkGreeting;
    const newGreeting = setStatement(checkGreeting,"morning", "afternoon", "evening");
    setGreeting(newGreeting);
  }


  function setStatement(focus, condA, condB, condC) {
    if (currentTime < 12) {
      focus = condA;
    } else if (currentTime < 18) {
      focus = condB;
    } else {
      focus = condC;
    }
    return focus;
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

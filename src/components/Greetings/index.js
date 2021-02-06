import React, { useState } from "react";
import styled from "styled-components";

const StyledGreetings = styled.p`
  font-family: "opensans-bold";
  font-size: 24px;
  text-align: center;
  color: ${({ styledColour }) => `${styledColour}`};
`;

const currentTime = new Date().getHours();
let greeting;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "morning";
  customStyle.color = "#da0132";
} else if (currentTime < 18) {
  greeting = "afternoon";
  customStyle.color = "#orange";
} else {
  greeting = "evening";
  customStyle.color = "#da0132";
}

const time = new Date().toLocaleTimeString();

const Greetings = ({ setColour }) => {
  setInterval(updateTime, 1000);
  const [getTime, setTime] = useState(time);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(updateGreeting, 1000);
  const [getGreet, setGreet] = useState(greeting);
  function updateGreeting() {
    const newGreet = greeting;
    setGreet(newGreet);
  }

  return (
    <>
      <br></br>
      <StyledGreetings styledColour={setColour}>
        <p style={customStyle}>
          Good {getGreet} - {getTime}
        </p>
        <br></br>
      </StyledGreetings>
    </>
  );
};

export default Greetings;

import React from "react";
import { StyledGreetings } from "./styles";

const currentTime = new Date().getHours();

let greeting;

const customStyle = {
  color: "",
};

if (currentTime < 12) {
  greeting = "morning";
  customStyle.color = "orange";
} else if (currentTime < 18) {
  greeting = "afternoon";
  customStyle.color = "red";
} else {
  greeting = "evening";
  customStyle.color = "green";
}

const Greetings = ({ setSentence, setColour }) => {
  return (
    <>
      <br></br>
      <StyledGreetings styledColour={setColour}>
        <p style={customStyle}>Good {greeting}</p>
        <br></br>
        {setSentence}
      </StyledGreetings>
    </>
  );
};

export default Greetings;

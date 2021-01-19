import React from "react";
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
  customStyle.color = "#d8b97f";
} else if (currentTime < 18) {
  greeting = "afternoon";
  customStyle.color = "#orange";
} else {
  greeting = "evening";
  customStyle.color = "#da0132";
}

const Greetings = ({ setColour }) => {
  return (
    <>
      <br></br>
      <StyledGreetings styledColour={setColour}>
        <p style={customStyle}>Good {greeting}</p>
        <br></br>
      </StyledGreetings>
    </>
  );
};

export default Greetings;

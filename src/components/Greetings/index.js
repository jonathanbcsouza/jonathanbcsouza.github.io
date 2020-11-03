import React from "react";
import styled from "styled-components";

const StyledGreetings = styled.h3`

font-family:'opensans-bold';
font-size: 24px;
margin-left: 32px;
color: ${({styledColour}) => `${styledColour}`}
`;


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

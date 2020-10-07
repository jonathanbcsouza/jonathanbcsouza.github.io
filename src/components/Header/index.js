import React from "react";
import { StyledHeader } from "./styles";
import ProfilePhoto from "../ProfilePhoto";

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

const Header = ({ setFontSize }) => {
  return (
    <>
      <StyledHeader styledFont={setFontSize}>
        <ProfilePhoto />
        <p style={customStyle}>Good {greeting} </p>
      </StyledHeader>
    </>
  );
};

export default Header;

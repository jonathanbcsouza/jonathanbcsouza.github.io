import React from "react";
import { StyledHeader } from "./styles";
import ProfilePhoto from "../ProfilePhoto";

const Header = ({ setFontSize }) => {
  return (
    <>
      <StyledHeader styledFont={setFontSize}>
        <ProfilePhoto />
        <p></p>
      </StyledHeader>
    </>
  );
};

export default Header;

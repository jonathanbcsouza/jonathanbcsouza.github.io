import React from 'react';
import { StyledFooter } from "./styles";
import SocialMedia from "../SocialMedia/index";

const currentDate = new Date().getFullYear();

const MakeFooter = () => {
  return (
    <>
      <StyledFooter>
        <SocialMedia />
        <br />
        <p>Copyright {currentDate} @ Jonathan Souza</p>
      </StyledFooter>
    </>
  );
};

export default MakeFooter;

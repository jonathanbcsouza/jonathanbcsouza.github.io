import React from "react";
import styled from "styled-components";
import SocialMedia from "../SocialMedia/index";

const currentDate = new Date().getFullYear();

const StyledFooter = styled.div`
  position: fixed;
  color: var(--text-orange);
  padding-bottom: 10px;
  bottom: 0;
  width: 100vw;
  text-align: center;
  font-size: 12px;
  border-top: 1px solid var(--headers);
`;

const MakeFooter = () => {
  return (
    <StyledFooter>
      <SocialMedia />
      <br />
      <p>Copyright {currentDate} © Jonathan Souza</p>
    </StyledFooter>
  );
};

export default MakeFooter;

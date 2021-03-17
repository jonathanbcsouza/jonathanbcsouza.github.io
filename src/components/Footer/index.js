import React from "react";
import styled from "styled-components";
import SocialMedia from "../SocialMedia/index";

const currentDate = new Date().getFullYear();

const StyledFooter = styled.div`
  text-align: center;
  color: var(--text-orange);
  font-size: 12px;
  border-top: 1px solid var(--headers);
  padding-bottom: 10px;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const MakeFooter = () => {
  return (
    <>
      <StyledFooter>
        <SocialMedia />
        <br/>
        <p>Copyright {currentDate} © Jonathan Souza</p>
      </StyledFooter>
    </>
  );
};

export default MakeFooter;

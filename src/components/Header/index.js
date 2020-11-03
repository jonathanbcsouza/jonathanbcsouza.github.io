import React from "react";
import styled from "styled-components";
import ProfilePhoto from "../ProfilePhoto";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;

  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  font-size: ${({ styledFont }) => `${styledFont}px`};
`;


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

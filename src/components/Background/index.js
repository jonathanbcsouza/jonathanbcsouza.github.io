import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  height: 80vh;
  background-position: none;
  background-repeat: no-repeat;
  background-size: contain;
  filter: grayscale(40%);
  margin-top: 10vh;
  background-image: url("https://pbs.twimg.com/media/EsJqDoAU0AInOjw?format=jpg&name=4096x4096");

  @media (min-width: 615px) {
    background-position: center;
    margin-top: 1vh;
  }
`;

const Background = () => {
  return (
    <>
      <StyledBackground />
    </>
  );
};

export default Background;

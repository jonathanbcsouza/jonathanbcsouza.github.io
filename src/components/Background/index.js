import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  height: 73vh;
  width: 100vw;
  background-size: 100vh;
  filter: grayscale(40%);
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://pbs.twimg.com/media/EsJqDoAU0AInOjw?format=jpg&name=4096x4096")
`;

const Background = () => {
  return (
    <>
      <StyledBackground />
    </>
  );
};

// const Background = () => <StyledBackground />;

export default Background;

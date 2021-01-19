import React from "react";
import styled from "styled-components";

const StyledBackground = styled.img`

  margin:0;
  height: 73vh;
  width: 100vw;
  background-size: 100vh;
  background-image: url("https://pbs.twimg.com/media/EsFNf0hVoAA8cWe?format=jpg&name=4096x4096");
  filter: grayscale(40%);
  /* background-repeat: no-repeat; */}
  background-position: center;
  position: absolute;
  content: "";
  overflow: hidden;

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

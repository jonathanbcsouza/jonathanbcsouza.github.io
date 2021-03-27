import React, { useState } from "react";
import styled from "styled-components";
import Greetings from "../components/Greetings/index";

const StyledContainer = styled.div`
  position: relative;
  top: 20vh;
  padding-left: 7.5vw;
  color: var(--text-white);
  z-index: 0;
  height: 200px;

  h2 {
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  p {
    position: relative;
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
  }
  p {
    height: 0;
    animation-delay: 1s;
  }

  @keyframes text_entrance {
    from {
      top: 0px;
      opacity: 0;
    }
    to {
      top: 20px;
      opacity: 1;
    }
  }

  @media (max-width: 615px) {
    padding-left: 3vw;
  }
`;

const Home = () => {
  const [time, setTime] = useState("loading...");
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  // Iterate the (HSL) negatively from 100% to a limit of 50%
  // It syncs with the daytime
  const [colourLightness, setTextColour] = useState("...");
  function updateColour() {
    const setLightness = 100 - (timeToPercent() / 2);
    setTextColour(setLightness);
  }

  const [hour, min, sec] = time.split(":");
  const timeToString = hour + min + sec;
  function timeToPercent() {
    const total = 235959;
    return Math.round((timeToString * 100) / total);
  }

  setInterval(() => {
    updateTime();
    updateColour();
  }, 1000);


  return (
    <StyledContainer>
      <h2>I am Jonathan Souza.</h2>
      <p>I am a Web Developer with passion for the web, innovation and art.</p>
      <br />
      <Greetings setHsl={colourLightness} />
    </StyledContainer>
  );
};

export default Home;

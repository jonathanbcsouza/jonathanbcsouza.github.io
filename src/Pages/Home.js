import React from "react";
import styled from "styled-components";

const Home = () => {
  const StyledContainer = styled.div`
    padding-top: 300px;
    margin-bottom: 10vh;
    padding-left: 20vw;
    color: var(--text-white);
    z-index: 0;

    h1,
    p {
      max-width: 90%;
      position: relative;
      animation-name: text_entrance;
      animation-duration: 3s;
      animation-delay: 0.5s;
      left: 10px;
      animation-fill-mode: both;
    }
    p {
      animation-delay: 2s;
    }
    @keyframes text_entrance {
      from {
        top: 0px;
        color: black;
      }
      to {
        top: 20px;
        color: white;
      }
    }

    @media (max-width: 615px) {
      padding: 7vw;
      padding-top: 50%;
    }
  `;

  return (
    <StyledContainer>
      <h1>Jonathan Souza</h1>
      <br></br>
      <p>A Web Developer with passion for the web, innovation and art.</p>
    </StyledContainer>
  );
};

export default Home;

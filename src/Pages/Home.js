import React from "react";
import styled from "styled-components";

const Home = () => {
  const StyledContainer = styled.div`
    color: var(--text-white);
    position: absolute;
    top: 200px;
    z-index: 0;
    padding-left: 30vw;

    h1,
    p {
      animation-name: text_entrance;
      animation-duration: 3s;
      animation-delay: 0.5s;
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
      padding-left: 3vw;
      margin: 0;
      max-width: 90%;
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

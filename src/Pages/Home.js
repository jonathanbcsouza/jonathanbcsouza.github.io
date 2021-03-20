import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    color: var(--text-white);
    position: absolute;
    top: 200px;
    z-index: 0;
    padding-left: 30vw;
    width: 100%;
    height: 100%;

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
      }
      to {
        top: 20px;
]      }
    }

    @media (max-width: 615px) {
      padding-left: 3vw;
      margin: 0;
      max-width: 90%;
    }
  `;

const Home = () => {
  return (
    <StyledContainer>
      <h1>Jonathan Souza</h1>
      <br></br>
      <p>A Web Developer with passion for the web, innovation and art.</p>
      <br />
    </StyledContainer>
  );
};

export default Home;

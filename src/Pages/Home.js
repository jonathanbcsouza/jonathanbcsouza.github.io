import React from "react";
import styled from "styled-components";

const Home = () => {
  const StyledContainer = styled.div`
  height:70vh;
  width:100vw;
  margin-left:25vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    color: var(--text-white);
    z-index: 0;

    @media (max-width: 615px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-left:10px;

    }
  `;

  return (
    <StyledContainer>
      <h1>Jonathan Souza</h1>
      <br></br>
      <p>A Full-stack enginner with passion for the web, innovation and art.</p>
    </StyledContainer>
  );
};

export default Home;

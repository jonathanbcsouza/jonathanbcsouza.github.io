import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { MyIframes } from "../Pages/MyIframes";

const Lab = () => {
  const StyledDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 10% 0 20%;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    z-index: 0;
  `;

  return (
    <>
      <StyledDiv>
        {MyIframes.map((each) => (
          <Card iframe={each.src} title={each.title} tech={each.tech}></Card>
        ))}
      </StyledDiv>
    </>
  );
};

export default Lab;

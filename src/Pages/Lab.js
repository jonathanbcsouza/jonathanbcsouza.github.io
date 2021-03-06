import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { myIframes } from "../Pages/myIframes";

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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index:0;

  `;

  return (
    <>
      <StyledDiv>
        {myIframes.map((each) => (
          <Card iframe={each.src} title={each.title}></Card>
        ))}
      </StyledDiv>
    </>
  );
};

export default Lab;

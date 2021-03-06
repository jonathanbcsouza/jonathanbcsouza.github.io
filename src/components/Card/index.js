import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  z-index: 0;
  margin: 20px 20px 20px 20px;
  width: 640px;
  height: 360px;
  position: relative;

  iframe {
    opacity: 0.3;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
  }

  p {
    position: absolute;
    text-align: center;
    top: 29%;
    width: 100%;
    padding: 50px 0;
  }

  &:hover {
    iframe {
      border-radius: 0;
      opacity: 1;
      transition: opacity 0.2s linear;
    }
    p {
      display: none;
    }
  }
`;

const Card = (each) => {
  return (
    <StyledCard>
      <p>{each.title}</p>
      <iframe src={each.iframe} title={each.title}></iframe>
    </StyledCard>
  );
};

export default Card;

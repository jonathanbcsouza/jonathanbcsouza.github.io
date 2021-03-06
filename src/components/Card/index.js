import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  z-index: 0;
  margin: 20px 20px 20px 20px;
  width: 520px;
  height: 320px;
  position: relative;
  top: 0;
  transition: top 0.5s ease;
  iframe {
    opacity: 0.5;
    transition: opacity 0.2s ease;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    box-shadow: 1px 1px 5px 0px rgba(82, 82, 82, 0.75);
  }

  p {
    position: absolute;
    text-align: center;
    top: 29%;
    width: 100%;
    padding: 50px 0;
  }

  &:hover {
    top: -10px;
    transition: top 0.5s ease;
    iframe {
      opacity: 1;
      transition: opacity 0.2s ease;
      box-shadow: 8px 3px 15px 0px rgba(82, 82, 82, 0.85);
    }
    p {
      display: none;
    }
  }
`;

const Card = (each) => {
  return (
    <StyledCard>
      <p>
        <h3>{each.title}</h3>
        <br />
        {each.tech}
      </p>
      <iframe src={each.iframe} title={each.title}></iframe>
    </StyledCard>
  );
};

export default Card;

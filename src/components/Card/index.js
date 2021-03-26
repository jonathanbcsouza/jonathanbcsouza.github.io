import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  z-index: 0;
  margin: 25px 20px 0 20px;
  width: 520px;
  height: 320px;
  position: relative;
  top: 0;
  transition: top 0.5s ease;
  border-radius: 20px;
  box-shadow: 3px 3px 4px 1px rgba(50, 50, 50, 0.75);
  background: rgba(28, 27, 27, 0.29);

  iframe {
    filter: blur(2px);
    opacity: 0.5;
    width: 100%;
    height: 95%;
    text-align: center;
    margin: 10px;
    border: none;
    border-radius: 20px;
    max-width: 96%;
  }

  img {
    filter: blur(2px);
    max-height: 95%;
    margin: auto;
    display: block;
    border-radius: 20px;
    max-width: 96%;
  }

  p {
    position: absolute;
    text-align: center;
    top: 29%;
    width: 100%;
    padding: 50px 0;
    opacity: 0.9;
  }

  &:hover {
    top: -10px;
    transition: top 0.5s ease;
    -webkit-filter: saturate(1);

    iframe,
    img {
      filter: blur(0);
      opacity: 1;
      transition: opacity 0.2s ease, filter 0.2s ease;
      border: none;
    }
    p {
      display: none;
    }
  }

  @media (max-width: 615px) {
    width: 320px;
    height: 220px;
  }
`;

const Card = (each) => {
  const CustomTag = `${each.content}`;

  return (
    <StyledCard>
      <p>
        <h3>{each.title}</h3>
        <br />
        {each.tech}
      </p>
      <CustomTag
        allowfullscreen="allowfullscreen"
        src={each.src}
        title={each.title}
      ></CustomTag>
    </StyledCard>
  );
};

export default Card;

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
    filter: blur(2px);
    transition: filter 0.2s ease, filter 0.2s ease;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    border: 0;
    overflow: hidden;
    box-shadow: 6px 6px 5px 0px rgba(82, 82, 82, 0.75);
  }

  img {
    filter: blur(1px);
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    text-align: center;
    display: block;
    margin: auto;
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

    iframe,
    img {
      filter: blur(0);
      opacity: 1;
      transition: opacity 0.2s ease, filter 0.2s ease;
      box-shadow: 8px 3px 15px 0px rgba(82, 82, 82, 0.85);
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

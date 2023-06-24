import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  position: relative;
  width: 520px;
  height: 320px;
  margin: 25px 20px 0 20px;
  border-radius: 20px;
  box-shadow: 1px 5px 20px 1px rgba(50, 50, 50, 0.75);
  background: rgba(28, 27, 27, 0.29);
  transition: all 0.3s ease;

  iframe {
    border: none;
    border-radius: 20px;
    width: 100%;
    height: 95%;
    margin: 10px;
    max-width: 96%;
    filter: blur(2px);
    opacity: 0.5;
  }

  img {
    display: block;
    margin: auto;
    max-width: 96%;
    max-height: 95%;
    filter: blur(2px);
    border-radius: 20px;
  }

  div {
    position: absolute;
    padding: 50px 0;
    top: 29%;
    width: 100%;
    opacity: 0.9;
    text-align: center;
    background-color: black;
    z-index: 1;
  }

  &:hover {
    top: -10px;
    box-shadow: 8px 3px 15px 0px rgba(200, 118, 60, 0.75);
    transition: all 0.3s ease;

    iframe,
    img {
      border: none;
      filter: blur(0);
      opacity: 1;
      transition: opacity 0.2s ease, filter 0.2s ease;
    }

    div {
      display: none;
    }
  }

  @media (max-width: 615px) {
    width: 320px;
    height: 220px;
  }
`

export const Card = (each) => {
  const CustomTag = `${each.content}`

  return (
    <StyledCard>
      <div>
        <h3>{each.title}</h3>
        <br />
        {each.tech}
      </div>
      <CustomTag
        allowfullscreen="allowfullscreen"
        src={each.src}
        title={each.title}
      ></CustomTag>
    </StyledCard>
  )
}

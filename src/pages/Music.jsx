import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import data from '../data/data.json';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;

  p {
    margin-top: 100px;
    text-align: center;
    color: white;
  }

  @media screen and (max-width: 615px) {
    padding-top: 10vh;
    flex-wrap: wrap;
  }

  iframe {
    margin: 5% 8px 8px 8px;
  }
`;

export const Music = () => {
  return (
    <StyledDiv>
      {data.music_links.map((each, index) => (
        <Iframe
          key={index}
          src={each.src}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></Iframe>
      ))}
    </StyledDiv>
  );
};

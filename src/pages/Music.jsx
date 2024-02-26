import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import { fetchData, isEmptyData } from '../utils/fetchData';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  margin: auto;

  p {
    margin-top: 100px;
    text-align: center;
    color: white;
  }

  iframe {
    margin: 5% 8px 8px 8px;
  }

  @media screen and (max-width: 615px) {
    padding-top: 10vh;
    flex-direction: column;
    align-items: center;
  }
`;

const renderIframes = (document) => {
  const labs = JSON.parse(document.music_data).music_links;
  return labs.map((link, index) => (
    <Iframe
      key={`${link.title}-${index}`}
      src={link.src}
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  ));
};

export const Music = () => {
  const data = fetchData();

  return (
    <>
      <StyledDiv>{isEmptyData(data) ? <p>Loading...</p> : data.map(renderIframes)}</StyledDiv>
    </>
  );
};

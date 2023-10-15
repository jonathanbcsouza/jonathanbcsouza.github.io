import React, { useState } from 'react';
import styled from 'styled-components';
import { Greetings } from '../components/Greetings';
import { updateGreeting, toTitleCase } from '../utils/stringUtils';
import { setTextLightness } from '../utils/styleUtils';
import { convertTimeToPercent } from '../utils/timeUtils';
import { fetchData } from '../utils/fetchData';

const StyledContainer = styled.div`
  margin-top: 15vh;
  padding-left: 7.5vw;
  color: var(--text-white);

  h2 {
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-delay: 0.5s;
  }

  p {
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
    margin-bottom: 12px;
    animation-delay: 1s;
  }

  p {
    animation-name: text_entrance;
    animation-duration: 3s;
    animation-fill-mode: both;
    animation-delay: 1s;
  }

  .styledGreeting {
    animation-delay: 2s;
  }

  @keyframes text_entrance {
    from {
      top: 0px;
      opacity: 0;
    }
    to {
      top: 20px;
      opacity: 1;
    }
  }

  @media (max-width: 615px) {
    margin-top: 20vh;
  }
`;

export const Home = () => {
  const data = fetchData()[0];

  const timeInPercent = convertTimeToPercent();
  const [greeting, setGreeting] = useState('loading...');
  const [lightness, setLightness] = useState('...');

  setInterval(() => {
    setTextLightness(timeInPercent, setLightness);
    updateGreeting(setGreeting);
  }, 1000);

  return (
    <StyledContainer>
      {data && (
        <div key={data.$id}>
          <h1>{toTitleCase(data.home_header)}</h1>
          <p>{data.home_subheading}</p>
          <p>{data.home_description}</p>
        </div>
      )}
      <Greetings greeting={greeting} hsl={lightness} />
    </StyledContainer>
  );
};

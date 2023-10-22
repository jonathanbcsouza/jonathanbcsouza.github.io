import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Greetings } from '../components/Greetings';
import { updateGreeting, toTitleCase } from '../utils/stringUtils';
import { setTextLightness } from '../utils/styleUtils';
import { convertTimeToPercent } from '../utils/timeUtils';
import { fetchData, isEmptyData } from '../utils/fetchData';

const StyledContainer = styled.div`
  margin-top: 15vh;
  padding-left: 7.5vw;
  color: var(--text-white);

  p {
    margin-bottom: 12px;
  }
`;

export const Home = () => {
  const data = fetchData()[0];

  const timeInPercent = convertTimeToPercent();
  const [greeting, setGreeting] = useState('');
  const [lightness, setLightness] = useState('...');

  useEffect(() => {
    const interval = setInterval(() => {
      setTextLightness(timeInPercent, setLightness);
      updateGreeting(setGreeting);
    }, 1000);

    return () => clearInterval(interval);
  }, [
    timeInPercent,
    setTextLightness,
    updateGreeting,
    setLightness,
    setGreeting,
  ]);

  return (
    <StyledContainer>
      {isEmptyData(data) ? (
        <p>Loading...</p>
      ) : (
        data && (
          <div key={'s'}>
            <h1>{toTitleCase(data.home_header)}</h1>
            <p>{data.home_subheading}</p>
            <p>{data.home_description}</p>
            <Greetings greeting={greeting} hsl={lightness} />
          </div>
        )
      )}
    </StyledContainer>
  );
};

import styled from 'styled-components';
import { Greetings } from '../components/Greetings';
import { homePage } from '../data/homePage';
import { getGreeting, toTitleCase } from '../utils/stringUtils';
import { getTextLightness } from '../utils/styleUtils';
import { getDayProgressPercent, useCurrentTime } from '../utils/timeUtils';

const StyledContainer = styled.div`
  margin-top: 15vh;
  padding-left: 7.5vw;
  color: var(--text-white);

  p {
    margin-bottom: 12px;
  }
`;

export const Home = () => {
  const { header, subheading, description } = homePage;
  const now = useCurrentTime();
  const greeting = getGreeting(now.getHours());
  const lightness = getTextLightness(getDayProgressPercent(now));

  return (
    <StyledContainer>
      <h1>{toTitleCase(header)}</h1>
      <p>{subheading}</p>
      <p>{description}</p>
      <Greetings greeting={greeting} hsl={lightness} />
    </StyledContainer>
  );
};

import styled from 'styled-components';
import { Greetings } from '../components/Greetings';
import { homePage } from '../data/homePage';
import { getGreeting } from '../utils/stringUtils';
import { getTextLightness } from '../utils/styleUtils';
import { getDayProgressPercent, useCurrentTime } from '../utils/timeUtils';

// The greeting changes on an hour boundary and the tint shifts once per
// percent of the day (roughly every 14 minutes), so polling every second
// only bought 3,600 wasted renders an hour.
const CLOCK_INTERVAL_MS = 60_000;

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
  const now = useCurrentTime(CLOCK_INTERVAL_MS);
  const greeting = getGreeting(now.getHours());
  const lightness = getTextLightness(getDayProgressPercent(now));

  return (
    <StyledContainer>
      <h1>{header}</h1>
      <p>{subheading}</p>
      <p>{description}</p>
      <Greetings greeting={greeting} lightness={lightness} />
    </StyledContainer>
  );
};

import styled from 'styled-components';
import { Greetings } from '../components/Greetings';
import { Page } from '../components/Page';
import { TypedLine } from '../components/TypedLine';
import { Sketchpad } from '../components/sketchpad/Sketchpad';
import { homePage } from '../data/homePage';
import { getGreeting } from '../utils/stringUtils';
import { getTextLightness } from '../utils/styleUtils';
import { getDayProgressPercent, useCurrentTime } from '../utils/timeUtils';

// The greeting changes on an hour boundary and the tint shifts once per
// percent of the day (roughly every 14 minutes), so polling every second
// only bought 3,600 wasted renders an hour.
const CLOCK_INTERVAL_MS = 60_000;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  padding-top: 24px;

  h1 {
    margin-bottom: 10px;
    font-size: clamp(1.9em, 5vw, 2.6em);
    line-height: 1.15;
    letter-spacing: 0.01em;
  }
`;

const Role = styled.p`
  margin-bottom: 16px;
  color: var(--text-orange);
  font-size: 0.95em;
  letter-spacing: 0.02em;
`;

const Intro = styled(TypedLine)`
  line-height: 1.6;
`;

export const Home = () => {
  const { name, role, intro } = homePage;
  const now = useCurrentTime(CLOCK_INTERVAL_MS);
  const greeting = getGreeting(now.getHours());
  const lightness = getTextLightness(getDayProgressPercent(now));

  return (
    <Page>
      <Hero>
        <Greetings greeting={greeting} lightness={lightness} />
        <h1>{name}</h1>
        <Role>{role}</Role>
        <Intro text={intro} />
      </Hero>
      <Sketchpad />
    </Page>
  );
};

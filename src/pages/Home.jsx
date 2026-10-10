import styled from 'styled-components';
import { Greetings } from '../components/Greetings';
import { getGreeting, toTitleCase } from '../utils/stringUtils';
import { getTextLightness } from '../utils/styleUtils';
import { getDayProgressPercent, useCurrentTime } from '../utils/timeUtils';
import { useFetchData } from '../utils/useFetchData';

const StyledContainer = styled.div`
  margin-top: 15vh;
  padding-left: 7.5vw;
  color: var(--text-white);

  p {
    margin-bottom: 12px;
  }
`;

export const Home = () => {
  const { data, isLoading, error } = useFetchData();
  const content = data[0];

  const now = useCurrentTime();
  const greeting = getGreeting(now.getHours());
  const lightness = getTextLightness(getDayProgressPercent(now));

  if (isLoading) {
    return (
      <StyledContainer>
        <p>Loading...</p>
      </StyledContainer>
    );
  }

  if (error || !content) {
    return (
      <StyledContainer>
        <p>Unable to load content. Please try again later.</p>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <h1>{toTitleCase(content.home_header)}</h1>
      <p>{content.home_subheading}</p>
      <p>{content.home_description}</p>
      <Greetings greeting={greeting} hsl={lightness} />
    </StyledContainer>
  );
};

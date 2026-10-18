import styled from 'styled-components';
import { Avatar } from '../components/ProfilePhoto';
import { aboutPage } from '../data/aboutPage';

const StyledContainer = styled.div`
  display: flex;
  padding: 20vh 5% 23vh 5%;
  height: 100%;
  font-size: 1em;
  color: var(--text-white);
  line-height: 26px;

  @media screen and (max-width: 615px) {
    display: block;
    padding-top: 10vh;
    line-height: 30px;
  }
`;

const StyledContent = styled.div`
  h1 {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;
    letter-spacing: 0.05em;
  }

  p {
    margin-bottom: 16px;
    line-height: 26px;
  }
`;

export const About = () => {
  const { title, paragraphs } = aboutPage;

  return (
    <StyledContainer>
      <Avatar />
      <StyledContent>
        <h1>{title}</h1>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </StyledContent>
    </StyledContainer>
  );
};

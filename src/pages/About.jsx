import styled from 'styled-components';
import { fetchData } from '../utils/fetchData';

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

const StyledImage = styled.img.attrs({
  src: `https://avatars.githubusercontent.com/u/25882133?s=460&v=4`,
})`
  width: 100px;
  height: 100px;
  margin-right: 40px;
  border-radius: 50%;
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
  const data = fetchData();

  return (
    <StyledContainer>
      <StyledImage />
      {data.map((messages) => (
        <StyledContent key={messages.$id}>
          <h1>{messages.about_header}</h1>
          <p>{messages.about_description}</p>
        </StyledContent>
      ))}
    </StyledContainer>
  );
};

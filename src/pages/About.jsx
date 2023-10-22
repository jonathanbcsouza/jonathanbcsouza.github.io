import styled from 'styled-components';
import { fetchData, isEmptyData } from '../utils/fetchData';
import { Avatar } from '../components/ProfilePhoto';

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
  const data = fetchData();

  return (
    <StyledContainer className={isEmptyData(data) ? '' : 'animate'}>
      <Avatar />
      {isEmptyData(data) ? (
        <p>Loading...</p>
      ) : (
        data.map((document) => (
          <StyledContent key={document.$id}>
            <h1>{document.about_header}</h1>
            <p>{document.about_description}</p>
          </StyledContent>
        ))
      )}
    </StyledContainer>
  );
};

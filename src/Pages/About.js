import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  padding: 15% 5%;
  height: 100%;
  color: var(--text-white);
  font-size: 1em;
  line-height: 26px;
  @media screen and (max-width: 615px) {
    display: block;
    line-height: 30px;
    padding-bottom: 30%;
  }
`;

const StyledImage = styled.img.attrs({
  src: `https://avatars.githubusercontent.com/u/25882133?s=460&v=4`,
})`
  margin-right: 40px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const StyledDiv = styled.div`
  h1 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
  }
`;

const About = () => {
  return (
    <StyledContainer>
      <StyledImage />
      <StyledDiv>
        <h1>Learn, create, work and repeat.</h1>
        <p>
          Over the years I had fun by acquiring experience and learning a bunch
          of tools that aligned with creativity and resilience, I could help
          companies to raise their value, their culture and to increase their
          revenue. I am addicted to innovation and very enthusiastic about
          learning new things, I am always improvement something!
          <br />
          I am passionate about data, quality and web development as I believe
          that together, they are powerful and meaningful in many ways to change
          people's lives. In my free time, I like to stay with my family and
          friends, learn new stuff, compose songs or write new ideas somewhere.
          <br />
          Should you want to chat with me, feel free to drop a message :)
        </p>
      </StyledDiv>
    </StyledContainer>
  );
};

export default About;

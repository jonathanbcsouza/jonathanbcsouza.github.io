import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  padding: 20vh 5% 23vh 5%;
  height: 100%;
  color: var(--text-white);
  font-size: 1em;
  line-height: 26px;

  @media screen and (max-width: 615px) {
    padding-top: 10vh;
    display: block;
    line-height: 30px;
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
          I am a Web Developer passionate about the internet, data, and quality.
          I believe that together, they can be powerful and meaningful in many
          ways to change people's lives.
          <br />
          Over the years, I have acquired expertise and experience in a wide
          range of tools that, along with my creativity and resilience, have
          allowed me to help people solve their problems and make their lives
          easier. I love to learn, seek innovation and help those around me
          achieve their goals.
          <br />I am also a multi-instrumentalist/producer/mixer and music has
          been a big passion since I was young. I like to stay with my family
          and friends in my free time, learn new stuff, play my guitar, compose
          songs or make notes about new ideas.
          <br />
          Let's connect and have a chat about what you are trying to build next!
        </p>
      </StyledDiv>
    </StyledContainer>
  );
};

export default About;

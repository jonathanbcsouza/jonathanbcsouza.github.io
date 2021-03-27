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
          I am a Web Developer passionate about the internet, data and quality
          as I believe that together, they can be powerful and meaningful in
          many ways to change people's lives.
          <br />
          Over the years I have acumulated experience and knowledge of a wide
          range of tools that aligned with creativity and resilience, allowed me
          to help people to solve their problems and make their life easier. I
          love to be learning, chasing innovation and helping whoever is around
          me to achieve their goals.
          <br />I am also a multi-instrumentalist/producer/mixer and since I was
          young, music has been a big passion. In my free time, I like to stay
          with my family and friends, learn new stuff, play my guitar, compose
          songs or make notes about new ideas. Should you want to chat with me,
          feel free to drop a message :)
        </p>
      </StyledDiv>
    </StyledContainer>
  );
};

export default About;

import React from 'react';
import styled from 'styled-components';

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
          I'm a Software Engineer passionate about both music and technology.
          <br />
          From an Engineering background, I have helped companies and colleagues
          with everything from process improvements, quality systems, systems
          automation, mentoring, and beyond. <br />
          Driven by my passions, I decided to shift my career focus and immersed
          myself in different programming languages, attended tech events, took
          online courses, and badgeg certifications from AWS and Microsoft. I
          also made a successful transition from my Engineering degree to a
          Bachelor's in Computer Science in 2022. <br />
          In 2021, I landed my first role as a Software Engineer, gained
          real-world experience with a PHP application and its ecosystem, and
          worked closely with a development team. <br />
          Music has been a big part of my life ever since. I play a few
          instruments, have some songs on streaming platforms, and more
          recently, started making some noise in a rock and roll band with my
          trusty new friend, my Fender Jazzmaster. <br />
          Should you want to discuss software, data, or music, let's connect!
        </p>
      </StyledDiv>
    </StyledContainer>
  );
};

export default About;

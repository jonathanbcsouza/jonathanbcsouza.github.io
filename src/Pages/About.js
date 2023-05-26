import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  padding: 20vh 5% 23vh 5%;
  height: 100%;
  color: var(--text-white);
  font-size: 1em;
  line-height: 26px;
  font-family: 'Roboto', sans-serif;

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

const StyledContent = styled.div`
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
    line-height: 30px;
  }

  p {
    margin-bottom: 16px;
    line-height: 26px;
  }
`;

const About = () => {
  return (
    <StyledContainer>
      <StyledImage />
      <StyledContent>
        <h1>Learn, create, work and repeat.</h1>
        <p>
          I'm a Software Engineer passionate about the web, innovation, and
          music.
        </p>
        <p>
          With a background in Engineering and over a decade of experience
          working within quality systems, I have helped companies and colleagues
          by providing advice and collaborating on documentation, process
          improvements, systems automation, cutting rework and operational
          expenses, mentoring, and various other initiatives.
        </p>
        <p>
          Driven by my passions, I decided to shift my career focus and immersed
          myself in different programming languages, attended tech events, took
          online courses, and earned certifications from AWS and Microsoft. I
          also made a successful transition from my Engineering degree to a
          Bachelor's in Computer Science in 2022. 👨🏻‍💻
        </p>
        <p>
          In 2021, I landed my first role as a Software Engineer, gained
          real-world experience with a PHP application and its ecosystem, and
          worked closely with a development team, which has helped me to get
          familiar with a full-stack app in a practical way.
        </p>
        <p>
          I also play a few music instruments, have some songs on streaming
          platforms, and more recently, started making some noise in a rock and
          roll band with my trusty new friend, my Fender Jazzmaster.
        </p>
        <p>Music has also been a big part of my life ever since. 🎸</p>
        <p>Should you want to discuss the web or music, let's connect!</p>
      </StyledContent>
    </StyledContainer>
  );
};

export default About;

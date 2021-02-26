import React from "react";
import styled from "styled-components";

const StyledAbout = styled.div`
  color: white;
  padding-top: 15vh;
  margin: auto;
  margin: 0 16px;
  font-size: 16px;
  line-height: 26px;
  ${"" /* word-wrap: break-word;
  overflow-wrap: break-word; */}
  ${"" /* overflow: auto; */}

  h1 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
  }

  @media screen and (max-width: 615px) {
    font-size: 18px;
    line-height: 30px;
    margin-left: 16px;
  }
`;

const About = (props) => {
  return (
    <StyledAbout>
      <h1>Creating,learning, working and repeat.</h1>
      <p>
        Over the years I had fun by acquiring experience and learning a bunch of
        tools that aligned with creativity and resilience, I could help
        companies to raise their value, their culture and to increase their
        revenue. I am addicted to innovation and very enthusiastic about
        learning new things, I am always improvement something!
        <br />
        I am passionate about data, quality and web development as I
        believe that together, they are powerful and meaningful in many ways to
        change people's lives. In my free time, I like to stay with my family
        and friends, learn new stuff, compose songs or write new ideas
        somewhere.
        <br />
        Should you want to chat with me, feel free to drop a message :)
      </p>
    </StyledAbout>
  );
};

export default About;

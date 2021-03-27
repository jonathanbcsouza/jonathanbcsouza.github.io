import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10vh 5% 10vh 5%;

  -moz-transform: scale(1.25, 1.25);
  -webkit-transform: scale(1.25, 1.25);
  -o-transform: scale(1.25, 1.25);
  -ms-transform: scale(1.25, 1.25);
  transform: scale(0.9, 0.9);
  -moz-transform-origin: top center;
  -webkit-transform-origin: top center;
  -o-transform-origin: top center;
  -ms-transform-origin: top center;
  transform-origin: top center;

  @media screen and (max-width: 615px) {
    padding-top: 10vh;
  }

  iframe {
    margin: 5% 8px 8px 8px;
  }
`;

const StyledIframe = styled(Iframe)`
  border: none;
  position: relative;
  ${"" /* left: 5vw; */}

  @media screen and (max-width: 615px) {
    left: 0vw;
  }
`;

const Music = () => {
  return (
    <>
      <StyledDiv>
        <StyledIframe
          src="https://open.spotify.com/follow/1/?uri=spotify:artist:3SzDQcUhTIhN8GvnxHIgHE&size=detail&theme=dark&show-count=0"
          width="400"
          height="56"
        ></StyledIframe>
        <Iframe
          src="https://open.spotify.com/embed/artist/3SzDQcUhTIhN8GvnxHIgHE"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          width="400"
          height="350"
        ></Iframe>
        <br />
        <Iframe
          width="400"
          height="350"
          src="https://www.youtube.com/embed/XG4swCFqX38"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
      </StyledDiv>
    </>
  );
};

export default Music;

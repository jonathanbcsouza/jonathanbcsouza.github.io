import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

const StyledIframe = styled(Iframe)`
  border: none;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10% 0 28% 0;

  iframe {
    margin: 5% 8px 8px 5px;
  }
`;

const Music = () => {
  return (
    <>
      <StyledDiv>
        <StyledIframe
          src="https://open.spotify.com/follow/1/?uri=spotify:artist:3SzDQcUhTIhN8GvnxHIgHE&size=detail&theme=dark&show-count=0"
          width="300"
          height="56"
        >
          <p>asds</p>
        </StyledIframe>
        <Iframe
          src="https://open.spotify.com/embed/artist/3SzDQcUhTIhN8GvnxHIgHE"
          width="400"
          height="300"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></Iframe>
        <br />
        <Iframe
          width="400"
          height="300"
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

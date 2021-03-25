import React from "react";
import { useEffect } from "react";

import styled from "styled-components";
import Iframe from "react-iframe";

const StyledFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  padding: 100px;

  iframe {
    margin: 10px;
    padding: 10px;
    border: none;
  }
`;

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

const Music = () => {
  return (
    <>
      <StyledFrame>
        <Iframe
          src="https://open.spotify.com/follow/1/?uri=spotify:artist:3SzDQcUhTIhN8GvnxHIgHE&size=detail&theme=dark&show-count=0"
          width="300"
          height="56"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
        ></Iframe>

        <Iframe
          src="https://open.spotify.com/embed/artist/3SzDQcUhTIhN8GvnxHIgHE"
          width="300"
          height="200"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></Iframe>
        <br />
        <Iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/XG4swCFqX38"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
      </StyledFrame>
    </>
  );
};

export default Music;

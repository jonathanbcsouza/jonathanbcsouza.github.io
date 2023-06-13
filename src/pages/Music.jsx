import React from 'react'
import styled from 'styled-components'
import Iframe from 'react-iframe'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
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

  p {
    margin-top: 100px;
    color: white;
    text-align: center;
  }

  @media screen and (max-width: 615px) {
    padding-top: 10vh;
    flex-wrap: wrap;
  }

  iframe {
    margin: 5% 8px 8px 8px;
  }
`

export const Music = () => {
  return (
    <StyledDiv>
      <Iframe
        style="border-radius:12px"
        src="https://open.spotify.com/embed/artist/3AxDKUFfndRKbL2W0sxPZ0?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></Iframe>

      <Iframe
        width="100%"
        height="352"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/326981607&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></Iframe>
    </StyledDiv>
  )
}

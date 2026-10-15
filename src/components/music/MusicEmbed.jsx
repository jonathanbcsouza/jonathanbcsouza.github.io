import styled from 'styled-components';

const YoutubeFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const SpotifyFrame = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);

  iframe {
    display: block;
    width: 100%;
    height: 352px;
    border: 0;
    border-radius: 12px;
  }
`;

const spotifySrc = (embed) => {
  const kind = embed.kind === 'album' ? 'album' : 'artist';
  return `https://open.spotify.com/embed/${kind}/${embed.id}?utm_source=generator&theme=0`;
};

export const MusicEmbed = ({ embed }) => {
  if (embed.type === 'spotify') {
    return (
      <SpotifyFrame>
        <iframe
          src={spotifySrc(embed)}
          title={embed.title || 'Spotify player'}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </SpotifyFrame>
    );
  }

  if (embed.type !== 'youtube') return null;

  return (
    <YoutubeFrame>
      <iframe
        src={`https://www.youtube.com/embed/${embed.id}`}
        title={embed.title || 'Music video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </YoutubeFrame>
  );
};

import styled from 'styled-components';

const EmbedFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
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

export const MusicEmbed = ({ embed }) => {
  if (embed.type !== 'youtube') return null;

  return (
    <EmbedFrame>
      <iframe
        src={`https://www.youtube.com/embed/${embed.id}`}
        title={embed.title || 'Music video'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </EmbedFrame>
  );
};

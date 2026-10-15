import styled from 'styled-components';
import { ArtistLinks } from './ArtistLinks';
import { MusicEmbed } from './MusicEmbed';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const Header = styled.header`
  margin-bottom: 4px;
`;

const Tagline = styled.p`
  margin: 0 0 6px;
  font-size: 0.75em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-orange);
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.25;
`;

const Description = styled.p`
  margin: 0;
  max-width: 62ch;
  line-height: 1.55;
  font-size: 0.98em;
  color: var(--text-white);
  opacity: 0.9;
`;

const MediaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
`;

const EmbedStack = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$count > 1 ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)'};
  gap: 14px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ArtistProject = ({ project }) => {
  const embeds = project.embeds ?? [];
  const videos = embeds.filter((embed) => embed.type === 'youtube');
  const spotify = embeds.filter((embed) => embed.type === 'spotify');

  return (
    <Section aria-labelledby={`${project.id}-title`}>
      <Header>
        <Tagline>{project.tagline}</Tagline>
        <Title id={`${project.id}-title`}>{project.name}</Title>
        <Description>{project.description}</Description>
      </Header>
      {project.links?.length > 0 ? <ArtistLinks links={project.links} /> : null}
      {videos.length > 0 || spotify.length > 0 ? (
        <MediaBlock>
          {videos.length > 0 ? (
            <EmbedStack $count={videos.length}>
              {videos.map((embed) => (
                <MusicEmbed key={`yt-${embed.id}`} embed={embed} />
              ))}
            </EmbedStack>
          ) : null}
          {spotify.map((embed) => (
            <MusicEmbed key={`sp-${embed.kind}-${embed.id}`} embed={embed} />
          ))}
        </MediaBlock>
      ) : null}
    </Section>
  );
};

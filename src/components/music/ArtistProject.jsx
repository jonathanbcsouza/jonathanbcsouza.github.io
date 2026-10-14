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
  font-size: 1.35em;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 1.25;
`;

const Description = styled.p`
  margin: 0;
  line-height: 1.55;
  font-size: 0.95em;
  color: var(--text-white);
  opacity: 0.9;
`;

const EmbedStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
`;

export const ArtistProject = ({ project }) => {
  const embeds = project.embeds ?? [];

  return (
    <Section aria-labelledby={`${project.id}-title`}>
      <Header>
        <Tagline>{project.tagline}</Tagline>
        <Title id={`${project.id}-title`}>{project.name}</Title>
        <Description>{project.description}</Description>
      </Header>
      {project.links?.length > 0 ? <ArtistLinks links={project.links} /> : null}
      {embeds.length > 0 ? (
        <EmbedStack>
          {embeds.map((embed) => (
            <MusicEmbed key={embed.id || embed.href || embed.src} embed={embed} />
          ))}
        </EmbedStack>
      ) : null}
    </Section>
  );
};

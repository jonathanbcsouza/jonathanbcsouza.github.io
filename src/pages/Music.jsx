import styled from 'styled-components';
import { musicPage } from '../data/musicProjects';
import { ArtistProject } from '../components/music/ArtistProject';

const Page = styled.main`
  width: min(92%, 1100px);
  margin: 80px auto 27vh;
  color: var(--text-white);

  @media screen and (max-width: 615px) {
    margin-top: 100px;
  }
`;

const Intro = styled.header`
  margin-bottom: 40px;

  h1 {
    margin-bottom: 12px;
    font-size: 1.8em;
    letter-spacing: 0.04em;
  }

  p {
    max-width: 52ch;
    line-height: 1.6;
    opacity: 0.9;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  align-items: start;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

const OtherSection = styled.div`
  margin-top: 56px;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
`;

export const Music = () => {
  const { title, intro, featured, other } = musicPage;

  return (
    <Page>
      <Intro>
        <h1>{title}</h1>
        <p>{intro}</p>
      </Intro>
      <ProjectGrid>
        {featured.map((project) => (
          <ArtistProject key={project.id} project={project} />
        ))}
      </ProjectGrid>
      <OtherSection>
        {other.map((project) => (
          <ArtistProject key={project.id} project={project} wideMedia />
        ))}
      </OtherSection>
    </Page>
  );
};

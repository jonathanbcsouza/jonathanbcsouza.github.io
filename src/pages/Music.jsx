import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { musicPage } from '../data/musicProjects';
import { ArtistProject } from '../components/music/ArtistProject';

const Page = styled.main`
  width: min(92%, 960px);
  margin: 80px auto 27vh;
  color: var(--text-white);

  @media screen and (max-width: 615px) {
    margin-top: 100px;
  }
`;

const Intro = styled.header`
  margin-bottom: 28px;

  h1 {
    margin-bottom: 10px;
    font-size: 1.8em;
    letter-spacing: 0.04em;
  }

  p {
    max-width: 48ch;
    line-height: 1.55;
    opacity: 0.9;
  }
`;

const ProjectSwitcher = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
`;

const SwitcherButton = styled.button`
  appearance: none;
  border: 1px solid
    ${(props) =>
      props.$active ? 'var(--text-orange)' : 'rgba(255, 255, 255, 0.22)'};
  background: ${(props) =>
      props.$active ? 'rgba(255, 165, 0, 0.12)' : 'transparent'};
  color: ${(props) =>
    props.$active ? 'var(--text-orange)' : 'var(--text-white)'};
  padding: 10px 14px;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: var(--text-orange);
    color: var(--text-orange);
  }

  &:focus-visible {
    outline: 2px solid var(--text-orange);
    outline-offset: 2px;
  }
`;

const SwitcherTag = styled.span`
  display: block;
  font-size: 0.68em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 3px;
`;

const SwitcherName = styled.span`
  display: block;
  font-size: 0.92em;
  font-weight: 600;
`;

const Panel = styled.div`
  min-width: 0;
`;

export const Music = () => {
  const { title, intro, featured, other } = musicPage;
  const projects = useMemo(() => [...featured, ...other], [featured, other]);
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const activeProject =
    projects.find((project) => project.id === activeId) ?? projects[0];

  return (
    <Page>
      <Intro>
        <h1>{title}</h1>
        <p>{intro}</p>
      </Intro>

      <ProjectSwitcher role="tablist" aria-label="Artist projects">
        {projects.map((project) => {
          const isActive = project.id === activeProject.id;
          return (
            <SwitcherButton
              key={project.id}
              type="button"
              role="tab"
              id={`tab-${project.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${project.id}`}
              $active={isActive}
              onClick={() => setActiveId(project.id)}
            >
              <SwitcherTag>{project.tagline}</SwitcherTag>
              <SwitcherName>{project.name}</SwitcherName>
            </SwitcherButton>
          );
        })}
      </ProjectSwitcher>

      {activeProject ? (
        <Panel
          role="tabpanel"
          id={`panel-${activeProject.id}`}
          aria-labelledby={`tab-${activeProject.id}`}
        >
          <ArtistProject project={activeProject} />
        </Panel>
      ) : null}
    </Page>
  );
};

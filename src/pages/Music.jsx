import { useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { musicPage } from '../data/musicProjects';
import { ArtistProject } from '../components/music/ArtistProject';
import { Page, PageIntro } from '../components/Page';

const Column = styled.div`
  max-width: 960px;
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
  padding: 12px 16px;
  min-height: 44px;
  border-radius: 6px;
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
  font-size: 0.76em;
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

  &:focus-visible {
    outline-offset: 6px;
  }
`;

const PROJECT_PARAM = 'project';

export const Music = () => {
  const { title, intro, featured, other } = musicPage;
  const projects = useMemo(() => [...featured, ...other], [featured, other]);

  // The selection lives in the address bar so a project can be linked to
  // directly, and Back/forward behave. An unknown id falls back to the first.
  const [searchParams, setSearchParams] = useSearchParams();
  const requested = searchParams.get(PROJECT_PARAM);
  const activeProject =
    projects.find((project) => project.id === requested) ?? projects[0];

  const tabRefs = useRef({});

  const select = (project, { focus = false } = {}) => {
    setSearchParams(
      (current) => {
        const next = new URLSearchParams(current);
        if (project.id === projects[0].id) next.delete(PROJECT_PARAM);
        else next.set(PROJECT_PARAM, project.id);
        return next;
      },
      { replace: true, preventScrollReset: true },
    );
    if (focus) tabRefs.current[project.id]?.focus();
  };

  // WAI-ARIA tabs pattern: arrows move between tabs, Home and End jump to the
  // ends, and only the selected tab is in the tab order. Without this each
  // tab was a separate stop and the arrow keys did nothing.
  const onKeyDown = (event, index) => {
    const last = projects.length - 1;
    const target = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];

    if (target === undefined) return;
    event.preventDefault();
    select(projects[target], { focus: true });
  };

  return (
    <Page>
      <Column>
        <PageIntro>
          <h1>{title}</h1>
          <p>{intro}</p>
        </PageIntro>

        <ProjectSwitcher role="tablist" aria-label="Artist projects">
          {projects.map((project, index) => {
            const isActive = project.id === activeProject.id;
            return (
              <SwitcherButton
                key={project.id}
                ref={(node) => {
                  tabRefs.current[project.id] = node;
                }}
                type="button"
                role="tab"
                id={`tab-${project.id}`}
                aria-selected={isActive}
                aria-controls={isActive ? `panel-${project.id}` : undefined}
                tabIndex={isActive ? 0 : -1}
                $active={isActive}
                onClick={() => select(project)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <SwitcherTag>{project.tagline}</SwitcherTag>
                <SwitcherName>{project.name}</SwitcherName>
              </SwitcherButton>
            );
          })}
        </ProjectSwitcher>

        <Panel
          role="tabpanel"
          id={`panel-${activeProject.id}`}
          aria-labelledby={`tab-${activeProject.id}`}
          tabIndex={0}
        >
          <ArtistProject key={activeProject.id} project={activeProject} />
        </Panel>
      </Column>
    </Page>
  );
};

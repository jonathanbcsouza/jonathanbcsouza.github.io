import styled from 'styled-components';
import { Card } from '../components/Card';
import { Page, PageIntro } from '../components/Page';
import { techPage } from '../data/techProjects';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  align-items: stretch;
`;

export const Tech = () => {
  const { title, intro, projects } = techPage;

  return (
    <Page>
      <PageIntro>
        <h1>{title}</h1>
        <p>{intro}</p>
      </PageIntro>
      <Grid>
        {projects.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </Grid>
    </Page>
  );
};

import { Card } from '../components/Card';
import styled from 'styled-components';
import { labsProjects } from '../data/labsProjects';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  margin: 100px 0px 27vh 0;
  color: var(--text-white);

  @media screen and (max-width: 615px) {
    margin-top: 35px;
  }
`;

export const Labs = () => (
  <StyledDiv>
    {labsProjects.map((lab) => (
      <Card
        key={lab.title}
        type={lab.type}
        tech={lab.tech}
        src={lab.src}
        title={lab.title}
        href={lab.href}
      />
    ))}
  </StyledDiv>
);

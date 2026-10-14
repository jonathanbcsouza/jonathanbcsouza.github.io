import { Card } from '../components/Card';
import styled from 'styled-components';
import { labsProjects } from '../data/labsProjects';
import { useFetchData, parseJson } from '../utils/useFetchData';

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

const renderRemoteCards = (document) => {
  const labs = parseJson(document.labs_data, {}).labs ?? [];
  return labs.map((lab, index) => (
    <Card
      key={`${lab.title}-${index}`}
      type={lab.type}
      tech={lab.tech}
      src={lab.src}
      title={lab.title}
      href={lab.href}
    />
  ));
};

export const Labs = () => {
  const { data, isLoading, error } = useFetchData();

  const remoteCards =
    !isLoading && !error ? data.flatMap(renderRemoteCards) : [];

  return (
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
      {isLoading ? <p>Loading...</p> : null}
      {error && labsProjects.length === 0 ? (
        <p>Unable to load content. Please try again later.</p>
      ) : null}
      {remoteCards}
    </StyledDiv>
  );
};

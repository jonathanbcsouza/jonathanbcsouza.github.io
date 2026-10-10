import { Card } from '../components/Card';
import styled from 'styled-components';
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

const renderCards = (document) => {
  const labs = parseJson(document.labs_data, {}).labs ?? [];
  return labs.map((lab, index) => (
    <Card
      key={`${lab.title}-${index}`}
      type={lab.type}
      tech={lab.tech}
      src={lab.src}
      title={lab.title}
    />
  ));
};

export const Labs = () => {
  const { data, isLoading, error } = useFetchData();

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Unable to load content. Please try again later.</p>;
    return data.flatMap(renderCards);
  };

  return <StyledDiv>{renderContent()}</StyledDiv>;
};

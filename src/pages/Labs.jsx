import React from 'react';
import { Card } from '../components/Card';
import styled from 'styled-components';
import { fetchData, isEmptyData } from '../utils/fetchData';

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

export const Labs = () => {
  const data = fetchData();

  const renderCards = (document) => {
    const labs = JSON.parse(document.labs_data).labs;
    return labs.map((lab) => (
      <Card
        key={lab.title}
        type={lab.type}
        tech={lab.tech}
        src={lab.src}
        title={lab.title}
      />
    ));
  };

  return (
    <StyledDiv>
      {isEmptyData(data) ? <p>Loading...</p> : data.flatMap(renderCards)}
    </StyledDiv>
  );
};

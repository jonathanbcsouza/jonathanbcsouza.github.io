import React from 'react';
import Card from '../components/Card';
import styled from 'styled-components';
import { MyIframes } from './MyIframes';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 100px 0px 27vh 0;
  color: var(--text-white);
  z-index: 0;

  @media screen and (max-width: 615px) {
    margin-top: 35px;
  }
`;

const Lab = () => {
  return (
    <StyledDiv>
      {MyIframes.map((each) => (
        <Card
          content={each.type}
          src={each.src}
          title={each.title}
          tech={each.tech}
        ></Card>
      ))}
    </StyledDiv>
  );
};

export default Lab;

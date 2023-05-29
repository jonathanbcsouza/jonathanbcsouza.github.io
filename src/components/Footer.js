import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';

const currentDate = new Date().getFullYear();

const StyledFooter = styled.div`
  position: fixed;
  z-index: 3;
  color: var(--text-orange);
  padding-bottom: 10px;
  bottom: 0;
  width: 100vw;
  text-align: center;
  font-size: 12px;
  border-top: 1px solid var(--headers);
  background: var(--background-colour);
`;

const MakeFooter = () => {
  return (
    <StyledFooter>
      <SocialMedia />
      <br />
      <p>Copyright {currentDate} © Jonathan Souza</p>
    </StyledFooter>
  );
};

export default MakeFooter;

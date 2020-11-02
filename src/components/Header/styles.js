import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;

  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  font-family:'opensans-bold';
  font-size: ${({ styledFont }) => `${styledFont}px`};
`;

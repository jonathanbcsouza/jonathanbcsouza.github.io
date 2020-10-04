import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
flex-direction: row;
align-items: center;
font-size: ${({styledFont}) => `${styledFont}px`}
`;

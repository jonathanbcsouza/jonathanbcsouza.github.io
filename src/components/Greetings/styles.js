import styled from "styled-components";

export const StyledGreetings = styled.h3`
display: flex;
justify-content: left;
align-items: center;
margin-left: 16px;
color: ${({styledColour}) => `${styledColour}`}
`;



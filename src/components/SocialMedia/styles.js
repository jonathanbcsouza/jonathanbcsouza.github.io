import styled from "styled-components";

export const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  path {
    transition: fill 0.4s ease;
  }

  svg:hover {
    fill: red;
    height: 30px;
    flex-direction: row;
    cursor: pointer;
  }
`;

export const StyledLink = styled.a.attrs(({ link }) => ({
  href: link,
  target: "_blank",
}))`
  margin: 2px;
`;

import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: white;
`;

const Page = (props) => {
  return (
    <StyledPage>
      <h1>{props.message}</h1>
    </StyledPage>
  );
};

export default Page;

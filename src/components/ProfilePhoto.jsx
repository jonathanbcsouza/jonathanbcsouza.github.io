import React from 'react';
import styled from 'styled-components';

const StyledAvatar = styled.img.attrs({
  src: `https://avatars.githubusercontent.com/u/25882133?s=460&v=4`,
})`
  width: 100px;
  height: 100px;
  margin-right: 40px;
  border-radius: 50%;
`;

export const Avatar = () => <StyledAvatar />;

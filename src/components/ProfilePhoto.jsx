import styled from 'styled-components';

const StyledAvatar = styled.img.attrs({
  src: 'https://avatars.githubusercontent.com/u/25882133?s=460&v=4',
  alt: 'Jonathan Souza',
  width: 112,
  height: 112,
})`
  width: 112px;
  height: 112px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Avatar = () => <StyledAvatar />;

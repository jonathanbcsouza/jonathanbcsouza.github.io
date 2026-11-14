import styled from 'styled-components';

// Served from this site rather than hotlinked from GitHub, so the page does
// not depend on a third party URL (and its 5 minute cache) for its one portrait.
const StyledAvatar = styled.img.attrs({
  src: '/images/avatar.png',
  alt: 'Jonathan Souza',
  width: 112,
  height: 112,
  decoding: 'async',
})`
  width: 112px;
  height: 112px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Avatar = () => <StyledAvatar />;

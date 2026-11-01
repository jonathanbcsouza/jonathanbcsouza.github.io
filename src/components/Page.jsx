import styled from 'styled-components';

// Shared shell for every route. Before this, each page set its own width and
// its own vh-based padding, so the three pages started at three different left
// edges and the gap above the heading grew with the window height.
export const Page = styled.div`
  width: min(92%, ${(props) => props.$maxWidth || '1180px'});
  margin: 0 auto;
  padding: var(--page-top) 0 var(--page-bottom);
  color: var(--text-white);
`;

// Page heading plus lead paragraph, shared by Tech and Music.
export const PageIntro = styled.header`
  margin-bottom: 28px;

  h1 {
    margin-bottom: 10px;
    font-size: 1.8em;
    letter-spacing: 0.04em;
  }

  p {
    max-width: 56ch;
    line-height: 1.55;
    opacity: 0.9;
  }
`;

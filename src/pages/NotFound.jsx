import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from '../components/Page';

const Message = styled.div`
  max-width: 56ch;
  padding-top: 24px;

  h1 {
    margin-bottom: 10px;
    font-size: 1.8em;
    letter-spacing: 0.04em;
  }

  p {
    margin-bottom: 18px;
    line-height: 1.6;
    opacity: 0.9;
  }

  a {
    display: inline-block;
    padding: 12px 0;
    color: var(--text-orange);
  }
`;

// Rendered inside the app shell, so a mistyped URL still shows the nav and
// footer instead of stranding the visitor on a bare error screen.
export const NotFound = () => (
  <Page>
    <Message>
      <h1>Page not found</h1>
      <p>
        There is nothing at this address. It may have moved, or the link may be
        mistyped.
      </p>
      <Link to="/">Back to home</Link>
    </Message>
  </Page>
);

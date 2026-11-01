import styled from 'styled-components';
import { Avatar } from '../components/ProfilePhoto';
import { Page } from '../components/Page';
import { aboutPage } from '../data/aboutPage';

const Layout = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 32px;
  align-items: start;

  @media screen and (max-width: 615px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Content = styled.div`
  /* Capped for readability. The text previously ran the full window width,
     which gave lines of well over 120 characters on a wide display. */
  max-width: 72ch;

  h1 {
    margin-bottom: 18px;
    font-size: 1.6em;
    line-height: 1.3;
    letter-spacing: 0.03em;
  }

  p {
    margin-bottom: 14px;
    line-height: 1.7;
  }

  p:last-child {
    margin-bottom: 0;
    color: var(--text-orange);
    font-style: italic;
  }
`;

export const About = () => {
  const { title, paragraphs } = aboutPage;

  return (
    <Page>
      <Layout>
        <Avatar />
        <Content>
          <h1>{title}</h1>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </Content>
      </Layout>
    </Page>
  );
};

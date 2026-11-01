import styled from 'styled-components';
import { FiArrowUpRight } from 'react-icons/fi';

const Item = styled.li`
  min-width: 0;
`;

const Surface = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.28);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
`;

const Media = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  img {
    width: 100%;
    height: 100%;
    display: block;
    /* 'contain' keeps portrait screenshots whole, 'cover' anchored to the top
       shows the masthead of a wide page rather than its middle. */
    object-fit: ${(props) => (props.$fit === 'contain' ? 'contain' : 'cover')};
    object-position: ${(props) => (props.$fit === 'contain' ? 'center' : 'top center')};
  }
`;

const Placeholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 16px;
  font-size: 0.78em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.45);
  background: linear-gradient(
    140deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 165, 0, 0.05)
  );
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px 16px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.02em;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.01em;
  transition: color 0.25s ease;
`;

const Tech = styled.p`
  margin: 0;
  font-size: 0.82em;
  line-height: 1.45;
  color: var(--text-white);
  opacity: 0.7;
`;

const Destination = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-top: auto;
  padding-top: 10px;
  font-size: 0.74em;
  letter-spacing: 0.04em;
  color: var(--text-orange);
  opacity: 0.85;

  svg {
    flex-shrink: 0;
  }
`;

const CardLink = styled.a`
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
  border-radius: 12px;

  &:hover ${Surface} {
    transform: translateY(-4px);
    border-color: var(--text-orange);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.45);
  }

  &:hover ${Title} {
    color: var(--text-orange);
  }

  &:focus-visible {
    outline: 2px solid var(--text-orange);
    outline-offset: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover ${Surface} {
      transform: none;
    }
  }
`;

// Showing where a card goes is more honest than a generic "view project".
const destinationOf = (href) => {
  try {
    return new URL(href).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
};

export const Card = ({ project }) => {
  const { title, tech, src, href, fit } = project;

  const surface = (
    <Surface>
      <Media $fit={fit}>
        {src ? (
          <img src={src} alt={title} loading="lazy" decoding="async" />
        ) : (
          <Placeholder>{tech}</Placeholder>
        )}
      </Media>
      <Body>
        <Title>{title}</Title>
        <Tech>{tech}</Tech>
        {href ? (
          <Destination>
            {destinationOf(href)}
            <FiArrowUpRight size={13} aria-hidden="true" />
          </Destination>
        ) : null}
      </Body>
    </Surface>
  );

  return (
    <Item>
      {href ? (
        <CardLink
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title}, opens in a new tab`}
        >
          {surface}
        </CardLink>
      ) : (
        surface
      )}
    </Item>
  );
};

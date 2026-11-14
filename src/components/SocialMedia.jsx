import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MySocialLinks } from './SocialLinks';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;

  /* A heading is not needed to name the group (aria-label does that), and the
     page already has an h1 and h2s. A level skip here is what flagged on About. */
  p {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  path {
    transition: fill 0.3s ease;
  }
`;

const Row = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
`;

// Padding gives each icon a 44px touch target without changing the icon size.
const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  border-radius: 8px;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    fill: var(--text-orange);
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }

    &:hover svg {
      transform: none;
    }
  }
`;

export const SocialMedia = () => {
  return (
    <Wrapper aria-label="Social links">
      <IconContext.Provider value={{ size: '26', 'aria-hidden': 'true' }}>
        <p>Let&apos;s Connect!</p>
        <Row>
          {MySocialLinks.map((item) => (
            <li key={item.link}>
              <StyledLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.label}, opens in a new tab`}
                title={item.label}
              >
                {item.component}
              </StyledLink>
            </li>
          ))}
        </Row>
      </IconContext.Provider>
    </Wrapper>
  );
};

import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MySocialLinks } from './SocialLinks';

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;

  h3 {
    font-size: 13px;
    letter-spacing: 0.04em;
  }

  path {
    transition: fill 0.3s ease;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
`;

// Padding gives each icon a 44px touch target without changing the icon size.
const StyledLink = styled.a.attrs(({ $link, $label }) => ({
  href: $link,
  target: '_blank',
  rel: 'noopener noreferrer',
  'aria-label': $label,
  title: $label,
}))`
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
`;

export const SocialMedia = () => {
  return (
    <StyledIcons>
      <IconContext.Provider value={{ size: '26' }}>
        <h3>Let&apos;s Connect!</h3>
        <Row>
          {MySocialLinks.map((item) => (
            <StyledLink key={item.link} $link={item.link} $label={item.label}>
              {item.component}
            </StyledLink>
          ))}
        </Row>
      </IconContext.Provider>
    </StyledIcons>
  );
};

import styled from 'styled-components';
import {
  FaSpotify,
  FaInstagram,
  FaApple,
  FaTwitter,
  FaFacebook,
  FaGlobe,
  FaSoundcloud,
} from 'react-icons/fa';

const LinkRow = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
`;

const LinkItem = styled.li`
  list-style: none;
`;

const ArtistLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  color: var(--text-white);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 4px;
  font-size: 0.82em;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: var(--text-orange);
    border-color: var(--text-orange);
  }

  svg {
    flex-shrink: 0;
  }
`;

const icons = {
  spotify: FaSpotify,
  instagram: FaInstagram,
  apple: FaApple,
  x: FaTwitter,
  facebook: FaFacebook,
  website: FaGlobe,
  soundcloud: FaSoundcloud,
};

export const ArtistLinks = ({ links = [] }) => {
  if (!links.length) return null;

  return (
    <LinkRow aria-label="Artist links">
      {links.map((link) => {
        const Icon = icons[link.kind];
        return (
          <LinkItem key={`${link.kind}-${link.href}`}>
            <ArtistLink
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              {Icon ? <Icon size={16} aria-hidden="true" /> : null}
              <span>{link.label}</span>
            </ArtistLink>
          </LinkItem>
        );
      })}
    </LinkRow>
  );
};

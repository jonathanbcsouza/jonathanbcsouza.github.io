import styled from 'styled-components';

const PreviewLink = styled.a`
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.45);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  text-decoration: none;
  color: inherit;

  &:hover img {
    transform: scale(1.03);
  }

  &:hover .preview-label {
    opacity: 1;
  }

  &:focus-visible {
    outline: 2px solid var(--text-orange);
    outline-offset: 3px;
  }
`;

const Crop = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.35s ease;
`;

const Label = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  padding: 10px 12px;
  font-size: 0.82em;
  color: var(--text-white);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  opacity: 0.92;
  transition: opacity 0.2s ease;
`;

export const SitePreview = ({ href, title, imageSrc }) => (
  <PreviewLink
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Open ${title || 'website'}`}
    title={title || 'Website'}
  >
    <Crop>
      <PreviewImage
        src={imageSrc}
        alt=""
        loading="lazy"
      />
    </Crop>
    <Label className="preview-label">{title || href}</Label>
  </PreviewLink>
);

import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  width: 520px;
  height: 320px;
  margin: 25px 20px 0 20px;
  border-radius: 20px;
  box-shadow: 1px 5px 20px 1px rgba(50, 50, 50, 0.75);
  background: rgba(28, 27, 27, 0.29);
  transition: all 0.3s ease;

  iframe {
    border: none;
    border-radius: 20px;
    width: 100%;
    height: 95%;
    margin: 10px;
    max-width: 96%;
    filter: blur(2px);
    opacity: 0.5;
  }

  img {
    display: block;
    margin: auto;
    max-width: 96%;
    max-height: 95%;
    object-fit: cover;
    filter: blur(2px);
    border-radius: 20px;
  }

  .card-overlay {
    position: absolute;
    padding: 50px 0;
    top: 29%;
    width: 100%;
    opacity: 0.9;
    text-align: center;
    background-color: black;
    z-index: 1;
  }

  &:hover {
    top: -10px;
    box-shadow: 8px 3px 15px 0px rgba(200, 118, 60, 0.75);
    transition: all 0.3s ease;

    iframe,
    img {
      border: none;
      filter: blur(0);
      opacity: 1;
      transition:
        opacity 0.2s ease,
        filter 0.2s ease;
    }

    .card-overlay {
      display: none;
    }
  }

  @media (max-width: 615px) {
    width: 320px;
    height: 220px;
  }
`;

const CardLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`;

export const Card = ({ src, title, tech, type, href }) => {
  const content = (
    <StyledCard>
      <div className="card-overlay">
        <h3>{title}</h3>
        <br />
        {tech}
      </div>
      {type === 'iframe' ? (
        <iframe allowFullScreen loading="lazy" src={src} title={title}></iframe>
      ) : (
        <img src={src} alt={title} loading="lazy" />
      )}
    </StyledCard>
  );

  if (!href) return content;

  return (
    <CardLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title}`}
    >
      {content}
    </CardLink>
  );
};

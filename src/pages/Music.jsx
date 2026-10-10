import styled from 'styled-components';
import Iframe from 'react-iframe';
import { useFetchData, parseJson } from '../utils/useFetchData';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  margin: auto;

  p {
    margin-top: 100px;
    text-align: center;
    color: white;
  }

  iframe {
    margin: 5% 8px 8px 8px;
  }

  @media screen and (max-width: 615px) {
    padding-top: 10vh;
    flex-direction: column;
    align-items: center;
  }
`;

const renderIframes = (document) => {
  const links = parseJson(document.music_data, {}).music_links ?? [];
  return links.map((link, index) => (
    <Iframe
      key={`${link.title}-${index}`}
      src={link.src}
      title={link.title || 'Music player'}
      width="100%"
      height="352"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  ));
};

export const Music = () => {
  const { data, isLoading, error } = useFetchData();

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Unable to load content. Please try again later.</p>;
    return data.flatMap(renderIframes);
  };

  return <StyledDiv>{renderContent()}</StyledDiv>;
};

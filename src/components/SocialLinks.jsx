import { RxCodesandboxLogo } from 'react-icons/rx';
import { FaGithub, FaLinkedin, FaDev, FaSpotify } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const MySocialLinks = [
  {
    label: 'GitHub',
    component: <FaGithub color="#fff" />,
    link: 'https://github.com/jonathanbcsouza',
  },
  {
    label: 'CodeSandbox',
    component: <RxCodesandboxLogo color="#fff" />,
    link: 'https://codesandbox.io/u/jonathanbcsouza',
  },
  {
    label: 'LinkedIn',
    component: <FaLinkedin color="#0e76a8" />,
    link: 'https://www.linkedin.com/in/jonathanbcsouza/',
  },
  {
    label: 'DEV Community',
    component: <FaDev color="#fff" />,
    link: 'https://dev.to/jonathanbcsouza',
  },
  {
    label: 'X',
    component: <FaXTwitter color="#fff" />,
    link: 'https://x.com/jonathanbcsouza',
  },
  {
    label: 'Spotify',
    component: <FaSpotify color="#1DB954" />,
    link: 'https://open.spotify.com/artist/3AxDKUFfndRKbL2W0sxPZ0?si=BawUTIHpQyaB-ZVw8g_w5w',
  },
];

import React from 'react';
import { RxCodesandboxLogo } from 'react-icons/rx';
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaDev,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa';

export const MySocialLinks = [
  {
    component: <FaGithub color="#fff" />,
    link: 'https://github.com/jonathanbcsouza',
  },
  {
    component: <FaTwitter color="#00acee" />,
    link: 'https://www.twitter.com/jonathanbcsouza',
  },
  {
    component: <RxCodesandboxLogo color="#fff" />,
    link: 'https://codesandbox.io/u/jonathanbcsouza',
  },
  {
    component: <FaSpotify color="#1DB954" />,
    link: 'https://open.spotify.com/artist/3SzDQcUhTIhN8GvnxHIgHE?si=tyMKA77PSuCh7WNEyazPpg',
  },
  {
    component: <FaDev color="#fff" />,
    link: 'https://dev.to/jonathanbcsouza',
  },
  {
    component: <FaLinkedin color="#0e76a8" />,
    link: 'https://www.linkedin.com/in/jonathanbcsouza/',
  },
  {
    component: <FaMedium color="#fff" />,
    link: 'https://medium.com/@jonathanbcsouza',
  },
];

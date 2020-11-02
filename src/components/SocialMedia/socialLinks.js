import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaSpotify, FaTwitter } from 'react-icons/fa';
import { SiCodesandbox } from "react-icons/si";
import { StyledLink } from "./styles";

export const MySocialLinks = [
    {
        component: <FaGithub color="#fff"/>,
        link: "https://github.com/jonathanbcsouza",
    },
    {
        component: <FaLinkedin color="#0e76a8" />,
        link: "https://www.linkedin.com/in/jonathanbcsouza/",
    },
    {
        component: <FaMedium color="#fff" />,
        link: "https://medium.com/@jonathanbcsouza",
    },
    {
        component: <FaSpotify color="#1DB954" />,
        link: "https://open.spotify.com/artist/3SzDQcUhTIhN8GvnxHIgHE?si=tyMKA77PSuCh7WNEyazPpg",
    },
    {
        component: <FaTwitter color="#00acee" />,
        link: "https://www.twitter.com/jonathanbcsouza",
    },
    {
        component: <SiCodesandbox color="#fff" />,
        link: "https://codesandbox.io/u/jonathanbcsouza",
    },

]

export function MapSocial() {
  return MySocialLinks.map((i) => (
    <StyledLink link={i.link}>{i.component}</StyledLink>
  ));
}



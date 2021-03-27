import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { MySocialLinks } from "./socialLinks";

export const StyledIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  path {
    transition: fill 0.4s ease;
  }
  svg:hover {
    fill: red;
    height: 30px;
  }
`;

export const StyledLink = styled.a.attrs(({ link }) => ({
  href: link,
  target: "_blank",
}))`
  margin: 2px;
`;

const SocialMedia = () => {
  return (
    <StyledIcons>
      <IconContext.Provider value={{ size: "32" }}>
        <h3>Let's Connect!</h3>
        <br />
        <div>
          {MySocialLinks.map((item) => (
            <StyledLink key={item.link} link={item.link}>
              {item.component}
            </StyledLink>
          ))}
        </div>
      </IconContext.Provider>
    </StyledIcons>
  );
};

export default SocialMedia;

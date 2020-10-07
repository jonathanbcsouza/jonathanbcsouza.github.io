import React from "react";
import { StyledIcon, StyledLink } from "./styles";
import { IconContext } from "react-icons";
import { MySocialLinks } from "./socialLinks";

const Social = () => {
  function MapSocial() {
    return MySocialLinks.map((i) => (
      <StyledLink link={i.link}>{i.component}</StyledLink>
    ));
  }

  return (
    <div>
      <br></br>

      <StyledIcon>
        <h3>Let's Connect!</h3>
        <br></br>
        <IconContext.Provider value={{ size: "32" }}>
          <div>
            <MapSocial />
          </div>
        </IconContext.Provider>
      </StyledIcon>
    </div>
  );
};

export default Social;

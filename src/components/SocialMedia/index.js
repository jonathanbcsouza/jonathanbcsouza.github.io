import React from "react";
import { StyledIcon } from "./styles";
import { IconContext } from "react-icons";
import { MapSocial } from "./socialLinks";

const SocialMedia = () => {
  return (
    <div>
      <br></br>

      <StyledIcon>
        <IconContext.Provider value={{ size: "32" }}>
          <h3>Let's Connect!</h3>
          <br />
          <div>
            <MapSocial />
          </div>
        </IconContext.Provider>
      </StyledIcon>
    </div>
  );
};

export default SocialMedia;

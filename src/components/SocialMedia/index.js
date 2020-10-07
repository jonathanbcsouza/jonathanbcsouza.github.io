import React from "react";
import { StyledIcon, StyledLink } from "./styles";
import { IconContext } from "react-icons";
import { MySocialLinks } from "./socialLinks";

const Social = () => {
  function mapSocial(array) {
    const mapped = [];
    for (let i = 0; i < array.length; i++) {
      mapped.push(
        <StyledLink link={array[i].link}>{array[i].component}</StyledLink>
      );
    }
    return mapped;
  }

  const mappedAges = mapSocial(MySocialLinks);

  return (
    <div>
      <br></br>

      <StyledIcon>
        <h3>Let's Connect!</h3>

        <br></br>

        <IconContext.Provider value={{ size: "32" }}>

          <div>{mappedAges}</div>
          
        </IconContext.Provider>
      </StyledIcon>
    </div>
  );
};

export default Social;

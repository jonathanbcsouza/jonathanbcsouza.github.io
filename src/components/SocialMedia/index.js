import React from 'react';
import { StyledIcon, StyledLink } from "./styles";
import { IconContext } from "react-icons";
import { MySocialLinks } from "./socialLinks";

const Social = () => {

    return (

        <div>

            <br></br>

            <StyledIcon>

                <h3>Let's Connect!</h3>

                <IconContext.Provider value={{ size: "32", color: "blue" }}>
                    <div>

                        <StyledLink link={MySocialLinks[0].link}>
                            {MySocialLinks[0].component}
                        </StyledLink>
                        <StyledLink link={MySocialLinks[1].link}>
                            {MySocialLinks[1].component}
                        </StyledLink>
                        <StyledLink link={MySocialLinks[2].link}>
                            {MySocialLinks[2].component}
                        </StyledLink>
                        <StyledLink link={MySocialLinks[3].link}>
                            {MySocialLinks[3].component}
                        </StyledLink>

                    </div>
                </IconContext.Provider>

            </StyledIcon>

        </div>
    );

}


export default Social;

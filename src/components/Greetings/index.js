import React from 'react';
import { StyledGreetings } from "./styles";

const Greetings = ({ setSentence, setColour }) => {
    return (
        <>
            <br></br>
            <StyledGreetings styledColour={setColour} >
                {setSentence}
            </StyledGreetings>

        </>
    );
}

export default Greetings;


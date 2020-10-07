import React from 'react';
import { StyledHeader } from "./styles";
import ProfilePhoto from "../ProfilePhoto";

const currentTime = new Date().getHours();

let greeting;

const customStyle = {
    color: ""
}
if (currentTime < 12) {
    greeting = "morning"
    customStyle.color = "orange"
} else if (currentTime < 18) {
    greeting = "afternoon"
    customStyle.color = "red"

} else {
    greeting = "evening"
    customStyle.color = "green"
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.write(today);

console.log(today)

const Header = ({ setFontSize }) => {
    return (
        <>
            <StyledHeader styledFont={setFontSize} >
                <ProfilePhoto />
                <p style={customStyle}>Good {greeting} </p>
                <p>
                    {today}
                </p>
            </StyledHeader>
        </>

    );
}

export default Header;
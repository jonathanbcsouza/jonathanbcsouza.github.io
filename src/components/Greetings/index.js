import React from 'react';
import "./styles.css";

const name = "Jonathan"
const surname = ""
const currentTime = new Date().getHours();

const customStyle = {
    color: ""
}

let greeting;

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


function Greetings() {
    return (
        <div className="greetings">

            <br></br>
            <h3 style={customStyle}>Good {greeting}.</h3>
            <h3>I am {name} {surname} and I am glad to have you browsing here.</h3>
            <br>
            </br>
            <h3>This webpage is underconstruction and it is turning to an React app .</h3>

        </div>
    );
}

export default Greetings;

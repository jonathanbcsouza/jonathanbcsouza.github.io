import React from 'react';
import "./styles.css";

function Greetings(props) {
    return (
        <div className="greetings">

            <br></br>

            <h3>I am {props.name} {props.surname} {props.sentence}</h3>

        </div>
    );
}

export default Greetings;

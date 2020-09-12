import React from 'react';
import "./styles.css";

const currentDate = new Date().getFullYear();

const Footer = () =>

    <footer id="footer">
        <hr></hr>
        <br></br>
        <p>Copyright {currentDate}</p>
    </footer>;

export default Footer;
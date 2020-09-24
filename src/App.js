import React from 'react';
import Header from './components/Header';
import ProfilePhoto from './components/ProfilePhoto';
import Greetings from './components/Greetings';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';

import "./styles.css";


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


function App() {
  return (
    
    <div className="App">

      <Header />
      <ProfilePhoto />

      <h3 style={customStyle}>Good {greeting}.</h3>

      <Greetings name="Jonathan" surname="Souza" sentence="this is my first react component" />
      <Greetings sentence="and this is the same component that I am reusing it with a new text :)" />

      <SocialMedia />
      <Footer />

    </div>
  );
}

export default App;
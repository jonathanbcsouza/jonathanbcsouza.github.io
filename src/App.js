import React from 'react';
import Header from './components/Header';
import ProfilePhoto from "./components/ProfilePhoto";
import Greetings from './components/Greetings';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';
import "./styles.css";


const App = () => {
  return (
    <>
      <div className="App">

        <Header
          setColour="blue"
          setFontSize="30"
        />

        <Greetings
          setSentence="This is my first react component!"
          setColour="Bisque"
        />

        <Greetings
          setSentence="This is the same component, but I am reusing it with a new text and new colour :)"
          setColour="BurlyWood"
        />

        <SocialMedia />

        <Footer />

      </div>

    </>
  );
}

export default App;
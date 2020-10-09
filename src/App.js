import React from "react";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Header setFontSize="50" />

        <Greetings
          setSentence="This is my first react component!"
          setColour="BurlyWood"
        />

        <Greetings
          setSentence="This is the same component, but I am reusing it with a new text and new colour :)"
          setColour="Bisque"
        />

        <Footer />
      </div>
    </>
  );
};

export default App;

import React from "react";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Header setFontSize="" />

        <Greetings
          setSentence=""
          setColour="BurlyWood"
        />

        <Footer />
      </div>
    </>
  );
};

export default App;

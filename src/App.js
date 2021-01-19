import React from "react";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";
import BackgroundImage from "./components/Background";

const App = () => {
  return (
    <>
      <div className="App">


      <Greetings setColour="BurlyWood" />

      <BackgroundImage />

        {/* <Header setFontSize="12" setText="Welcome" /> */}

        <Footer />
      </div>
    </>
  );
};

export default App;

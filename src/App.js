import React from "react";
import Header from "./components/Header";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";
import BackgroundImage from "./components/Background";

const App = () => {
  return (
    <>
      <div className="App">
        {/* <Header setFontSize="12" setText="Welcome" /> */}
        <Greetings setColour="BurlyWood" />

        <BackgroundImage />
        <Footer />
      </div>
    </>
  );
};

export default App;

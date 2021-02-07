import React from "react";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";
import BackgroundImage from "./components/Background";
// import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="App">
        {/* <Header setFontSize="12" setText="Welcome" /> */}
        <Greetings />

        <BackgroundImage />

        <Footer />
      </div>
    </>
  );
};

export default App;

import React from "react";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";
import BackgroundImage from "./components/Background";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="App">
        {/* <Greetings /> */}
        <Navbar />
        <BackgroundImage />
        <Footer />
        {/* <Header setFontSize="12" setText="Welcome" /> */}
      </div>
    </>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Greetings from "./components/Greetings";
import BackgroundImage from "./components/Background";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        {/* <Greetings /> */}
        {/* <BackgroundImage /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;

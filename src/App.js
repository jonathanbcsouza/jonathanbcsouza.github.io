import React from "react";
import Navbar from "./components/Navbar";
import Greetings from "./components/Greetings";
import BackgroundImage from "./components/Background";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Lab from "./Pages/Lab";
import Music from "./Pages/Music";

const App = () => {
  return (
    <div>
      <Router>
        <Greetings />
        <Navbar />
        <Switch>
          <Route path="/personalwebsite" component={Home} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/lab" component={Lab} exact />
          <Route path="/music" component={Music} exact />
        </Switch>

        {/* <BackgroundImage /> */}

        <Footer />
      </Router>
    </div>
  );
};

export default App;

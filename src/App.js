import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Lab from './Pages/Lab';
import Music from './Pages/Music';
import Greetings from './components/Greetings';

const App = () => {
  return (
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
      <Footer />
    </Router>
  );
};

export default App;

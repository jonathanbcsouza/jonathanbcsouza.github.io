import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Labs from './pages/Labs'
import Music from './pages/Music'
import Greetings from './components/Greetings'

const App = () => {
  return (
    <Router>
      <Greetings />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/labs" component={Labs} exact />
        <Route path="/music" component={Music} exact />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

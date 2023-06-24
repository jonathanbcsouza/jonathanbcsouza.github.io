import React from 'react'
import { About } from './pages/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Labs } from './pages/Labs'
import { Music } from './pages/Music'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <Router>
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

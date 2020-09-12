import React from 'react';
import Header from './components/Header';
import ProfilePhoto from './components/ProfilePhoto';
import Greetings from './components/Greetings';
import Footer from './components/Footer';
import SocialMedia from './components/SocialMedia';

import "./styles.css";

function App() {
  return (
    <div className="App">

      <Header />
      <ProfilePhoto />
      <Greetings />
      <SocialMedia />
      <Footer />

    </div>
  );
}

export default App;

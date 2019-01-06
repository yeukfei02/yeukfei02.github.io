import React, { Component } from 'react';

import NavBar from './NavBar/NavBar';
import Section from './Section/Section';
import About from './About/About';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Section />
        <About />
      </div>
    );
  }
}

export default App;

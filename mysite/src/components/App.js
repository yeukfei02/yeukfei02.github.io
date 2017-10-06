import React, { Component } from 'react';

import NavBar from './NavBar';
import Section from './Section';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
      	<NavBar/>
        <Section/>
        <About/>
      </div>
    );
  }
}

export default App;

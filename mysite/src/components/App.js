import React, { Component } from 'react';
import Normalize from 'react-normalize';

import NavBar from './NavBar/NavBar';
import PersonalSection from './PersonalSection/PersonalSection';
import Description from './Description/Description';

import '../index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Normalize />
        <NavBar />
        <PersonalSection />
        <Description />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Favicon from 'react-favicon';
import Normalize from 'react-normalize';

import NavBar from './NavBar/NavBar';
import PersonalSection from './PersonalSection/PersonalSection';
import Description from './Description/Description';

import favicon from '../images/favicon.png';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Favicon url={favicon} />
        <Normalize />
        <NavBar />
        <PersonalSection />
        <Description />
      </div>
    );
  }
}

export default App;

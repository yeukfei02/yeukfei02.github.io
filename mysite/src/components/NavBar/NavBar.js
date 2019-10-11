import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Navbar style={{ marginBottom: '0' }} collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Wu Yeuk Fei (Donald)</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/*<Nav pullRight>
	        <NavItem eventKey={1} href="/">Home</NavItem>
	        <NavItem eventKey={2} href="/about">About</NavItem>
	        <NavItem eventKey={3} href="/contact">Contact</NavItem>
	      </Nav>*/}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

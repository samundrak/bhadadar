import React, { Component } from 'react';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import {
  Navbar, Alignment, NavbarGroup, NavbarHeading,
} from '@blueprintjs/core';
import { Flex, Box } from 'reflexbox';
import Nav from './components/Nav';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Flex align="center">
          <Nav />
        </Flex>
        <Flex align="center">
          <Flex p={2} wrap>
            <Box auto>From</Box>
            <Box auto>Two</Box>
            <Box auto>Submit</Box>
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default App;

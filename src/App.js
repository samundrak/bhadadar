import React, { Component } from 'react';
import {
  Grid, Divider, Button, Dropdown, Input,
} from 'semantic-ui-react';
import { Flex, Box } from 'reflexbox';
import Nav from './components/Nav';
import './zApp.css';
import { randomNepalImage } from './helpers';
import InputSection from './components/InputSection';
import StatistcsSection from './components/StatistcsSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid.Row>
          <Nav />
          <Divider />
        </Grid.Row>
        <Grid.Row
          className="content"
          style={{ backgroundImage: `url(/images/${randomNepalImage()})` }}
        >
          <InputSection />
          <Divider />
        </Grid.Row>
        <Grid.Row>
          <StatistcsSection />
        </Grid.Row>
      </div>
    );
  }
}

export default App;

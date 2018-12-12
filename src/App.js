import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './zApp.css';
import AppLayout from './components/Layout';
import Home from './pages/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AppLayout>
          <Home />
        </AppLayout>
      </div>
    );
  }
}

export default App;

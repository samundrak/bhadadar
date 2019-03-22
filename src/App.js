import React, { Component } from 'react';
import './App.css';
import Suggestion from './components/Suggestion';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const worker = new Worker('./worker.js');
  }

  render() {
    return (
      <div className="container">
        <div className="row header">
          <div className="title">BhadaDar</div>
        </div>
        <div className="row content">
          <div className="hero">
            <div className="selection">
              <div className="dropdown">
                <Suggestion />
              </div>
              <div className="dropdown">
                <Suggestion />
              </div>
              <div className="button">
                <button type="button" className="btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="numbers">some counts</div>
          <div className="maps">Google map</div>
        </div>
        <div className="row footer">Footer</div>
      </div>
    );
  }
}

export default App;

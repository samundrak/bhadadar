import React, { Component } from 'react';
import './App.css';
import Suggestion from './components/Suggestion';
import BhadaDar from './core/Bhadadar';
import Lang from './core/Lang';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rerenderKey: Date.now(),
    };
    this.bhadadar = BhadaDar.getInstance();
    this.lang = {};
  }

  componentDidMount() {
    (async () => {
      this.lang = await Lang.getInstance().load('en');
      const places = await BhadaDar.fetchPlaces();
      await this.bhadadar.createRecords('places', places.data);
      this.setState({
        rerenderKey: Date.now(),
      });
    })();
  }

  render() {
    return (
      <div className="container" key={this.state.rerenderKey}>
        <div className="row header">
          <div className="title">{this.lang.app}</div>
        </div>
        <div className="row content">
          <div className="hero">
            <div className="selection">
              <div className="dropdown">
                <Suggestion placeholder={this.lang.placeholderSource} />
              </div>
              <div className="dropdown">
                <Suggestion placeholder={this.lang.placeholderDestination} />
              </div>
              <div className="button">
                <button type="button" className="btn-primary">
                  {this.lang.search}
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

import React, { Component } from 'react';
import './App.css';
import Suggestion from './components/Suggestion';
import BhadaDar from './core/Bhadadar';
import Lang from './core/Lang';
import LanguageContext from './contexts/LanguageContext';
import BhadadarContext from './contexts/BhadadarContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rerenderKey: Date.now(),
    };
    this.bhadadar = BhadaDar.getInstance();
    this.lang = {};
    this.places = [];
  }

  componentDidMount() {
    (async () => {
      this.lang = await Lang.getInstance().load('en');
      await this.bhadadar.boot();
      this.setState({
        rerenderKey: Date.now(),
      });
    })();
  }

  render() {
    return (
      <BhadadarContext.Provider value={this.bhadadar}>
        <LanguageContext.Provider key={this.state.rerenderKey} value={this.lang}>
          <LanguageContext.Consumer>
            {lang => (
              <div className="container">
                <div className="row header">
                  <div className="title">{lang.app}</div>
                </div>
                <div className="row content">
                  <div className="hero">
                    <div className="selection">
                      <div className="dropdown">
                        <Suggestion placeholder={lang.placeholderSource} />
                      </div>
                      <div className="dropdown">
                        <Suggestion placeholder={lang.placeholderDestination} />
                      </div>
                      <div className="button">
                        <button type="button" className="btn-primary">
                          {lang.search}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="numbers">some counts</div>
                  <div className="maps">Google map</div>
                </div>
                <div className="row footer">Footer</div>
              </div>
            )}
          </LanguageContext.Consumer>
        </LanguageContext.Provider>
      </BhadadarContext.Provider>
    );
  }
}

export default App;

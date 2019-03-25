import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from 'react-s-alert';
import './App.css';
import Suggestion from './components/Suggestion';
import Result from './components/Result';
import BhadaDar from './core/Bhadadar';
import Lang from './core/Lang';
import LanguageContext from './contexts/LanguageContext';
import BhadadarContext from './contexts/BhadadarContext';
import * as appActions from './store/actions/appActions';
import * as loadingActions from './store/actions/loadingActions';

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
      this.props.actions.rootLoadingStart();
      this.lang = await Lang.getInstance().load('en');
      await this.bhadadar.boot();
      this.props.actions.rootLoadingStop();
      this.setState({
        rerenderKey: Date.now(),
      });
    })();
  }

  handleSuggestionSelect(type) {
    return (place) => {
      if (type === 'source') {
        this.props.actions.setSource(place);
      } else {
        this.props.actions.setDestination(place);
      }
      if(type === 'destination' || this.props.app.source && this.props.app.destination) {
        if(this.searchEl) {
          this.searchEl.focus()
        }
      }
    };
  }

  handleSearch = () => {
    const { source, destination } = this.props.app;
    if (!source || !destination) {
      return;
    }
    this.bhadadar
      .getBhadadar(source.id, destination.id)
      .then((data) => {
        this.props.actions.setResult(data);
      })
      .catch((err) => {
        Alert.error(err.message);
        this.props.actions.setResult(null);
      });
  };

  render() {
    return (
      <BhadadarContext.Provider value={this.bhadadar}>
        <LanguageContext.Provider key={this.state.rerenderKey} value={this.lang}>
          <LanguageContext.Consumer>
            {lang => (
              <div className="container">
                <Alert stack={{ limit: 3 }} />
                {this.props.loading.isRootLoading && <div className="lds-hourglass" />}
                <div className="row header">
                  <a href="/">
                    <div className="title">
                      \\
                      {lang.app}
                      //
                    </div>
                  </a>
                </div>
                <div className="row content">
                  <div className="hero">
                    <div className="selection">
                      <div className="dropdown">
                        <Suggestion
                          ignore={this.props.app.destination}
                          onSelect={this.handleSuggestionSelect('source')}
                          placeholder={lang.placeholderSource}
                        />
                      </div>
                      <div className="dropdown">
                        <Suggestion
                          ignore={this.props.app.source}
                          onSelect={this.handleSuggestionSelect('destination')}
                          placeholder={lang.placeholderDestination}
                        />
                      </div>
                      <div className="button">
                        <button
                          ref={el => (this.searchEl = el)}
                          onClick={this.handleSearch}
                          type="button"
                          className="btn-primary"
                        >
                          {lang.search}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="numbers">
                    <Result value={this.props.app.result} />
                  </div>
                  {/* <div className="maps">Google map</div> */}
                </div>
                {/* <div className="row footer">Footer</div> */}
              </div>
            )}
          </LanguageContext.Consumer>
        </LanguageContext.Provider>
      </BhadadarContext.Provider>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  global: state.global,
  app: state.app,
});
const mapActionsToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...appActions,
      ...loadingActions,
    },
    dispatch,
  ),
});
export default connect(
  mapStateToProps,
  mapActionsToProps,
)(App);

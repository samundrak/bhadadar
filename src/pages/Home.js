import React from 'react';
import { Row, Col, Select } from 'antd';
import SearchForm from '../components/SearchForm';

const languages = [
  {
    name: 'C',
    year: 1972,
  },
  {
    name: 'Elm',
    year: 2012,
  },
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travel: { from: '', to: '' },
      suggestions: [],
    };
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = searchType => ({ value }) => {
    console.log(this.getSuggestions(value));
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = searchType => () => {
    this.setState({
      suggestions: [],
    });
  };

  handleSearchChange = searchType => (event, { newValue }) => {
    const { travel } = this.state;
    this.setState({
      travel: {
        ...travel,
        [searchType]: newValue,
      },
    });
  };

  render() {
    const { suggestions, travel } = this.state;
    return (
      <Row>
        <Row>
          <Col span={12} offset={6}>
            <SearchForm
              onSearchChange={this.handleSearchChange}
              travel={travel}
              suggestions={suggestions}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            />
          </Col>
        </Row>
        <Row>statiscs</Row>
        <Row>Google Calendar</Row>
      </Row>
    );
  }
}
export default Home;

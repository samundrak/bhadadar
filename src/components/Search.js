import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => <div>{suggestion.name}</div>;

const Search = ({
  placeholder,
  value,
  onChange,
  onSuggestionsClearRequested,
  onSuggestionsFetchRequested,
  suggestions,
}) => (
  <Autosuggest
    suggestions={suggestions}
    getSuggestionValue={getSuggestionValue}
    renderSuggestion={renderSuggestion}
    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    onSuggestionsClearRequested={onSuggestionsClearRequested}
    inputProps={{ placeholder, value, onChange }}
  />
);
Search.defaultProps = {
  onChange: () => null,
  placeholder: 'Enter value',
  value: '',
  suggestions: [],
};
Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSuggestionsClearRequested: PropTypes.func.isRequired,
  onSuggestionsFetchRequested: PropTypes.func.isRequired,
  suggestions: PropTypes.array,
};
export default Search;

import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import BhadadarContext from '../contexts/BhadadarContext';

const options = [];
const defaultOption = options[0];

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    console.log(this.context);
  }

  loadOptions = (query, callback) => {
    console.log(query, this.props);
  };

  onInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };

  render() {
    return (
      <AsyncSelect
        className="suggestion"
        isClearable
        isSearchable
        options={options}
        onInputChange={this.onInputChange}
        loadOptions={this.loadOptions}
        value={defaultOption}
        placeholder={this.props.placeholder}
      />
    );
  }
}
Suggestion.contextType = BhadadarContext;
export default Suggestion;

import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import BhadadarContext from '../contexts/BhadadarContext';

const options = [];
const defaultOption = options[0];

class Suggestion extends React.Component {
  static contextType = BhadadarContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    console.log('mounted');
  }

  loadOptions = (query, callback) => {
    this.context.getPlacesByQuery(query).then((places) => {
      callback(
        places.map(item => ({
          value: item.en,
          label: `${item.en.toUpperCase()} (${item.np})`,
        })),
      );
    });
    // this.context.getPlacesByQuery(query).forEach((doc) => {
    //   console.log(doc);
    // });
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
        onInputChange={this.onInputChange}
        loadOptions={this.loadOptions}
        placeholder={this.props.placeholder}
      />
    );
  }
}
export default Suggestion;

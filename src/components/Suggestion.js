import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import BhadadarContext from '../contexts/BhadadarContext';

const selectStyles = {
  container: (base, state) => ({
    ...base,
    opacity: state.isDisabled ? '.5' : '1',
    backgroundColor: 'transparent',
    zIndex: '99',
  }),
};
class Suggestion extends React.Component {
  static contextType = BhadadarContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      inputValue: '',
    };
  }

  loadOptions = (query, callback) => {
    this.context.getPlacesByQuery(query).then((places) => {
      callback(
        places
          .map(item => ({
            id: item.id,
            value: item.en,
            label: `${item.en.toUpperCase()} (${item.np})`,
          }))
          .filter((item) => {
            if (!this.props.ignore) return true;
            return this.props.ignore.value !== item.value;
          }),
      );
    });
  };

  onInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    return inputValue;
  };

  handleChange = (value) => {
    if (this.props.onSelect) {
      this.props.onSelect(value);
    }
  };

  render() {
    return (
      <AsyncSelect
        onChange={this.handleChange}
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

import React from 'react';
import Dropdown from 'react-select';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two', className: 'myOptionClassName' },
];
const defaultOption = options[0];

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect = () => {};

  render() {
    return (
      <Dropdown
        className="suggestion"
        isClearable
        isSearchable
        options={options}
        onChange={this.onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
    );
  }
}
export default Suggestion;

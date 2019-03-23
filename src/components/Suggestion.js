import React from 'react';
import Dropdown from 'react-select';

const options = [];
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
        placeholder={this.props.placeholder}
      />
    );
  }
}
export default Suggestion;

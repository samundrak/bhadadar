import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Icon, Button, Form, Select,
} from 'antd';
import Search from './Search';

const FormItem = Form.Item;

const SearchForm = ({
  travel,
  onSearchChange,
  handleSubmit,
  suggestions,
  onSuggestionsClearRequested,
  onSuggestionsFetchRequested,
}) => (
  <Form layout="inline" onSubmit={handleSubmit}>
    <FormItem>
      <Search
        onChange={onSearchChange('from')}
        value={travel.from}
        suggestions={suggestions}
        placeholder="From"
        onSuggestionsClearRequested={onSuggestionsClearRequested('from')}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested('from')}
      />
    </FormItem>
    <FormItem>
      <Search
        onChange={onSearchChange('to')}
        value={travel.to}
        suggestions={suggestions}
        placeholder="To"
        onSuggestionsClearRequested={onSuggestionsClearRequested('to')}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested('to')}
      />
    </FormItem>
    <FormItem>
      <Button style={{ padding: '10px 20px' }} type="primary" htmlType="submit">
        Search
      </Button>
    </FormItem>
  </Form>
);
SearchForm.propTypes = {
  onSuggestionsClearRequested: PropTypes.func.isRequired,
  onSuggestionsFetchRequested: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  suggestions: PropTypes.array,
  travel: PropTypes.object,
};
export default SearchForm;

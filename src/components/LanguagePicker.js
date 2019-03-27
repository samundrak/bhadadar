import Select from 'react-select';
import React from 'react';

const options = [{ label: 'English', value: 'en' }, { label: 'नेपाली', value: 'np' }];
const getSelected = lang => options.find(item => item.value === lang);

const LanguagePicker = ({ onChange, lang = 'en' }) => (
  <Select onChange={onChange} defaultValue={getSelected(lang)} name="color" options={options} />
);
export default LanguagePicker;

/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

// Styles et assets

import './field.sass';

const Field = ({
  name,
  placeholder,
  type,
  value,
  onChange
}) => (
  <input
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);
Field.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

Field.defaultProps = {
  value: '',
  type: 'text'
};
export default Field;

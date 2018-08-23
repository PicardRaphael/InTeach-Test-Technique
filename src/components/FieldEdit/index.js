/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI import
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

// Styles et assets
import './fieldedit.sass';

const FieldEdit = ({
  refInput,
  name,
  placeholder,
  type,
  value,
  onChange
}) => {
  return (
    <React.Fragment>
      <InputLabel className='label-editInput' htmlFor={name}>
        {placeholder}
      </InputLabel>
      <Input
        inputRef={refInput}
        className='input-field'
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </React.Fragment>
  );
};

FieldEdit.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

FieldEdit.defaultProps = {
  value: '',
  type: 'text'
};
export default FieldEdit;

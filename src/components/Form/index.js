/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Composants

// Styles et assets
import './form.sass';

const Form = ({
  fields
}) => (
  <form>
    {fields()}
    <button>Créer</button>
  </form>
);

Form.propTypes = {
  fields: PropTypes.func.isRequired
};
export default Form;

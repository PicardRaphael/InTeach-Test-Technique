/**
 * Import
 */
import React from 'react';

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

export default Form;

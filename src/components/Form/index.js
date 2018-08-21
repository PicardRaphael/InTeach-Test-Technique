/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Local import
 */
/* Material-UI import */
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

// Styles et assets
import './form.sass';
/**
 * Composant de présentation, qui gère la couche DOM.
 */
class Form extends React.Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return (
      <FormControl align='center' onSubmit={this.handleSubmit} className='form-module'>
        {this.props.fields}
        <Button className='cancel' variant="outlined" color="secondary" onClick={this.props.onChangeView('modules')}>
          Annuler
        </Button>
        <div className='btn-creat' >
          <Button className='btn-creat' variant="contained" color="primary" >
            <SaveIcon className='icon-creat' />
          Ajouter
          </Button>
        </div>
      </FormControl>
    );
  };
}


export default Form;

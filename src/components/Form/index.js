/**
 * Import
 */
import React from 'react';
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
  onSubmit = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('input');
    this.props.onSubmit(input.value);
    input.value = '';
  }

  render() {
    return (
      <form>
        <FormControl align='center' className='form-module'>
          {this.props.fields}
          <Button className='cancel' variant="outlined" color="secondary" onClick={this.props.onChangeView('modules')}>
            Annuler
          </Button>
          <div className='btn-creat' >
            <Button
              className='btn-creat'
              variant="contained"
              color="primary"
              onClick={this.onSubmit}
            >
              <SaveIcon className='icon-creat' />
            Ajouter
            </Button>
          </div>
        </FormControl>
      </form>
    );
  };
}

export default Form;

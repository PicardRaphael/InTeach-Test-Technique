/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */

// Material-UI import
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Field from 'src/components/Field';

// Data Input
import inputData from 'src/data/input-data';

// Styles et assets
import './form.sass';

/**
 * Composant de présentation, qui gère la couche DOM.
 */
class Form extends React.Component {
  state = {
    title: ''
  }
  /**
   * Callback qui permet de gérer le click sur le boutton ajouter
   */
  onSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.title);
    this.props.onSubmit(this.title.value);
    this.title.value = '';
  }

  /**
   * Callback qui permet de gérer les Input
   * but :  modifier le state suivant ce qui est inscrit dans le input
   */
  handleInputChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value
    });
  }

  /**
   * Fonction qui permet de boucler sur le fichier contenant les inputs
   * but: Afficher le nombre de input inscrit dans input-data
   */
  fields = () => {
    return inputData.map(field => {
      return (
        <Field
          refInput={input => (this.title = input)}
          key={field.name}
          {...field}
          value={this.state.title}
          onChange={this.handleInputChange}
        />
      );
    });
  }

  render() {
    return (
      <FormControl align='center' className='form-module'>
        {this.fields()}
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
    );
  };
}

export default Form;

/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Header from 'src/components/Header';
import Module from 'src/components/Module';
import Form from 'src/components/Form';
import Footer from 'src/components/Footer';
import Field from 'src/components/Field';

/* Material-UI import */
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

// Data
import inputData from 'src/data/input-data';
import data from 'src/data/data';

// Styles et assets
import './app.sass';

/**
 * Code
 */
class App extends React.Component {
  state = {
    data
  };

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
          key={field.name}
          {...field}
          value={this.state[field.name]}
          onChange={this.handleInputChange}
        />
      );
    });
  }

  /**
   * Callback qui permet de gérer la soumission de Formulaire
   */
  handleSubmit = (evt) => {
    // On empêche le comportement par défaut du navigateur (Refresh de la page au submit).
    evt.preventDefault();
    console.log('bien reçu !');
  }

  render() {
    const { data } = this.state;
    return (
      <div id="app">
        <Header />
        <Tooltip title='Ajouter un module'>
          <Button variant="fab" color="secondary" className='addIcon'>
            <AddIcon />
          </Button>
        </Tooltip>
        <Module data={data} />
        <Form onSubmit={this.handleSubmit} fields={this.fields()}/>
        <Footer />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;

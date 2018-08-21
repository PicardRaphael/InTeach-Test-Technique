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

// Data
import inputData from 'src/data/input-data';

// Styles et assets
import './app.sass';

/**
 * Code
 */
class App extends React.Component {
  state = {};

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
   * Callback qui permet de boucler sur le fichier contenant les inputs
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
    return (
      <div id="app">
        <Header />
        <Module />
        <Form onSubmit={this.handleSubmit} fields={this.fields}/>
        <Footer />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;

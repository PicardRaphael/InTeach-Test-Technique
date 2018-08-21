/**
 * Import
 */
import React from 'react';
import axios from 'axios';

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
    view: 'modules',
    data
  };

  /**
   * Méthode du cycle de vie exécutée une seule fois, lorsque le composant
   * est monté dans la page (rendu initial).
   * - on écrase l'état actuel et le chemin (path) actuel, pour que la page de
   *   départ de l'application soit gérée au niveau de l'historique de
   *   navigation.
   * - on met en place un écouteur d'événement qui nous permettra de réagir
   *   au changement de chemin dans l'URL. On réagira en exploitant une
   *   information stockée pour chaque entrée de l'historique de navigation,
   *   afin de refresh le composant React.
   */
  componentDidMount = () => {
    window.history.replaceState({ view: 'modules' }, null, '/view/modules');
    window.addEventListener('popstate', (evt) => {
      this.setState(evt.state);
    });
  }

  /**
   * On change de vue React. Au passage, on ajoute une entrée dans l'historique
   * de navigation, en stockant la vue au sens React vers laquelle on se dirige.
   */
  changeView = newView => (evt) => {
    const browserState = { view: newView };
    window.history.pushState(browserState, null, `/view/${newView}`);
    console.log('changeView', window.history.state);
    this.setState(browserState);
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
  creatModule = () => {
    // On empêche le comportement par défaut du navigateur (Refresh de la page au submit).
    console.log('bien reçu !');
  }

  render() {
    const { view, data } = this.state;
    return (
      <div id="app">
        <Header />
        { view === 'form-modules' && (
          <Form
            onSubmit={this.creatModule}
            fields={this.fields()}
            onChangeView={this.changeView}/>
        )}
        { view === 'modules' && (
          <Tooltip title='Ajouter un module'>
            <Button
              variant="fab"
              color="secondary"
              className='addIcon'
              onClick={this.changeView('form-modules')}
            >
              <AddIcon />
            </Button>
          </Tooltip>
        )}
        <Module data={data} />

        <Footer />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;

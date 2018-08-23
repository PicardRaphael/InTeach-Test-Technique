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
import Modules from 'src/components/Modules';
import Form from 'src/components/Form';
import Footer from 'src/components/Footer';

// Material-UI import
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

// Data modules
import modules from 'src/data/modules';

// Styles et assets
import './app.sass';

/**
 * Code
 */
class App extends React.Component {
  /**
   * Initialisation de mon state
   * view: gère la vue courent de l'application
   * data: gère les datas du fichier data.js qui se situe dans le dossier data
  */
  state = {
    view: 'modules',
    modules
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
    this.setState(browserState);
  }

  /**
   * Callback qui permet de gérer la soumission de Formulaire de création
   */
  createModule = (title) => {
    const allIds = this.state.modules.map(mod => mod.id);
    const newId = allIds.length ? Math.max(...allIds) + 1 : 0;
    const newModule = {
      id: newId,
      title: title,
      lessons: []
    };
    const modules = [...this.state.modules, newModule];
    this.setState({
      modules,
      view: 'modules'
    });
    window.history.pushState(null, null, '/view/modules');
  }

  /**
   * Callback qui permet de gérer la supression d'un module
   */
  deleteModule = id => () => {
    const modules = this.state.modules.filter(mod => mod.id !== id);
    this.setState({ modules });
  }

  /**
   * Callback qui permet de gérer la soumission de Formulaire d'édition
   */
  editModule = (title, id) => {
    const md = this.state.modules.filter(mod => mod.id === id);
    const test = md[0].title = title;
    this.setState({
      test,
      ...this.state.data,
      view: 'modules'
    });
    window.history.pushState(null, null, '/view/modules');
  }

  render() {
    const { view, modules } = this.state;
    return (
      <div id="app">
        <Header />
        { view === 'form-modules' && (
          <Form
            onSubmit={this.createModule}
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
        <Modules
          modules={modules}
          onDeleteModule={this.deleteModule}
          onSubmit={this.editModule}
        />
        <Footer />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;

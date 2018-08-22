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
import FieldEdit from 'src/components/FieldEdit'

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
  fieldsEdit = () => {
    return inputData.map(field => {
      return (
        <FieldEdit
          key={field.name}
          {...field}
          value={this.state[field.name]}
          onChange={this.handleInputChange}
        />
      )
    });
  }
  /**
   * Callback qui permet de gérer la soumission de Formulaire
   */
  creatModule = (title) => {
    const allIds = this.state.data.map(mod => mod.id);
    const newId = allIds.length ? Math.max(...allIds) + 1 : 0;
    const newModule = {
      id: newId,
      title: title,
      lessons: []
    };
    const data = [...this.state.data, newModule];
    this.setState({
      data,
      view: 'modules'
    });
  }

  /**
   * Callback qui permet de gérer la supression d'un module
   */
  deletModule = id => () => {
    const data = this.state.data.filter(mod => mod.id !== id);
    this.setState({ data });
  }

  showEditModule = id => () => {
    const module = document.getElementById(id);
    const form = module.lastChild;
    form.classList.add('display');
  }

  editModule = (title, id) => {
    const moduleHTML = document.getElementById(id);
    const formHTML = moduleHTML.lastChild;
    formHTML.classList.remove('display');
    const md = this.state.data.filter(mod => mod.id === id);
    const test = md[0].title = title;
    this.setState({
      test,
      ...this.state.data
    });
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
        <Module
          editFields={this.fieldsEdit()}
          data={data}
          onDeletModule={this.deletModule}
          showEditModule={this.showEditModule}
          onSubmit={this.editModule}
          onChangeInput={this.handleInputChange}/>
        <Footer />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;

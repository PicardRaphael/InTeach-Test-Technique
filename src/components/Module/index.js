/**
 * Import
 */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import FieldEdit from 'src/components/FieldEdit';

// Material-UI import
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Done from '@material-ui/icons/Done';

// Styles et assets
import './module.sass';

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: this.props.module.title
    };
  }

  /**
   * Usine à callback qui permet de gérer le click sur le boutton done qui valide l'édition du module
   */
  callBackEditModule = (id) => (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.title.value, id);
    this.title.value = '';
    this.setState({
      edit: false
    });
  }

  /**
   * Usine à callback qui change de vue React. Au passage, on ajoute une entrée dans l'historique
   * de navigation, en stockant la vue au sens React vers laquelle on se dirige.
   */
  editView = id => () => {
    const browserState = { edit: true };
    window.history.pushState(browserState, null, `/module/${id}/edit`);
    this.setState(browserState);
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

  render() {
    const { edit } = this.state;
    return (
      <Grid key={this.props.module.id} item>
        <Card className='card-module'>
          <CardContent>
            <div id={this.props.module.id}>
              <Typography variant='headline' align='center'>
                {this.props.module.title}
              </Typography>
              { edit === true && (
                <FormControl id={this.props.module.id} className='form-edit'>
                  <FieldEdit
                    refInput={input => (this.title = input)}
                    name='title'
                    placeholder='Nouveau nom du module'
                    type='text'
                    value={this.state.title}
                    onChange={this.handleInputChange}
                  />
                  <IconButton
                    variant="fab"
                    aria-label="Done"
                    className='done-icon'
                    onClick={this.callBackEditModule(this.props.module.id)}>
                    <Done/>
                  </IconButton>
                </FormControl>
              )}
            </div>
            <div>
              <IconButton
                className='icon'
                variant="fab"
                aria-label="Delete"
                color='secondary'
                onClick={this.props.onDeleteModule(this.props.module.id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton
                className='icon'
                variant="fab"
                aria-label="Edit"
                color="primary"
                onClick={this.editView(this.props.module.id)}>
                <Icon>edit_icon</Icon>
              </IconButton>
            </div>
            <Button size="small" color="primary" className='lessons'>
              leçons : {this.props.module.lessons.length}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    );
  };
}

export default Module;

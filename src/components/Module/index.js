import React from 'react';
import PropTypes from 'prop-types';

/* Material-UI import */
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

import './module.sass';

class Module extends React.Component {
  /**
   * Usine à Callback qui permet de gérer le click sur le boutton done qui valide l'édition du module
   */
  callBackEditModule = (id) => (evt) => {
    evt.preventDefault();
    const input = document.querySelector('input');
    this.props.onSubmit(input.value, id);
    input.value = '';
  }

  /**
   * Callback qui convertis les valeur de moduleJSX en JSX
   */
  convertModuleToJSX = (mod) => (
    <Grid key={mod.id} item>
      <Card className='card-module'>
        <CardContent>
          <div id={mod.id}>
            <Typography variant='headline' align='center'>
              {mod.title}
            </Typography>
            <FormControl className='form-edit'>
              {this.props.editFields}
              <IconButton
                variant="fab"
                aria-label="Done"
                className='done-icon'
                onClick={this.callBackEditModule(mod.id)}>
                <Done/>
              </IconButton>
            </FormControl>
          </div>
          <div>
            <IconButton
              className='icon'
              variant="fab"
              aria-label="Delete"
              color='secondary'
              onClick={this.props.onDeletModule(mod.id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton
              className='icon'
              variant="fab"
              aria-label="Edit"
              color="primary"
              onClick={this.props.showEditModule(mod.id)}>
              <Icon>edit_icon</Icon>
            </IconButton>
          </div>
          <Button size="small" color="primary" className='lessons'>
          leçons : {mod.lessons.length}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );

  /**
   * Fonction qui réalise une boucle map sur nos data et apelle la fonction convertModuleToJSX
   */
  moduleJSX = () => this.props.data.map(this.convertModuleToJSX);

  render() {
    return (
      <Grid container className='modules'>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={32}>
            {this.moduleJSX()}
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default Module;

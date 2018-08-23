import React from 'react';
import PropTypes from 'prop-types';

import Module from 'src/components/Module';

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

import './modules.sass';

class Modules extends React.Component {
  /**
   * Callback qui convertis les valeur de moduleJSX en JSX
   */
  convertModuleToJSX = (mod) => (
    <Module
      key={mod.id}
      module={mod}
      onDeleteModule={this.props.onDeleteModule}
      callBackEditModule={this.callBackEditModule}
      editFields={this.props.editFields}
      onSubmit={this.props.onSubmit}
    />
  );

  /**
   * Fonction qui réalise une boucle map sur nos data et apelle la fonction convertModuleToJSX
   */
  moduleJSX = () => this.props.modules.map(this.convertModuleToJSX);

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

export default Modules;

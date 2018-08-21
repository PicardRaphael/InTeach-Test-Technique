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

import './module.sass';

const Module = ({data}) => {
  console.log(data);
  const convertModuleToJSX = (mod) => (
    <Grid key={mod.id} item>
      <Card className='card-module'>
        <CardContent>
          <div className='test'>
            <Typography variant='headline' align='center'>
              {mod.title}
            </Typography>
            <IconButton className='icon' variant="fab" aria-label="Delete" color='secondary'>
              <DeleteIcon />
            </IconButton>
            <IconButton className='icon'variant="fab" aria-label="Edit" color="primary">
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

  const moduleJSX = data.map(convertModuleToJSX);
  return (
    <Grid container className='modules'>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={32}>
          {moduleJSX}
        </Grid>
      </Grid>
    </Grid>  
  );
};

/* Module.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
} */
export default Module;

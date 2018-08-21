import React from 'react';
import PropTypes from 'prop-types';

/* Material-UI import */
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './module.sass';

const Module = ({data}) => {
  const convertModuleToJSX = (mod) => (
    <Grid key={mod.id} item xs={3}>
      <Card className='card-module'>
        <CardContent>
          <Typography variant='headline' align='center' color='error'>
            {mod.title}
          </Typography>
          <Button size="small" color="primary">
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

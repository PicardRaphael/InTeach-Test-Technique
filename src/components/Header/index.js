import React from 'react';

/* Material-UI import */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import './header.sass';

const Header = () => (
  <div className='header'>
    <AppBar position="static">
      <Toolbar>
        <IconButton className='menuButton' color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className='flex'>
          Menu
        </Typography>
        <IconButton color='inherit'>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;

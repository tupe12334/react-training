import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
    return (
        <div className="HeaderClass">
    <div style={{flexGrow:1}}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu" style={{marginRight:(2)}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow:1}} >
            ToDo List
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
        </div>
    )
}

export default Header;
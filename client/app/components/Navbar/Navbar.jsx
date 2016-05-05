import React from 'react';
import Navbar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// MATERIAL COMPONENT EX:
// Must wrap single material component in context tags
const NavBar = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Navbar title="Pluribus" />
  </MuiThemeProvider>  
);

export default NavBar;

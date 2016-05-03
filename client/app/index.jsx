import React from 'react';
import ReactDOM from 'react-dom';

// custom components
import Map from './components/Map/Map.jsx';
import Feed from './components/Feed/Feed.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

// material injection
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

// MATERIAL COMPONENT EX:
// Must wrap single material component in context tags
const MyMaterialComponent = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <AppBar />
  </MuiThemeProvider>  
);

const MyOtherMC = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <RaisedButton label="Super Sweet Button"/>
  </MuiThemeProvider>  
);
// END OF MATERIAL COMPONENT EX:

const Main = () => (
  <div>Hello Freekin World
    <MyMaterialComponent />
    <MyOtherMC />
    <Map />
    <Feed />
    <Navbar />
  </div>
)


ReactDOM.render(<Main />, document.getElementById('main'));

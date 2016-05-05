import React from 'react';
import ReactDOM from 'react-dom';

// custom components
import GoogleMap from './components/Map/Map.jsx';
import Feed from './components/Feed/Feed.jsx';
// import Navbar from './components/Navbar/Navbar.jsx';

// material injection
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import Search from './components/Feed/Search/Search.jsx';

// MATERIAL COMPONENT EX:
// Must wrap single material component in context tags
const NavBar = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Navbar title="Pluribus" />
  </MuiThemeProvider>  
);

let messages = ["Bernie","Trump", "John Wayne", "Clinton","Rubio","Tom Cruise"];

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Feed messages={ this.props.messages } />
        <GoogleMap mlat="55.0000" mlong="-113.0000" />
      </div>
    )
  }
}

ReactDOM.render(<Main messages={messages} />, document.getElementById('main'));

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
import AppBar from 'material-ui/AppBar';

// MATERIAL COMPONENT EX:
// Must wrap single material component in context tags
const NavBar = () => (
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
let messages = ["i","am","here"];
let message = "HELLO property transferring";

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

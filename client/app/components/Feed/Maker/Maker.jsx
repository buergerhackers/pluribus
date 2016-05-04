import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Colors from 'material-ui/styles/colors.js';

// console.log(Colors);
// const styles = {
//   errorStyle: {
//     color: Colors.orange500,
//   },
//   underlineStyle: {
//     borderColor: Colors.orange500,
//   },
// };

// dummy store to be replaced with Redux Store
let MakerStore = {getState: 'nothing'};

class Maker extends React.Component {
  constructor() {
    super();
    this._sendPlurb = this._sendPlurb;
    this.state = MakerStore;
  }
  _sendPlurb() {
    console.log('sending a plurb');
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
    <TextField
      value={ this.props.message }
      hintText="What is your opinion?"
    />
  </MuiThemeProvider>
  }
}

export default Maker;

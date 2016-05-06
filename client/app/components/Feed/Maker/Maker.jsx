import React from 'react';
import { store } from '../../../STORE.jsx';
console.log(store);
import { createPlurb } from '../../../ACTIONS.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Colors from 'material-ui/styles/colors.js';
import ActionButton from 'material-ui/FloatingActionButton';
import Plus from 'material-ui/svg-icons/content/add';

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

class MakePlurb extends React.Component {
  constructor() {
    super();
    this.state = MakerStore;
  }
  _sendPlurb() {
    console.log(this);
    console.log("ACTION: 'CREATE_PLURB'");
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <ActionButton 
      primary={true}
      children={<Plus />} 
      onClick={ this._sendPlurb }
      style={{ position: 'absolute', bottom: '50', right:'320' }}
      />
    </MuiThemeProvider>
  }
}

export default class Maker extends React.Component {
  _sendPlurb(input) {
    console.log('caught your plurb:');
    console.log(input);
    // send on return
    input.keyCode === 13 ? console.log(input.detail): false; 
  }
  render() {
    return <div><MakePlurb /><TextField
      value={ this.props.message }
      hintText="What is your opinion?"
      onKeyDown={this._sendPlurb}
      type="text"
      style={{ position: 'absolute', bottom: '50', right:'50' }}
    />
    </div>
  }

}

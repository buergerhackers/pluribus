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
// listen for store changes!
let unsubscribe = store.subscribe(() => console.log(store.getState()))

class MakePlurb extends React.Component {
  constructor() {
    super();
    // this.state = props;
  }
  _sendPlurb() {
    console.log(this);
    // super._sendPlurb(this.state.message);
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
  constructor(props) {
    super();
    console.log(store.getState());
    this.state = {
      message: ''
    };
  }
  _sendPlurb(input) {
    console.log("ACTION: 'CREATE_PLURB'");
    console.log(input);
    // send on return
    input.keyCode === 13 ? store.dispatch(createPlurb(this.state.message, this.state.user, this.state.location)): false; 
  }
  render() {
    return <div><MakePlurb /><TextField
      value={ this.state.message }
      hintText="What is your opinion?"
      onKeyDown={this._sendPlurb}
      type="text"
      style={{ position: 'absolute', bottom: '50', right:'50' }}
    />
    </div>
  }

}

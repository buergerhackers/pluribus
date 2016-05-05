import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import colors from 'material-ui/styles/colors';

// const colors = styles.Colors;

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Person from 'material-ui/svg-icons/social/person';
import UpVote from 'material-ui/svg-icons/social/plus-one';
import EndQuotes from 'material-ui/svg-icons/editor/format-quote';
import Pin from 'material-ui/svg-icons/maps/pin-drop';

class Message extends React.Component {
  constructor(props) {
    super();
    this.state = props;
    console.log(props);
    console.log(this.state);
  }
  _showLoc() {
    console.log('show location');
    console.log(this);
    this.setState({message: "you FOUND me"});
  }
  _showFace() {
    console.log('show face');
    console.log(this);
    this.setState({message: "you SEE me"});
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <MenuItem
        leftIcon={<Person onClick={this._showFace.bind(this)} />}
        primaryText={ this.state.message }
        rightIcon={<Pin onClick={this._showLoc.bind(this)} />}
      />
    </MuiThemeProvider> 
  }
}

export default class MessageContainer extends React.Component {
  constructor() {
    super();
    this._loadPlurbs();
    this.state = {};
  }
  _loadPlurbs() {
    console.log("ACTION: 'LOAD_PLURBS'");
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div style={{height: '400px'}}>
        <Menu>
          { this.props.messages.map( (message) => <Paper style={{width:'98%'}}><Message message={message} /></Paper> ) }
        </Menu>
      </div>
    </MuiThemeProvider> 
  }
}

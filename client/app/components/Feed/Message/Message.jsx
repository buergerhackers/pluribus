import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import colors from 'material-ui/styles/colors';

// const colors = styles.Colors;

import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Person from 'material-ui/svg-icons/social/person';
import UpVote from 'material-ui/svg-icons/social/plus-one';

class Message extends React.Component {
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <MenuItem
        leftIcon={<Avatar icon={<Person />} />}
        rightIcon={<UpVote />}
      >
        { this.props.message }
      </MenuItem>
    </MuiThemeProvider> 
  }
}

class MessageContainer extends React.Component {
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper>
        <Menu>
          { this.props.messages.map( (message) => <Message message={message} /> ) }
        </Menu>
      </Paper>
    </MuiThemeProvider> 
  }
}

export default MessageContainer;

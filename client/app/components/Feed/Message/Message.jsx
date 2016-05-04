import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import colors from 'material-ui/styles/colors';

// const colors = styles.Colors;

import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import ListItem from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

class Message extends React.Component {
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <ListItem
        leftAvatar={
          <Avatar
            color="orange"
            backgroundColor="purple"
          >
            Plurb
          </Avatar>
        }
      >
        { this.props.message }
      </ListItem>
    </MuiThemeProvider> 
  }
}

class MessageContainer extends React.Component {
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper>
        <List>
          <Subheader>Messages</Subheader>
          { this.props.messages.map( (message) => <Message message={message} /> ) }
        </List>
      </Paper>
    </MuiThemeProvider> 
  }
}

export default MessageContainer;

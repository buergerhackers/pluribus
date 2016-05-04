import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import List from 'material-ui/List';
import ListItem from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class Message extends React.Component {
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <ListItem primaryText={ this.props.message }>
        { this.props.message }
      </ListItem>
    </MuiThemeProvider> 
  }
};

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
};

export default MessageContainer;

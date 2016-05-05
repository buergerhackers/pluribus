import React from 'react';
import Filter from './Filter/Filter.jsx';
import Maker from './Maker/Maker.jsx';
import MessageContainer from './Message/Message.jsx';
import Search from './Search/Search.jsx';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Searchbar from 'material-ui/AppBar';
import EyeGlass from 'material-ui/svg-icons/action/search';

// dummy store to be replaced with Redux Store
let FeedStore = {getState: "Feed"};

class Feed extends React.Component {
  constructor() {
    super();
    this._sendPlurb = this._sendPlurb;
    this.state = FeedStore;
  }
  sendPlurb() {
    console.log('sending plurb');
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper style={{float: 'right'}}>
        <Filter />
        <Searchbar 
          iconElementLeft={<EyeGlass color="white" />}
          children={<Search />}
        >
        </Searchbar>
        <MessageContainer messages={ this.props.messages } />
        <Maker />
      </Paper>
    </MuiThemeProvider>
  }
}

export default Feed;

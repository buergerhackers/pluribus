import React from 'react';
import Filter from './Filter/Filter.jsx';
import Maker from './Maker/Maker.jsx';
import MessageContainer from './Message/Message.jsx';
import Search from './Search/Search.jsx';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// dummy store to be replaced with Redux Store
let PlurbStore = {getState: "Plurb"};

class Plurb extends React.Component {
  constructor() {
    super();
    this._sendPlurb = this._sendPlurb;
    this.state = PlurbStore;
  }
  _sendPlurb() {
    console.log('sending plurb');
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <RaisedButton label="Plurb" primary={true} onClick={ this._sendPlurb } />
    </MuiThemeProvider>  
  }
}

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
    return <section style={{float: 'right'}}>
      <Filter />
      <Search />
      <MessageContainer messages={ this.props.messages } />
      <Plurb />
      <Maker />
    </section>
  }
}

export default Feed;

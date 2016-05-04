import React from 'react';
import Filter from './Filter/Filter.jsx';
import Maker from './Maker/Maker.jsx';
import MessageContainer from './Message/Message.jsx';
import Search from './Search/Search.jsx';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

let Plurb = React.createClass({
  getInitialState() {
    return { plurb: 'empty' };
  },
  sendPlurb() {
    console.log('sending plurb');
  },
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <RaisedButton label="Plurb" primary={true} onClick={ this.sendPlurb } />
    </MuiThemeProvider>  
  }
});

class Feed extends React.Component {
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

import React from 'react';
import Filter from './Filter/Filter.jsx';
import Maker from './Maker/Maker.jsx';
import MessageContainer from './Message/MessageContainer.jsx';
import Search from './Search/Search.jsx';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Searchbar from 'material-ui/AppBar';
import EyeGlass from 'material-ui/svg-icons/action/search';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  sendPlurb() {
    console.log('sending plurb');
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper style={{float:'right', width:'50%', height:'600px', zIndex:'1'}}>
        <Filter />
        <Searchbar 
          iconElementLeft={<EyeGlass color="white" />}
          children={<Search />}
        >
        </Searchbar>
        <MessageContainer />
        <Maker />
      </Paper>
    </MuiThemeProvider>
  }
}

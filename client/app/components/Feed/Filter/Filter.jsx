import React from 'react';
import store from '../../../STORE.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Tabs, Tab } from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';

import Public from 'material-ui/svg-icons/social/public';
import Private from 'material-ui/svg-icons/social/people';

// dummy store to be replaced with Redux Store
let FilterStore = {getState: 0};

export default class Filter extends React.Component {
  constructor() {
    super();
    this.state = FilterStore;
  }
  _handleSwitch(type) {
    this.setState({ getState: type });
    
    console.log('STATE:');
    console.log(this.state);
    console.log("ACTION: 'SET_FILTER'");
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Tabs 
        value={this.state.getState}
      >
        <Tab value={0} icon={<Public />} onClick={ () => this._handleSwitch(0) } />
        <Tab value={1} icon={<Private />} onClick={ () => this._handleSwitch(1) } />
      </Tabs>
    </MuiThemeProvider>
  }
}

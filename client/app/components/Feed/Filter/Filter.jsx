import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Tabs, Tab } from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';

import SvgIcon from 'material-ui/SvgIcon';
import Earth from 'material-ui/svg-icons/maps/terrain';
import Pin from 'material-ui/svg-icons/maps/place';
import Personal from 'material-ui/svg-icons/maps/person-pin';

// dummy store to be replaced with Redux Store
let FilterStore = {getState: 0};

class Filter extends React.Component {
  constructor() {
    super();
    this._handleSwitch = this._handleSwitch;
    this.state = FilterStore;
  }
  _handleSwitch(type) {
    this.setState({ filter: type });
    console.log('STATE:');
    console.log(this.state);
  }
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Tabs 
        value={this.state.filter}
        onChange={this._handleSwitch}
      >
        <Tab value={0} icon={<Earth />} />
        <Tab value={1} icon={<Pin />} />
        <Tab value={2} icon={<Personal />} />
      </Tabs>
    </MuiThemeProvider>
  }
}

export default Filter;

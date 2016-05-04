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

let Filter = React.createClass({
  getInitialState() {
    console.log('initial State:');
    console.log(this.state);
    return { filter: 0 };
  },
  handleSwitch(type) {
    this.setState({ filter: type });
    console.log('STATE:');
    console.log(this.state);
  },
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Tabs 
        value={this.state.filter}
        onChange={this.handleSwitch}
      >
        <Tab value={0} icon={<Earth />} />
        <Tab value={1} icon={<Pin />} />
        <Tab value={2} icon={<Personal />} />
      </Tabs>
    </MuiThemeProvider>
  }
});

export default Filter;

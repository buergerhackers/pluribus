import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import List from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import SvgIcon from 'material-ui/SvgIcon';
import Earth from 'material-ui/svg-icons/maps/terrain';
import Pin from 'material-ui/svg-icons/maps/place';
import Personal from 'material-ui/svg-icons/maps/person-pin';

let FilterMenu = React.createClass({
  getInitialState() {
    console.log('initial State:');
    console.log(this.state);
    return { filter: "Earth" };
    // this.setState();
  },
  handleSwitch() {
    this.setState({ filter: this.state.filter + 'isFine' });
    console.log('STATE:');
    console.log(this.state);
  },
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <List>
        <Subheader>Filters</Subheader>
        <SvgIcon onMouseEnter={ this.handleSwitch }>
          <Earth />
        </SvgIcon>
        <SvgIcon onMouseEnter={ this.handleSwitch }>
          <Pin />
        </SvgIcon>
        <SvgIcon onMouseEnter={ this.handleSwitch }>
          <Personal />
        </SvgIcon>
      </List>
    </MuiThemeProvider>
  }
});

let Filter = React.createClass({
  getInitialState() {
    return { filter: this.props.filter };
  },
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <SvgIcon onMouseEnter={ this.handleSwitch }>
        { this.props.filter }
      </SvgIcon>
    </MuiThemeProvider>
  }
});

export default FilterMenu;

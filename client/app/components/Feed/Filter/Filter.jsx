import React from 'react';
import store from '../../../STORE.jsx';
import { connect } from 'react-redux';
import { loadPlurbs, getPlurbs } from '../../../ACTIONS.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Tabs, Tab } from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';

import Public from 'material-ui/svg-icons/social/public';
import Private from 'material-ui/svg-icons/social/people';

export default class Filter extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  _handleSwitch(type) {
    // update store with fetching status
    this.props.dispatch(loadPlurbs());
    // go get plurbs
    this.props.dispatch(getPlurbs(type));
  }
  
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Tabs 
        value={ this.props.filter }
      >
        <Tab value={"PUBLIC"} icon={<Public />} onClick={ () => this._handleSwitch("PUBLIC") } />
        <Tab value={"PRIVATE"} icon={<Private />} onClick={ () => this._handleSwitch("PRIVATE") } />
      </Tabs>
    </MuiThemeProvider>
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    filter: store.pluribusReducer.filter,
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(Filter);

import React from 'react';
import { connect } from 'react-redux';
import { loadPlurbs, getPlurbs, setFilter } from '../../../ACTIONS.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Tabs, Tab } from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';

import Public from 'material-ui/svg-icons/social/public';
import Private from 'material-ui/svg-icons/social/people';

class Filter extends React.Component {
  
  constructor(props) {
    super(props);
    this._handleSwitch = this._handleSwitch.bind(this);
  }
  
  _handleSwitch() {
    // this.props.dispatch(loadPlurbs());
    let filt = this.props.filter === 'PUBLIC' ? 'PRIVATE' : 'PUBLIC';
    this.props.dispatch(setFilter(filt));
  }
  
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Tabs 
        value={ this.props.filter }
      >
        <Tab value="PUBLIC" icon={<Public />} onClick={ this._handleSwitch } />
        <Tab value="PRIVATE" icon={<Private />} onClick={ this._handleSwitch } />
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

import React from 'react';
import { connect } from 'react-redux';
import { getPlurbs, setFilter } from '../../../ACTIONS.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Tabs, Tab } from 'material-ui/Tabs';
import Subheader from 'material-ui/Subheader';

import Topics from 'material-ui/svg-icons/social/public';
import Friends from 'material-ui/svg-icons/social/people';

class Filter extends React.Component {
  
  constructor(props) {
    super(props);
    this._handleSwitch = this._handleSwitch.bind(this);
  }
  
  _handleSwitch() {
    // get plurbs according to filter state
    let filt;
    if (this.props.filter === 'TOPICS') {
      // get plurbs of user's friends
      filt = 'FRIENDS';
    } else if (this.props.filter === 'FRIENDS') {
      // get all plurbs
      filt = 'TOPICS';
    }
    this.props.dispatch(getPlurbs({mapBounds: this.props.mapBounds, filter: filt}))
    this.props.dispatch(setFilter(filt));
  }
  
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Tabs 
        value={ this.props.filter }
        inkBarStyle={{ backgroundColor:'#F65151' }}

      >
        <Tab value="TOPICS" icon={<Topics />} onClick={ this._handleSwitch } />
        <Tab value="FRIENDS" icon={<Friends />} onClick={ this._handleSwitch } />
      </Tabs>
    </MuiThemeProvider>
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    filter: store.pluribusReducer.filter,
    plurbs: store.pluribusReducer.plurbs,
    mapBounds: store.pluribusReducer.mapBounds,
    currentTopicId: store.pluribusReducer.currentTopicId,
    currentUserId: store.pluribusReducer.currentUserId
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(Filter);

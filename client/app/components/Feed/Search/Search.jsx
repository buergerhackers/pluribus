import React from 'react';
import { connect } from 'react-redux';
import { loadPlurbs, getPlurbs } from '../../../ACTIONS.jsx';
import { getTopics, selectTopic } from './SEARCH_ACTIONS.jsx';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getTopics());
    this._selectTopic = this._selectTopic.bind(this);
  }

  _selectTopic(selected) {
    // Set store topic
    let mapBounds = this.props.mapBounds;
    selectTopic(selected, mapBounds);
  }
  
  _textSearch(text) {
    
  }
  
  render() {
    return (
      <AutoComplete
        fullWidth={true}
        hintText="Search topics"
        animated={true}
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
        dataSource={ this.props.allTopics.map((t) => t.name) }
        onNewRequest={ this._selectTopic }
      />
    );
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    allTopics: store.pluribusReducer.allTopics,
    myTopics: store.pluribusReducer.myTopics,
    mapBounds: store.pluribusReducer.mapBounds,
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(Search);

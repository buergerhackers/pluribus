import React from 'react';
import store from '../../../STORE.jsx';
import { connect } from 'react-redux';
import { loadPlurbs, getPlurbs } from '../../../ACTIONS.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(getPlurbs());
  }
  
  filter(input) {
    // optional custom filter function to wrap
    // all below functions in
  }
  
  _selectTopic(selected) {
    // getPlurbs(selectedTopic)
  }
  
  _textSearch(text) {
    this.props.dispatch(getPlurbs(text));
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AutoComplete
          fullWidth={true}
          hintText="Search topics"
          animated={true}
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          dataSource={ this.props.plurbs.map((p) => p.text) }
          onNewRequst={ this._textSearch }
        />
      </MuiThemeProvider>  
    );
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    plurbs: store.pluribusReducer.plurbs
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(Search);

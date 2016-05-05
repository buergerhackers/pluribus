import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// dummy store to be replaced with Redux Store
let SearchStore = {getState: "Search topics", currentTopic: "", allTopics: ["burn", "bernie", "beluga", "bryan bierce", "blues brothers"]};

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: SearchStore.allTopics,
    }
  }
  filter(input) {
    console.log(this);
    console.log('filtering input ...');
    return this.state.dataSource.filter(this.filter(input));
  }
  _selectTopic(selected) {
    console.log('SELECTED TOPIC -> backend API call');
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AutoComplete
          hintText="Search topics"
          animated={true}
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          dataSource={ this.state.dataSource }
          onUpdateInput={ this._refineMenu }
          onNewRequest={ this._selectTopic }
        />
      </MuiThemeProvider>  
    );
  }
}

export default Search;

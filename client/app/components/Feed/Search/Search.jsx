import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';

// dummy store to be replaced with Redux Store
let SearchStore = {getState: ""};

class Search extends React.Component {
  constructor() {
    super();
    this.state = SearchStore;
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AutoComplete
          animated={true}
          anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
          dataSource={["apple, banana, strawberry"]}
        />
      </MuiThemeProvider>
    );
  }
}

export default Search;

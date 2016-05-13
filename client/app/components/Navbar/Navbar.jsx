import React from 'react';
import { connect } from 'react-redux';

// material-ui components
import Navbar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { Popover, PopoverAnimationVertical } from 'material-ui/Popover';
import { List, ListItem } from 'material-ui/List';
import ClosedMenuIcon from 'material-ui/svg-icons/navigation/chevron-right';
import OpenMenuIcon from 'material-ui/svg-icons/navigation/expand-more';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// MATERIAL COMPONENT EX:
// Must wrap single material component in context tags
class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    // each render, check URL for authentication
    this._verifyUser();
  }
  
  _verifyUser() {
    let auth = window.location.search.match(/true/);
    
    // naive check for user authentication
    if (auth) {
      console.log('AUTHENTICATE: true');
    }
  }
  
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Navbar 
      title="Pluribus"
      iconElementLeft={<IconButton><OpenMenuIcon color="white" /></IconButton>}
    >
      <Popover 
        open={true}
        anchorEl={this.state.anchorEl}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        animation={PopoverAnimationVertical}
        useLayerForClickAway={false}
      >
        <List>
          <ListItem
            primaryText="Sign Out"
          />
          <ListItem
            primaryText="Sign In"
          />
        </List>
      </Popover>
    </Navbar>
    </MuiThemeProvider>
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    userId: store.pluribusReducer.userId
  };
};

// hook user session (googId) from store to navbar
export default connect(mapStateToProps)(NavBar);

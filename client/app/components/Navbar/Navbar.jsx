import React from 'react';
import { connect } from 'react-redux';
import Navbar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ClosedMenuIcon from 'material-ui/svg-icons/navigation/chevron-right';
import OpenMenuIcon from 'material-ui/svg-icons/navigation/expand-more';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// MATERIAL COMPONENT EX:
// Must wrap single material component in context tags
class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this._userSession = this._userSession.bind(this);
  }
  
  _userSession() {
    console.log(this.props);
    // naive check for user verification
    // return this.props.googId ? true: false;
    return true;
  }
  
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Navbar 
        title="Pluribus"
        iconElementLeft={
          <IconMenu
            iconButtonElement={<IconButton><OpenMenuIcon color="white" /></IconButton>}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem primaryText="Sign Out" />
            <MenuItem primaryText="Sign In" />
          </IconMenu>
        }
      />
    </MuiThemeProvider>
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    authenticated: store.pluribusReducer.authenticated
  };
};

// hook user session (googId) from store to navbar
export default connect(mapStateToProps)(NavBar);

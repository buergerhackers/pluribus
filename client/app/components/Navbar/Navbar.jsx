import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../ACTIONS.jsx';

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
    this._handleTouchTap = this._handleTouchTap.bind(this);
  }
  
  _verifyUser() {
    let auth = window.location.search.match(/true/);
    
    // naive check for user authentication
    if (auth) {
      this.props.dispatch(authenticate(true));
    }
  }
  
  _handleTouchTap(event) {
    // no page refresh, please
    event.preventDefault();
    
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }
  
  _handleClose() {
    this.setState({
      open: false
    });
  }
  
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Navbar 
      title="Pluribus"
      iconElementLeft={<IconButton><OpenMenuIcon color="white" /></IconButton>}
    >
      <Popover 
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        animation={PopoverAnimationVertical}
        useLayerForClickAway={false}
      >
        <List>
        {
          if (this.props.authenticated) {
            <ListItem primaryText="Sign Out" onClick{(e) => {window.location.pathname = "/logout"}} />)
          } else {
            <ListItem primaryText="Sign In" onClick{(e) => {window.location.pathname = "/connect/google"}} />)
          }
        }
        </List>
      </Popover>
    </Navbar>
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

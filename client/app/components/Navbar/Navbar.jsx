import React from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../ACTIONS.jsx';

// material-ui components
import Navbar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import Person from 'material-ui/svg-icons/social/person';
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
    this._handleTouchTap = this._handleTouchTap.bind(this);
  }
  
  componentWillMount() {
    // each render, check URL for authentication
    this._verifyUser();
  }
  
  _verifyUser() {
    let auth = window.location.search.match(/true/);
    
    // naive check for user authentication
    if (auth) {
      this.props.dispatch(authenticate(true));
    }
  }
  
  _handleTouchTap(event) {
    if (this.props.authenticated) {
      window.location.pathname = "/logout";
      this.props.dispatch(authenticate(false));
    } else {
      window.location.pathname = "/connect/google";
    }
  }
  
  render() {
    let activeElement;
    
    // check authentication for render
    if (this.props.authenticated) {
      activeElement = <IconButton style={{backgroundColor:"rgb(246, 81, 81)", borderRadius:"30px"}} onClick={this._handleTouchTap} tooltip={"sign out"}><Person /></IconButton> 
    } else {
      activeElement = <IconButton style={{backgroundColor:"rgb(246, 81, 81)", borderRadius:"30px"}} onClick={this._handleTouchTap} tooltip={"sign in"}><PersonOutline /></IconButton> 
    }
    
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Navbar 
        title="Pluribus"
        iconElementLeft={activeElement}
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

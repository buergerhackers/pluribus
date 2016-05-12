import React from 'react';
import { authenticate } from '../../ACTIONS.jsx';
import { connect } from 'react-redux';
import Navbar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
// import IconMenu from 'material-ui/IconMenu'; NOT WORKING
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
    this._verifyUser = this._verifyUser.bind(this);
    this._handleTouchTap = this._handleTouchTap.bind(this);
  }
  
  _verifyUser() {
    console.log(this.props);
    // get '/' 
    // this.props.dispatch(authenticate(valueReturnedFromGetROUTE));
   
  }
  
  _handleTouchTap(event) {
    // no page refresh
    event.preventDefault();
    
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }
  
  _handleRequestClose() {
    this.setState({
      open: false
    });
  }
  
  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Navbar 
        title="Pluribus"
        iconElementLeft={<IconButton onClick={this._handleTouchTap}><OpenMenuIcon color="white" /></IconButton>}
      >
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this._handlRequestClose}
          animation={PopoverAnimationVertical}
          useLayerForClickAway={false}
        >
          <List>
            <ListItem primaryText="Sign Out"
                      onClick={(e) => {console.log('sign out',e)}}
            />
            <ListItem primaryText="Sign In"
                      onClick={(e) => {console.log('send to google',e)}}
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
    authenticated: store.pluribusReducer.authenticated
  };
};

// hook user session (googId) from store to navbar
export default connect(mapStateToProps)(NavBar);

import React from 'react';
import store from '../../../STORE.jsx';

import MenuItem from 'material-ui/MenuItem';
import Person from 'material-ui/svg-icons/social/person';
import Pin from 'material-ui/svg-icons/maps/pin-drop';

export default class Message extends React.Component {
  constructor() {
    super();
  }
  _showLoc() {
    this.setState({location: "you FOUND me"});
  }
  _showFace() {
    this.setState({photo: "you SEE me"});
  }
  render() {
    return (
      <MenuItem
        leftIcon={<Person onClick={this._showFace.bind(this)} />}
        primaryText={ this.props.message }
        rightIcon={<Pin onClick={this._showLoc.bind(this)} />}
        style={{width: '96%'}}
      />
    )
  }
}

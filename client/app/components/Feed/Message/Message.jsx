import React from 'react';

// material-ui components
import MenuItem from 'material-ui/MenuItem';
import Person from 'material-ui/svg-icons/social/person';
import Pin from 'material-ui/svg-icons/maps/pin-drop';

// map utils
import { rePosition } from '../../Map/map_utils.jsx';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this._reLoc = this._reLoc.bind(this);
  }
  _reLoc() {
    // "snap" center of map to plurb location
    rePosition(this.props.plurb);
  }
  render() {
    return (
      <MenuItem
        leftIcon={<Person />}
        primaryText={ this.props.plurb.text }
        rightIcon={<Pin onClick={ this._reLoc } />}
        style={{width: '96%'}}
      />
    )
  }
}

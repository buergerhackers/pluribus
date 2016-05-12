import React from 'react';

// material-ui components
import MenuItem from 'material-ui/MenuItem';
import Person from 'material-ui/svg-icons/social/person';
import Counter from 'material-ui/svg-icons/image/filter-none';
import Follow from 'material-ui/svg-icons/content/add-circle';
import UnFollow from 'material-ui/svg-icons/content/remove-circle';

// map 
import { map } from '../../Map/Map.jsx';
import { rePosition } from '../../Map/map_utils.jsx';

// utils
import { timeStamp } from './message_utils.jsx';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this._reLoc = this._reLoc.bind(this);
    this._followUser = this._followUser.bind(this);
    this._timeStamp = this._timeStamp.bind(this);
    this._incrementLikes = this._incrementLikes.bind(this);
  }
  componentDidMount() {
    // decorate plurb with likes property
    this.state = {likes:0};
  }
  _reLoc() {
    // navigate map-center to selected plurb
    rePosition(this.props.plurb);
  }
  _followUser() {
    // flip profile pic to 'add-circle' or 'remove-circle'
    // on tap, toggle gentle highlight on plurbs with googId
    console.log({photo: "googId profile pic"});
  }
  _timeStamp() {
    return timeStamp(this.props.plurb);
  }
  _incrementLikes() {
    console.log('i need likes:');
  }
  render() {
    return (
      <MenuItem
        leftIcon={<Person onClick={ this._followUser } />}
        primaryText={ this.props.plurb.text }
        rightIcon={<Counter onClick={ this._reLoc }>{ 3 }</Counter>}
      />
    )
  }
}

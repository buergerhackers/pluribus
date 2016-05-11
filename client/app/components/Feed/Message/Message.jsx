import React from 'react';

import MenuItem from 'material-ui/MenuItem';
import Person from 'material-ui/svg-icons/social/person';
import Counter from 'material-ui/svg-icons/image/filter-none';
import Follow from 'material-ui/svg-icons/content/add-circle';
import UnFollow from 'material-ui/svg-icons/content/remove-circle';

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
    console.log({lat: this.props.plurb.lat, long: this.props.plurb.long});
  }
  _followUser() {
    // flip profile pic to 'add-circle' or 'remove-circle'
    // on tap, toggle gentle highlight on plurbs with googId
    console.log({photo: "googId profile pic"});
  }
  _timeStamp() {
    console.log(this.props.plurb);
    return timeStamp(this.props.plurb);
  }
  _incrementLikes() {
    console.log('i want likes:',likes);
    this.setState({likes:++likes});
  }
  render() {
    return (
      <MenuItem
        leftIcon={<Person onClick={ this._followUser } />}
        primaryText={ this.props.plurb.text }
        onTouchTap={ this._reLoc }
        rightIcon={<Counter onClick={this._incrementLikes}>{ this.state }</Counter>}
      />
    )
  }
}

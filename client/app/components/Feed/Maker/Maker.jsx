import React from 'react';
import { store } from '../../../STORE.jsx';
import { createPlurb } from '../../../ACTIONS.jsx';
import TextField from 'material-ui/TextField';
import ActionButton from 'material-ui/FloatingActionButton';
import Plus from 'material-ui/svg-icons/content/add';

export default class Maker extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      location: '',
    };
    this._getLocation();
    this._updateMessage = this._updateMessage.bind(this);
    this._sendPlurb = this._sendPlurb.bind(this);
    this._getLocation = this._getLocation.bind(this);
  }
  _getLocation() {
    let context = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      context.setState({ location: pos });
    }, function () {
      console.log("Something Failed in grabbing geo coordinates");
    });
  }

  _sendPlurb() {
    // console.log(
    store.dispatch(createPlurb(
    {
      location: this.state.location,
      message: this.state.message,
    }
    ));

    // );

    this.setState(
      { message: '' }
    );
  }

  _updateMessage(e) {
    this.setState(
      { message: e.target.value }
    );
  }

  render() {
    return (
      <div>
        <ActionButton
          primary={true}
          children={<Plus />} 
          onClick={ this._sendPlurb }
        />
        <TextField
          hintText="Have something to contribute?"
          onChange= { this._updateMessage }
          value= { this.state.message }
        /><br/>
      </div>
    );
  }
}
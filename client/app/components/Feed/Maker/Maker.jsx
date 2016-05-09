import React from 'react';
import { store } from '../../../STORE.jsx';
import { connect } from 'react-redux';
import { createPlurb, loadPlurbs } from '../../../ACTIONS.jsx';
import TextField from 'material-ui/TextField';
import ActionButton from 'material-ui/FloatingActionButton';
import Plus from 'material-ui/svg-icons/content/add';

export default class Maker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      location: '',
    };
    // get location on first creation
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
    this.props.dispatch(createPlurb(
      {
        text: this.state.text,
        location: this.state.location
      }
    ));
    
    // clear the text field
    this.setState(
      { text: '' }
    );
  }

  _updateMessage(e) {
    this.setState(
      { text: e.target.value }
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
          onChange={ this._updateMessage }
          onEnterKeyDown={ this._sendPlurb }
          value={ this.state.text }
        /><br/>
      </div>
    );
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    plurbs: store.pluribusReducer.currentPlurb,
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(Maker);

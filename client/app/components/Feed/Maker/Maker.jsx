import React from 'react';
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
      lat: 0,
      long: 0,

    };
    // get location on first creation
    this._getLocation();
    this._updateMessage = this._updateMessage.bind(this);
    this._sendPlurb = this._sendPlurb.bind(this);
    this._checkPlurb = this._checkPlurb.bind(this);
    this._getLocation = this._getLocation.bind(this);
  }
  _getLocation() {
    let context = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      context.setState({ lat: position.coords.latitude, long: position.coords.longitude });
    }, function () {
      console.log("Something Failed in grabbing geo coordinates");
    });
  }

  _checkPlurb(e) {
    if(e.key === 'Enter') {
      this._sendPlurb(e)  
    }
  }

  _sendPlurb(e) {
    var context = this;
    this.props.dispatch(createPlurb(
      {
        text: this.state.text,
        lat: this.state.lat,
        long: this.state.long,
        topicId: this.props.currentTopicId,
      }, this.props.mapBounds
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
          onKeyDown={ this._checkPlurb }
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
    currentTopicId: store.pluribusReducer.currentTopicId,
    mapBounds: store.pluribusReducer.mapBounds,
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(Maker);

import React from 'react';
import store from '../../../STORE.jsx';

import Message from './Message.jsx';
import Menu from 'material-ui/Menu';
import { loadPlurbs } from '../../../ACTIONS.jsx'

export default class MessageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
    this._loadPlurbs = this._loadPlurbs.bind(this);
    this._loadPlurbs();
  }

  _loadPlurbs() {
    let context = this;
    console.log("ACTION: 'LOAD_PLURBS'");
    loadPlurbs(function(plurbs) {
      context.setState({
        messages: JSON.parse(plurbs)
      })
    });

  }

  render() {
    return (
      <div style={{height: '400px'}}>
        <Menu>
          { this.state.messages.map((message) => {
            return <Message message={message.text} />
          }) }
        </Menu>
      </div>
    );
  }
}

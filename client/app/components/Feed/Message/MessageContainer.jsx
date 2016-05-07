import React from 'react';
import store from '../../../STORE.jsx';

import Message from './Message.jsx';
import Menu from 'material-ui/Menu';

export default class MessageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ["Trump trumps life", "Bernie Sanders > Super PACs", "Clinton","Where's Rubio?","Tom Cruise should run"]
    };
    this._loadPlurbs();
  }

  _loadPlurbs() {
    console.log("ACTION: 'LOAD_PLURBS'");

  }

  render() {
    return (
      <div style={{height: '400px'}}>
        <Menu>
          { this.state.messages.map((message) => {
            return <Message message={message} />
          }) }
        </Menu>
      </div>
    );
  }
}

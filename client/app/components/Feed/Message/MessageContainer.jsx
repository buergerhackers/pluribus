import React from 'react';

import Message from './Message.jsx';
import Menu from 'material-ui/Menu';
import { connect } from 'react-redux';
import { loadPlurbs } from '../../../ACTIONS.jsx';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);
    this._loadPlurbs();
  }

  _loadPlurbs() {
    fetch('/api/plurb', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((plurbs) => plurbs.text())
    .then((plurbs) => {
      this.props.dispatch(loadPlurbs(plurbs));
      this.render();
    });
  }

  render() {
    return (
      <div style={{ height: '400px' }}>
        <Menu>
          { this.props.plurbs.map((message) => {
            return <Message message={ message.text } />
          }) }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    plurbs: store.pluribusReducer.plurbs,
  };
};

export default connect(mapStateToProps)(MessageContainer);


import React from 'react';
import Message from './Message.jsx';
import Menu from 'material-ui/Menu';
import { connect } from 'react-redux';
import { loadPlurbs, getPlurbs } from '../../../ACTIONS.jsx';

class MessageContainer extends React.Component {
  // pass relevant piece of store to component
  constructor(props) {
    super(props);
  }

  _loadPlurbs() {
    this.props.dispatch(getPlurbs());
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

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    plurbs: store.pluribusReducer.plurbs,
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(MessageContainer);

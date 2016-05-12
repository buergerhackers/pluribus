import React from 'react';
import Message from './Message.jsx';
import Menu from 'material-ui/Menu';
import { connect } from 'react-redux';
import { loadPlurbs, getPlurbs } from '../../../ACTIONS.jsx';

class MessageContainer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ height: '400px', overflow:'scroll' }}>
        <Menu>
          { this.props.plurbs.map((plurb) => {
            return <Message plurb={ plurb } />
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
    mapBounds: store.pluribusReducer.mapBounds,
    topicId: store.pluribusReducer.currentTopicId
  };
};

// connect the desired state to the relevant component
export default connect(mapStateToProps)(MessageContainer);

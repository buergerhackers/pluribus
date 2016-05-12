import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Message from './Message.jsx';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
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
      <div style={{ height: '400px', overflowY:'scroll' }}>
        <Menu>
        {
          this.props.plurbs.map((plurb, index) => {
              return <Paper><Message plurb={ plurb } /></Paper>
          }) 
        }
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

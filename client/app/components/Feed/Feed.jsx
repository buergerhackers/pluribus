import React from 'react';
import Filter from './Filter/Filter.jsx';
import Maker from './Maker/Maker.jsx';
import MessageContainer from './Message/Message.jsx';
import Search from './Search/Search.jsx';

class Feed extends React.Component {
  render() {
    return <div>
      <Filter />
      <Maker />
      <MessageContainer messages={ this.props.messages } />
      <Search />
    </div>
  }
}

export default Feed;

import React from 'react';
import FilterMenu from './Filter/Filter.jsx';
import Maker from './Maker/Maker.jsx';
import MessageContainer from './Message/Message.jsx';
import Search from './Search/Search.jsx';

class Feed extends React.Component {
  render() {
    return <div>
      <FilterMenu />
      <Maker />
      <MessageContainer message={ this.props.message } />
      <Search />
    </div>
  }
}

export default Feed;

import React from 'react';
import Filter from './Filter/Filter.jsx';
import Maker from './Maker/Maker.jsx';
import Message from './Message/Message.jsx';
import Search from './Search/Search.jsx';

const Feed = () => (
  <div>
    <Filter />
    <Maker />
    <Message />
    <Search />
  </div>
);

module.exports = Feed;

var React = require('react');
var Filter = require('./Filter/Filter.jsx');
var Maker = require('./Maker/Maker.jsx');
var Message = require('./Message/Message.jsx');
var Search = require('./Search/Search.jsx');

var Feed = React.createClass({
  render: function () {
    return (
      <div> Hello Super Sweet Feed
        <Filter />
        <Maker />
        <Message />
        <Search />
      </div>
    );
  },
});

module.exports = Feed;

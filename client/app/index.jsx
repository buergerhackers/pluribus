var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./components/Map/Map.jsx');
var Feed = require('./components/Feed/Feed.jsx');
var Navbar = require('./components/Navbar/Navbar.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div>Hello Freekin World!
        <Map />
        <Feed />
        <Navbar />
      </div>
    );
  },
});

ReactDOM.render(<Main />, document.getElementById('main'));

// defines relationship between components and views
var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./components/Map/Map.jsx');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <div> Hello World </div>
        <Map />
      </div>
    );
  },
});

ReactDOM.render(<Main />, document.getElementById('main'));

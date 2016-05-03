var React = require('react');
var ReactDOM = require('react-dom');
var Map = require('./components/Map/Map.jsx');
var Feed = require('./components/Feed/Feed.jsx');
var Navbar = require('./components/Navbar/Navbar.jsx');
var RaisedButton = require('material-ui/lib/raised-button');
var TextField = require ('material-ui/lib/text-field');
injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var Main = React.createClass({
  render: function () {
    return (
      <div>Hello Freekin World!
        <RaisedButton label="Default"/>
        <TextField
          hintText="Hint Text"
        /><br/>
          <br/>
        <Map />
        <Feed />
        <Navbar />
      </div>
    );
  },
});


ReactDOM.render(<Main />, document.getElementById('main'));

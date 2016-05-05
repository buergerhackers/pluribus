import React from "react";
import ReactDOM from 'react-dom';

export default class GoogleMap extends React.Component {

  componentDidMount(rootNode) {
    var mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom,
    },
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map });
    this.setState({ map: map });
  }

  mapCenterLatLng() {
    var props = this.props;

    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  }

  render() {
    return (
      <div id='map' className='map-gic' style={{ "width": '70%', "height":'500px', "opacity":'.90' }}></div>
    );
  }
}

// With ES6, getDefaultProps no longer works... had to define out of class constructor
GoogleMap.defaultProps = {
  initialZoom: 6,
  mapCenterLat: 53.5333,
  mapCenterLng: -113.4073126,
};

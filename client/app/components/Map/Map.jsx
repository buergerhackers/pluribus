import React from "react";
import store from '../../STORE.jsx';
import ReactDOM from 'react-dom';

export default class GoogleMap extends React.Component {

  componentDidMount(rootNode) {
    var mapOptions = {
      center: {lat: -34.397, lng: 150.644},
      zoom: 6,
    },

    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.setState({ map: map });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
      }, function() {
        handleLocationError(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false);
    }

    function handleLocationError(browserHasGeolocation) {
      if(browserHasGeolocation) {
        console.log("Looks like the browser blocked geolocation");
        map.setCenter({lat: 28.538, lng: -81.380});
      } else {
        console.log("This browser does NOT support geolocation");
        map.setCenter({lat: 41.428, lng: -75.650});
      }
    }

    //Event listener that sends new bounds on map move
    map.addListener('idle', () => {
      var newBounds = map.getBounds();
      console.log("Bounds: ", newBounds);

      //Create Action object
      var sendMapBounds = {
        type: "UPDATE_MAP_BOUNDS",
        bounds: newBounds,
      };
    });
  }

  mapCenterLatLng() {
    var props = this.props;

    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
  }

  render() {
    return (
      <div id='map' className='map-gic' style={{ width: '70%', height:'600px', "opacity":'.90' }}></div>
    );
  }
}

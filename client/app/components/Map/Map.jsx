import React from "react";
//import Marker from './Marker.jsx';
// import PlurbBlob from 'material-ui/maps/add-location';
import { connect } from 'react-redux';
import { updateMapBounds, getPlurbs } from '../../ACTIONS.jsx';

class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
  }
  
  // Once DOM node has rendered
  componentDidMount(rootNode) {
    let mapOptions = {
      center: {lat: 38.91, lng: -77.04},
      zoom: 6,
    },

    // initialize map center on Washington, DC
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    // re-center map on user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        let pos = {
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
        map.setCenter({lat: 38.91, lng: -77.04});
      } else {
        console.log("This browser does NOT support geolocation");
        map.setCenter({lat: 38.91, lng: -77.04});
      }
    }

    // When user pauses map movement, updates new bounds
    map.addListener('idle', () => {
      let newBounds = map.getBounds();
      
      // pull map bounds off view port
      let Lats = newBounds.H;
      let Lngs = newBounds.j;
            
      let query = {
        mapBounds: {
          maxLat: +Lats.j.toFixed(2),
          maxLng: +Lngs.H.toFixed(2),
          minLat: +Lats.H.toFixed(2),
          minLng: +Lngs.j.toFixed(2)   
        },
        topicId: this.props.currentTopicId
      }
      
      // update bounds on store, then re-fetch plurbs
      this.props.dispatch(updateMapBounds(query.mapBounds))
      this.props.dispatch(getPlurbs(query))
      
      // populate plurbs on map
      this.props.plurbs.map((plurb) => {
        new google.maps.Marker({
          position: {lat: plurb.lat, lng: plurb.long},
          map: map,
          icon: "http://map.karaliki.ru/css/markbig.png"
        });
      });
    });
  }

  render() {
    return (
      <div id='map' className='map-gic' style={{ width: '50%', height:'600px', "opacity":'.90' }}></div>
    );
  }
}

// map the portion of the state tree desired
const mapStateToProps = (store) => {
  return {
    mapBounds: store.pluribusReducer.mapBounds,
    plurbs: store.pluribusReducer.plurbs,
    currentTopicId: store.pluribusReducer.currentTopicId
  };
};

// export map;

// connect the desired state to the relevant component
export default connect(mapStateToProps)(GoogleMap);

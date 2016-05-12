import React from "react";
import initMap, { heatMap } from './map_utils.jsx';
import { connect } from 'react-redux';
import { updateMapBounds, getPlurbs } from '../../ACTIONS.jsx';
let map;

class GoogleMap extends React.Component {

  constructor(props) {
    super(props);
  }
  
  // Once DOM node has rendered
  componentDidMount(rootNode) {
    // initialize map
    map = initMap();

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
      
      // generate heatmap of plurbs
      heatMap(this.props.plurbs);
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

// connect the desired state to the relevant component
export default connect(mapStateToProps)(GoogleMap);

// expose map for feed access
export { map };

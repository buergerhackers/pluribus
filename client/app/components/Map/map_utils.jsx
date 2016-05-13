// a good place for helpers
let map, heatmap;

// DEFAULT SETTINGS // -------------------
let mapOptions = {
  center: {lat: 38.91, lng: -77.04},
  zoom: 6,
}

// pluribus color scheme
let gradient = [
  'rgba(0, 255, 255, 0)',
  'rgba(0, 188, 212, 1)',
  'rgba(18, 179, 201, 1)',
  'rgba(56, 163, 181, 1)',
  'rgba(75, 155, 171, 1)',
  'rgba(94, 146, 161, 1)',
  'rgba(113, 138, 151, 1)',
  'rgba(132, 130, 141, 1)',
  'rgba(151, 122, 131, 1)',
  'rgba(170, 113, 121, 1)',
  'rgba(189, 105, 111, 1)',
  'rgba(208, 97, 101, 1)',
  'rgba(227, 89, 91, 1)',
  'rgba(246, 81, 81, 1)'
];
//default opacity is .6 and radius is 20px

/*
  HEATMAP HELPERS
*/
export function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null: map);
}
// render variables
function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null: 20);
}
function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null: 0.2);
}
function getPoints(plurbs) {
  return plurbs.map((plurb) => {
    // set weight to plurb.likes to intensify blob accordingly
    return {location: new google.maps.LatLng(plurb.lat, plurb.long), weight: 1}
  });
}
/*
  MAP HELPERS
*/
export function rePosition() {
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

export function heatMap(plurbs) {
  // initialize heatmap layer on map
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(plurbs),
    dissipating: true,
    gradient,
    map
  });
  
  // middleware for heatmap
}

export default function initMap() {
  // initialize map w/ options
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // recenter map if possible
  rePosition();
  return map;
}

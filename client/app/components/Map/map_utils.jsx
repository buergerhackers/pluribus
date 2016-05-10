// a good place for helpers
let map, heatmap;

// DEFAULT SETTINGS // -------------------
let mapOptions = {
  center: {lat: 38.91, lng: -77.04},
  zoom: 6,
}

/*
  HEATMAP HELPERS
*/
export function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null: map);
}

function changeGradient() {
  let gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ];
  heatmap.set('gradient', heatmap.get('gradient') ? null: gradient);
}
function changeRadius() {
  heatmap.set('radius', heatmap.get('radius') ? null: 20);
}
function changeOpacity() {
  heatmap.set('opacity', heatmap.get('opacity') ? null: 0.2);
}
function getPoints(plurbs) {
  return plurbs.map((plurb) => {
    return new google.maps.LatLng(plurb.lat, plurb.long)
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
    map: map
  });
}

export default function initMap() {
  // initialize map w/ options
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // recenter map if possible
  rePosition();
  return map;
}

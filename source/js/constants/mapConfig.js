// import L from 'leaflet';
// These variables are local to this module and are used to help populate the exported 'configs' object
const mbAccessToken = 'pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiV2k5ZDRoZyJ9.suhdNFpeRtxt1OTpUVc2Tw';
const mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mbAccessToken;
const mapboxAttribution= 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Made with <a href="https://cartodb.com">CartoDB</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>';
const grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mapboxAttribution});
const satellite = L.tileLayer(mbUrl, {id: 'mapbox.satellite', attribution: mapboxAttribution});

// Module exposes a single Object
const configs = {
  leaflet: {
    center: [43.79, -70.22],
    zoom: 11,
    minZoom: 2,
    maxzoom: 21,
    zoomControl: false,
    layer : [grayscale]
  },
  cartodb: {
    user: 'bfriedly',
    key: '89e600a074e47c8de1c727a59ce2786b1b1118e3',
    layerOptions: {
      cartodb_logo: false,
      legends: false,
      https: true,
      attributionControl: true
    }
  },
  mapboxUrl: mbUrl,
  grayscale: grayscale,
  satellite: satellite
};

export default configs

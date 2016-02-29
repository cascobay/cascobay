// import L from 'leaflet';
// Variables local to this module
const mbAccessToken = 'pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiV2k5ZDRoZyJ9.suhdNFpeRtxt1OTpUVc2Tw';
const mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mbAccessToken;
const mapboxAttribution= 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>';
const grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mapboxAttribution});
const satellite = L.tileLayer(mbUrl, {id: 'mapbox.satellite', attribution: mapboxAttribution});

const cartodbTable = 'table_2005_2012_data_sheet1'
const cartodbUser = 'bfriedly'

https://{account}.cartodb.com/api/v2/sql?q={SQL statement}

// Module exposes a single Object
const configs = {
  leaflet: {
    center: [43.761921, -70.080350],
    zoom: 8,
    minZoom: 2,
    maxzoom: 21,
    layer : [grayscale]
    //TODO: maxbounds: []
  },
  cartodb: {
    endpoint: function(user, query) {
      return (
        'https://' +
        user +
        '.cartodb.com/api/v2/sql?format=GeoJSON&q=' +
        query
      )
    },
    user: 'bfriedly',
    key: '89e600a074e47c8de1c727a59ce2786b1b1118e3',
    table: cartodbTable,
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

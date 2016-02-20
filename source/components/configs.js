// Variables local to this module
const mbAccessToken = 'pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiV2k5ZDRoZyJ9.suhdNFpeRtxt1OTpUVc2Tw';
const mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mbAccessToken;

const mapboxAttribution= 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>';

const grayscale = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mapboxAttribution});
const satellite = L.tileLayer(mbUrl, {id: 'mapbox.satellite', attribution: mapboxAttribution});

// Module exposes a single Object
export default {
  leaflet: {
    center: [43.761921, -70.080350],
    zoom: 8,
    minZoom: 2,
    maxzoom: 21,
    layers: [grayscale, /*,sites*/] //TODO:  define & add sites layer in in layer.js
    //TODO: maxbounds: []
  },

  mapboxUrl: mbUrl,

  baselayers: {
    'Grayscale': grayscale,
    'Satellite': satellite
  }
};

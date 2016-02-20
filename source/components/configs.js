// Hidden implementation details
const mbAccessToken = 'pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiV2k5ZDRoZyJ9.suhdNFpeRtxt1OTpUVc2Tw';





// Exported Object
module.exports = {
  leaflet: {
    center: [43.761921, 70.080350],
    zoom: 12,
    minZoom: 14,
    maxzoom: 21,
    maxbounds: []
  },
  mapboxUrl: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mbAccessToken,
  mapboxOptions: {

  }

};

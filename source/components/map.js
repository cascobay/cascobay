import configs from './configs';

// Hidden implementation details
const grayscale = L.tileLayer(configs.mapboxUrl, configs.grayBasemap);
const satellite = L.tileLayer(configs.mapboxUrl, configs.satelliteBasemap);



// Exported Function
export default function() {
  // Initialize Map Here
  var map_object = L.map('Map', configs.leaflet)
    grayscale.addTo(map_object);

  //TODO:  add layer control


}

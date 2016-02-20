import configs from './configs';

// Exposes single function
export default function() {
  // Initialize Map Here
  var map_object = L.map('Map', configs.leaflet);

  L.control.layers(configs.baselayers).addTo(map_object);


  //TODO:  add layer control


}

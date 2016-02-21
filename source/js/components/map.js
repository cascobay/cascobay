import configs from './configs';
import { cdbLayer } from './layer';

// Exposes single function
export default function() {
  // Initialize Map Here
  var map_object = L.map('Map', configs.leaflet);

  //adds a layer controller, let's us choose from the baseLayers defined in configs
  L.control.layers(configs.baselayers).addTo(map_object);

  cdbLayer(map_object);

}

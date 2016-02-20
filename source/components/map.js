import configs from './configs';
import cdbLayerSource from './layer';

// Exposes single function
export default function() {
  // Initialize Map Here
  var map_object = L.map('Map', configs.leaflet);

  //adds a layer controller, let's us choose from the baseLayers defined in configs
  L.control.layers(configs.baselayers).addTo(map_object);

  cartodb.createLayer(map_object, cdbLayerSource)
    .addTo(map_object)
    .on('done', function(layer){
      // Do stuff after layer loads
      // Make sure it's on top of the baselayer
      layer.setZIndex(5);
     })
     .on('error', function(err){
       console.log('A CartoDB data error occurred: ' + err);
     });
}

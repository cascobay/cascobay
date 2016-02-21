import d3 from 'd3';
import configs from './configs';
import cdbLayerSource from './layerSource';
import featureClickCallback from '../utilities/featureClick';



export function cdbLayer(mapDomElement) {
    // Placeholder, will receieve feature data and be used to update D3 function
    let currentFeature, newFeature = null;


    cartodb.createLayer(mapDomElement, cdbLayerSource, configs.cartodb_options)
    .addTo(mapDomElement)
    .on('done', function(layer){
      console.log('CartoDB Layer Loaded.')
      const sites = layer.getSubLayer(0);
      // Do stuff after layer loads
      // Make sure it's on top of the baselayer
      layer.setZIndex(5)
      sites.setInteraction(true)
      // Execute action on interaction event
      sites.on('featureClick', featureClickCallback) //TODO: write featureClickCallback
     .on('error', function(err){
       console.log('A CartoDB data error occurred: ' + err);
     });
  });
}

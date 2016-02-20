import configs from './configs';
import cdbLayerSource from './layer';

// Exposes single function
export default function() {
  // Initialize Map Here
  var map_object = L.map('Map', configs.leaflet);

  //adds a layer controller, let's us choose from the baseLayers defined in configs
  L.control.layers(configs.baselayers).addTo(map_object);

  cartodb.createLayer(map_object, cdbLayerSource, configs.cartodb_options)
    .addTo(map_object)
    .on('done', function(layer){
      const sites = layer.getSubLayer(0);
      // Do stuff after layer loads
      // Make sure it's on top of the baselayer
      layer.setZIndex(5)
      // Enable interaction
      sites.setInteraction(true)
      // Execute action on interaction event
      sites.on('featureClick', function(event, latlng, pos, data) {
        console.log('Hey!  You clicked ' + data.cartodb_id + ' : ' + data.sitename)
        console.log(event, latlng, pos, data)
      })
     })
     .on('error', function(err){
       console.log('A CartoDB data error occurred: ' + err);
     });
}
//
//
// .on('done', function(layer) {
//
//   // change the query for the first layer
//   var subLayerOptions = {
//       sql: "SELECT * FROM example_cartodbjs_1 where pop_other::float > 1000000",
//       cartocss: "#example_cartodbjs_1{marker-fill: #109DCD; marker-width: 5; marker-line-color: white; marker-line-width: 0;}"
//         }
//
//   var sublayer = layer.getSubLayer(0);
//   sublayer.set(subLayerOptions);
//
//   sublayer.infowindow.set('template', $('#infowindow_template').html());
//
//   sublayer.on('featureClick', function(e, latlng, pos, data) {
//           alert("Hey! You clicked " + data.cartodb_id);
//     });
//   })

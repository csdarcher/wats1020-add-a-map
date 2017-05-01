/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

$(document).ready(function() { 
  
// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.
var map = L.map('map-container').setView([46.8523, -121.7603], 13);
  
// Create map
  
var drawLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  
// Add layer to map    
  
var terrainLayer = L.tileLayer('http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
}).addTo(map);
  

 // map layers selection box
  
var mapLayers = {
    "Terrain": terrainLayer,
    "Map View": drawLayer,
   
}

// controller for map selection
L.control.layers(mapLayers).addTo(map);
terrainLayer.addTo(map); 


  
//Points of Interest Markers//  

L.marker([46.8523, -121.76403]).addTo(map)
    .bindPopup('<b>Welcome to Mt. Rainier!</b><br>The mountain is 14,111 feet high.')
    .openPopup();
  
L.marker([46.837, -121.841]).addTo(map)
  .bindPopup("<b>Tokaloo Spire</b><br>This peak 7480 - 7520 ft high.")
  .openPopup();
  
L.marker([46.839, -121.722]).addTo(map)
  .bindPopup("<b>Cathedral Rocks</b><br>Highest point is 5600 ft")
  .openPopup();

         
});


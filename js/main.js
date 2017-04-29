/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/

// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

// bootstrap tabs

$('.tab-buttons a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

// Map of Mt. Rainier
$(document).ready(function() {
  
var myMap = L.map('map-container').setView([46.852, -121.760], 13);    
  
//Add Tile Layers for Open Streets, Satellite, and Map View  
  
         
});

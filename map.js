document.addEventListener('DOMContentLoaded', function() {

    
//     const map = L.map('map').setView([40.7128, -74.0060], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19, // Max zoom level for these tiles
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map); // Add the tile layer to our map instance

// // Add a marker for Times Square
// const timesSquareCoords = [40.7580, -73.9855];
// const timesSquareMarker = L.marker(timesSquareCoords).addTo(map);

// timesSquareMarker.bindPopup("This is Times Square.");

// // Add a marker for the Graduate Center (approximate)
// const gradCenterCoords = [40.7486, -73.9840];
// const gradCenterMarker = L.marker(gradCenterCoords).addTo(map)
//     .bindPopup("The Graduate Center, CUNY"); // Chain .bindPopup().addTo()

//  // Add a marker for Strand Bookstore (approximate)
// const strandBookstoreCoords = [40.7332, -73.9909];
// const strandBookstoreMarker = L.marker(strandBookstoreCoords).addTo(map)
//     .bindPopup("Strand Bookstore, NY. Come buy books!"); // Chain .bindPopup().addTo()

// // Add a Circle around Times Square
// const circle = L.circle(timesSquareCoords, {
//     color: 'red',       // Outline color
//     fillColor: '#f03',   // Fill color
//     fillOpacity: 0.3,  // Fill transparency (0-1)
//     radius: 500        // Radius in meters
// }).addTo(map);
// circle.bindPopup("Approx. 500m radius around Times Square");

// // Add a Polyline (line connecting points)
// const linePoints = [
//     timesSquareCoords,  // Start point
//     gradCenterCoords    // End point
// ];
// const polyline = L.polyline(linePoints, {
//     color: 'blue'       // Line color
// }).addTo(map);
// polyline.bindPopup("Line from Times Square to Grad Center");

// // Add a Polygon (closed shape) - Example: Triangle near GC
// const trianglePoints = [
//     [40.7480, -73.9850],
//     [40.7490, -73.9830],
//     [40.7480, -73.9830] // Close the polygon by repeating the first point
// ];
// const polygon = L.polygon(trianglePoints, {
//     color: 'green',
//     fillColor: '#0f0',
//     fillOpacity: 0.4
// }).addTo(map);
// polygon.bindPopup("A sample polygon");

// // Example 1: Show coordinates on map click
// map.on('click', function(e) {
//     // 'e' is the event object, e.latlng contains click coordinates
//     const coords = e.latlng;
//     const popupContent = `You clicked at:<br>Lat: ${coords.lat.toFixed(4)}<br>Lng: ${coords.lng.toFixed(4)}`;

//     // L.popup() creates a standalone popup
//     L.popup()
//         .setLatLng(coords) // Set its location
//         .setContent(popupContent) // Set its content
//         .openOn(map); // Open it on the map
//     console.log(`Map clicked at: Lat ${coords.lat}, Lng ${coords.lng}`);
// });

// // Example 2: Do something when the Times Square marker is clicked
// timesSquareMarker.on('click', function() {
//     // This overrides the default bindPopup action *if* you don't call openPopup
//     alert("You clicked the Times Square marker!");
//     // To still show the original popup, you could call:
//     // this.openPopup(); // 'this' refers to timesSquareMarker here
// });

// // Example 3: Log zoom level changes
// map.on('zoomend', function() {
//     console.log("Current map zoom level:", map.getZoom());
// });


// // Reset the map view to default NYC
// $('#zoomToNYC').on('click', function() {
//     map.setView([40.7128, -74.0060], 13);
// });

const map = L.map('map').setView([45.5017, -73.5673], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, // Max zoom level for these tiles
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // Add the tile layer to our map instance

const locations = [
   { coords: [45.5017, -73.5673], name: "Downtown Montreal" },
   { coords: [45.5048, -73.5772], name: "McGill University"},
   { coords: [45.5088, -73.5540], name: "Old Port"},
   { coords: [45.4972, -73.5790], name: "Atwater Market",},
   { coords: [45.5200, -73.6100], name: "Outremont"}
];

locations.forEach(loc => {
    L.marker(loc.coords)
      .addTo(map)
      .bindPopup(loc.name);
})

//Reset the map view to default Montreal
$('#zoomToMontreal').on('click', function() {
   map.setView([45.5017, -73.5673], 13);
 });

 //Add a custom icon for Atwater Market
 const atwaterIcon = L.icon({
    iconUrl: 'images/atwater.png',
    shadowUrl: 'images/atwatershadow.png',

    iconSize:     [18, 22], // size of the icon
    shadowSize:   [18, 22], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



});

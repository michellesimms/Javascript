document.addEventListener('DOMContentLoaded', function() {

    const map = L.map('map').setView([48.8139, -123.4972], 12);

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

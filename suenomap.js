document.addEventListener('DOMContentLoaded', function() {

    const map = L.map('map').setView([48.8139, -123.4972], 11);

L.tileLayer('https://tile.openstreetmap.de/{z}/{x}/{y}.png', {
    maxZoom: 18, // Max zoom level for these tiles
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // Add the tile layer to our map instance


const locations = [
   { coords: [48.7980, -123.5245], name: "Fulford-Ganges Road near Burgoyne Bay", book: "Lost Harbour 1"},
   { coords: [48.8147, -123.3894], name: "Ruckle Provincial Park", book: "Lost Harbour 2"},
   { coords: [48.8115, -123.5390], name: "Mount Maxwell lower trails", book: "Lost Harbour 3"},
   { coords: [48.8350, -123.4915], name: "Cranberry Road", book: "Howler Reef 1"},
   { coords: [48.7745, -123.4680], name: "Fulford Valley", book: "Howler Reef 2"},
   { coords: [48.8545, -123.4990], name: "Ganges Harbour public dock", book: "Howler Reef 3"},
   { coords: [48.8890, -123.5430], name: "St. Mary Lake", book: "Hermit Hill 1"},
   { coords: [48.8315, -123.4720], name: "Cusheon Creek crossing", book: "Hermit Hill 2"},
   { coords: [48.7925, -123.5435], name: "Burgoyne Bay meadowlands", book: "Otter Lagoon 1"},
   { coords: [48.8836, -123.5691], name: "Duck Creek Trail", book: "Otter Lagoon 2"},
   { coords: [48.8405, -123.4380], name: "Mount Erskine bluff", book: "Otter Lagoon 3"},
   { coords: [48.8215, -123.3785], name: "Wallace Island Marine Provincial Park", book: "Candle Point 1"},
   { coords: [48.9446, -123.5948], name: "Southey Point", book: "Candle Point 2"},
   { coords: [48.9102, -123.5363], name: "Fernwood Road", book: "Candle Poing 3"},
   { coords: [48.8540, -123.4975], name: "Ganges Harbour waterfront", book: "Shadow Island 1"},
   { coords: [448.8960, -123.5120], name: "North End Road near Channel Ridge", book: "Shadow Island 2"}
];

locations.forEach(loc => {
    L.marker(loc.coords)
      .addTo(map)
      .bindPopup(loc.name);
})

//Reset the map view to default Saltspring
$('#zoomToSaltSpring').on('click', function() {
   map.setView([48.8139, -123.4972], 11);
 });

 //Add a custom icon for Ganges Harbour
 const atwaterIcon = L.icon({
    iconUrl: 'images/ganges-icon.png',
    shadowUrl: 'images/ganges-icon-shadow.png',

    iconSize:     [24, 24], // size of the icon
    shadowSize:   [24, 24], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});



});

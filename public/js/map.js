// Add layers that we need to the map
var streets = L.tileLayer.Unwired({ key: mapToken, scheme: "streets" });
// Initialize the map

if (isNaN(lon) || isNaN(lat)) {
  // New Delhi, India
  lon = 77.2088;
  lat = 28.6139;
}

var map = L.map("map", {
  // latitude then longitude
  center: [lat, lon], // Map loads with this location as center
  zoom: 10,
  scrollWheelZoom: false,
  layers: [streets], // Show 'streets' by default
});

// Add the 'scale' control
L.control.scale().addTo(map);

// Add the 'layers' control
L.control
  .layers({
    Streets: streets,
  })
  .addTo(map);

// Red Icon because in Leaflet the default marker is a static image and there's no css applied to it

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


// bind popup with title gives a popup text as title over the icon 

L.marker([lat, lon], {icon: redIcon}).addTo(map).bindPopup(listingLocation + title).openPopup();

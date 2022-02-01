function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 43.664832, lng: -79.392706 },
  });
  // Create an array of alphabetical characters used to label the markers.
  //const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const labels = ["Medieval Times","Casa Loma","Ontario Science Centre","Canada's Wonderland" ];
  
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location, 
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
{ lat: 43.64167, lng: -79.42696 },
{ lat: 43.68737, lng: -79.41116 },
{ lat: 43.71616, lng: -79.33733 },
{ lat: 43.85149, lng: -79.53852 },
];

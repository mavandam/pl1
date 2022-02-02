function initMap() {
  const mt = { lat: 43.64167, lng: -79.42696 };
  const cl = { lat: 43.68737, lng: -79.41116 };
  const osc = { lat: 43.71616, lng: -79.33733 };
  const cw = { lat: 43.85149, lng: -79.53852 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 43.664832, lng: -79.392706 },
   });
  const marker = new google.maps.Marker({
    position: mt,
    map: map,
  });
}


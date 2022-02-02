function initMap() {
  const mt = { lat: 43.633450414596815, lng: -79.4252901164058 };
  //const mt = { place_id: "ChIJPWn1Hgg1K4gRHRZxCH_uUCQ" };
  const cl = { lat: 43.6786945083944, lng: -79.40937514815542 };
  const osc = { lat: 43.71710641036828, lng: -79.33894362698436 };
  const cw = { lat: 43.84311266031023, lng: -79.53945611044928 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: cl
   });
  const m_mt = new google.maps.Marker({
    position: mt,
    label: "Medieval Times",
    map: map,
  });
  const m_cl = new google.maps.Marker({
    position: cl,
    label: "Casa Loma",
    map: map,
  });
  const m_osc = new google.maps.Marker({
    position: osc,
    label: "Ontario Science Centre",
    map: map,
  });
  const m_cw = new google.maps.Marker({
    position: cw,
    label: "Canada's Wonderland",
    map: map,
  });
}


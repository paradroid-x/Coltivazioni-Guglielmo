
// mappa di google maps
function initMap() {

    const loc = { lat: 45.53206, lng: 9.55585 };

    const map = new google.maps.Map(
      document.getElementById("maps-api"),
      {
        zoom: 4,
        center: loc,
      }
    );
  

    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
  }
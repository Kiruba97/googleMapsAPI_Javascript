let map;

async function initMap() {
  const position = { lat: 11.3410, lng: 77.7172 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const origin = new google.maps.LatLng(11.0168, 76.9558); 
  const destination = new google.maps.LatLng(13.0827, 80.2707); 

  const map = new Map(document.getElementById("map"), {
    zoom: 25,
    center: origin,
    mapId: "DEMO_MAP_ID",
    title:"City 1",
    label:"A"
  });

  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({ map : map });

  const request = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.TravelMode.DRIVING, 
  }


  directionsService.route(request, function (result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsRenderer.setDirections(result);
    }
  });





  
}

initMap();
let map;

async function initMap() {
  const position = { lat: 11.3410, lng: 77.7172 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
    title:"ERODE"
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Erode",
    label: "A",
    draggable: false,
  });
}

initMap();
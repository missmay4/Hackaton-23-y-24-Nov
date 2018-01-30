window.onload = function(geolocalizar) {
  if (navigator.geolocation) {
    var output = document.getElementById("data");
    document.getElementById("data").innerHTML = "La geolocalizacion HTML5 esta soportada en este navegador";

    navigator.geolocation.getCurrentPosition(updateLocation);
  }

};

function updateLocation(position) {
  console.log('position:', position);
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  //var precision = position.coords.accuracy;
  //var altitud = position.coords.altitude;

  if (latitud <= 40.4893538 && longitud >= -3.6827461) {
    document.getElementById("data").innerHTML = "Ubicación: Madrid";
  } else {
    document.getElementById("data").innerHTML = "No se donde estás";
  }

  if (Latidud <= 41.3850379 && longitud >= 2.1733563) {
    document.getElementById("data").innerHTML = "Ubicación: Barcelona";
  } else {
    document.getElementById("data").innerHTML = "No se donde estás";
  }

  //document.getElementById("data").innerHTML = "Latidud: " + latitud + " Longitud: " + longitud + " Precision: " + precision;
  //document.getElementById("data").innerHTML = "Madrid";

}
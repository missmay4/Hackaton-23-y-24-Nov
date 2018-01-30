//$(document).ready(
//  $(function() {
// AJAX

//Plantilla

var galeriaMagda = {
  // ID
  //Nombre Galeria
  "nombre": "Magda Bellotti hbsshsh",

  // Descripción y datos
  "descripcion": "Fundada en 1980, Galería Magda Bellotti nace con el objetivo de dar a conocer el arte en el corazón de la capital española. Especializada en pinturas de los siglos XIX y XX.",
  "direccion": " Calle Fúcar nº22 28014 Madrid",
  "horario": "M-V 10:00-14:00 | 17:00-20:00             S 10:00-14:00",
  "telefono": "913693717",
  "mail": "galeriamagdabellotti@gmail.com",
  "web": "www.magdabellotti.com"
  // EVENTOS []
  // COMENTARIOS []

};


function loadData(galeria) {
  document.getElementById("nombre").value = galeriaMagda.nombre;
  document.getElementById("descripcion").value = galeriaMagda.descripcion;
  document.getElementById("address").value = galeriaMagda.direccion;
  document.getElementById("openingTimes").value = galeriaMagda.horario;
  document.getElementById("phone").value = galeriaMagda.telefono;
  document.getElementById("mailReg").value = galeriaMagda.mail;
  document.getElementById("web").value = galeriaMagda.web;

  // ...
}
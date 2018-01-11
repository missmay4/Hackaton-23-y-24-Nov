
// Ventana emergente comentarios 

// Coge la ventana modal
var modal = document.getElementById('myModal');
// Coge el boton que esta en la vista detalle y abre la ventana modal
var buttonOpen = document.getElementById("buttonComent");
// Coge el boton que envia el comentario
var buttonClose = document.getElementById("myButton");
// When the user clicks on the button, open the modal
function abrirVentana() {
  //console.log("Hola");
  modal.style.display = "block";
}
// Cuando pulse en aceptar, cerrar la ventana modal
function cerrarModal() {
  //console.log("Adios");
  modal.style.display = "none";
}
function limpiarText() {
  document.getElementById("comentario").value = "";
}

// Fin ventana emergente



//----- VISTA DETALLE
// -----JS Vista Detalle VALORACIÃ“N Estrellas

$( document ).ready(
$(function () {
 
  $("#rateYo").rateYo({
    rating: 3.6
  });

}));

//----- fin VISTA DETALLE
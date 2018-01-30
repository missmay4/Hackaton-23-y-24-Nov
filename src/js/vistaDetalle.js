
// Ventana emergente comentarios 

// Coge la ventana modal
var modal = document.getElementById('myModal');
// Coge el boton que esta en la vista detalle y abre la ventana modal
var buttonOpen = document.getElementById("buttonComent");
// Coge el boton que envia el comentario
var buttonClose = document.getElementsByClassName("myButton");
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

// Ventana emergente addEventListener
/*
$(document).ready(function(){

	document.getElementById("buttonComent").addEventListener("click", function(){
	document.getElementById('myModal').style.display = "block";

	});
});
*/
//----- VISTA DETALLE

	//Plantilla

$(document).ready(function(){



	var template = $('#plantilla').html();

	var comTemplate = Handlebars.compile(template);

	var datos = {

		//Nombre Galeria
		"galeria": "Magda Bellotti hbsshsh",


		// Descripción y datos
		"descripcion": "Fundada en 1980, Galería Magda Bellotti nace con el objetivo de dar a conocer el arte en el corazón de la capital española. Especializada en pinturas de los siglos XIX y XX.",
		"direccion": " Calle Fúcar nº22 28014 Madrid",
		"horario": "M-V 10:00-14:00 | 17:00-20:00             S 10:00-14:00",
		"telefono": "913693717",
		"mail": "galeriamagdabellotti@gmail.com",
		"web": "www.magdabellotti.com",


		//Eventos

		"fecha1": "15/12/2017-31/1/2018",
		"event1": "Exposición de las obras de Juan Talavera",
		"fecha2": "15/1/2018-31/3/2018:",
		"event2": "Exposición de las obras de Marisa Paredes.",
		"fecha3": "15/4/2018-31/5/2018:",
		"event3": "Impresionismo dfoghpdgh.",
		

	};

	var html = comTemplate(datos);

	$(document.body).append(html);

});

// -----JS Vista Detalle VALORACIÃ“N Estrellas

$( document ).ready(
$(function () {
 
  $("#rateYo").rateYo({
    rating: 3.6
  });

}));


































//----- fin VISTA DETALLE
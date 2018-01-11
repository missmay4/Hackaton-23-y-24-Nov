
/*// Ventana emergente comentarios 

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

// Fin ventana emergente*/

//----- VISTA DETALLE
// -----JS Vista Detalle VALORACIÃ“N Estrellas

/*
$(function () {
 
  $("#rateYo").rateYo({
    rating: 3.6
  });

})
*/
//----- fin VISTA DETALLE

$( document ).ready(

//----------GESTION
$(function() {

  $("form[name='formgestion']").validate({
    
    rules: {
     
      galnombre: {
      	required: true,
      	rangelength: [3,20]
      },
      galdescripcion: {
      	required: true,
      	rangelength:[10,150]
      },

      galaddress: {
      	required: true,
      	rangelength:[10,150]
      },

      openingTimes: {
      	required: true,
      	rangelength:[5, 25]
      },

      galphone: {
      	digits: true,
      	rangelength:[9, 9]

      },

      galweb: {
      	url: true
      },

      galemail: {
        required: true,
        email: true
      },

      evento: {
        rangelength:[5, 25]
      },

      date: {
        digits: true,
      },

    },

    // Specify validation error messages
    messages: {
      

    	// galnombre:"ehhh tu nombre",
    	

    	// // galdescripcion:
    	// // galaddress:
    	// // galphone:{

    	// // }
    	// galweb:"ehh tu web",
  
      // lastname: "Please enter your lastname",
      // password: {
      //   required: "Please provide a password",
      //   minlength: "Your password must be at least 5 characters long"
      // },
      // email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    //submitHandler: function(form) {
      // form.submit();
    //}
  });
})); 

/* ---------------- SAVE DATA INTO JSON ---------------- */

//document.myform.submit()


//JSON vacÃ­o:
var galeria = {};

function saveData() {
  galeria.nombre = document.getElementById('nombre').value; // Capturar el value del input correspondiente
  // ...
  galeria.descripcion = document.getElementById('descripcion').value;
  //Â¿imÃ¡genes cargadas?
  galeria.direccion = document.getElementById('address').value;
  galeria.horario = document.getElementById('openingTimes').value;
  galeria.telefono = document.getElementById('phone').value;
  galeria.web = document.getElementById('web').value;
  galeria.email = document.getElementById('mailReg').value;
  galeria.evento = {};
  galeria.evento.nomEvento = document.getElementById('nomEvento').value;
  galeria.evento.fechaEvento = document.getElementById('fechaEvento').value;
  //Â¿evento + fecha evento?

  console.log("El nombre introducido es..." + galeria.nombre);
}

//boton reset (pone los campos del formulario vacÃ­os)
function resetData(){
  document.getElementById("myForm").reset();
}

//
function loadData(){
  document.getElementById('nombre').value = galeria.nombre;
}





/*//FUNCION JS PARA JAVASCRIPT


function Checkfiles(){
  var fup = document.getElementById('photo-1');
  var fileName = fup.value;
  var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
if(ext == "gif" || ext == "GIF" || ext == "JPEG" || ext == "jpeg" || ext == "jpg" || ext == "JPG" || ext == "doc"){
return true;
} 
else{
alert("Upload Gif or Jpg images only");
fup.focus();
return false;
}

} */



//--------------FIN GESTION






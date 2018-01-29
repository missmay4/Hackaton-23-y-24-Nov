
var peticion = {

  url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
  type: "GET",
  api_key:"dc6zaTOxFJmzC",
  dataType: "json",
  fmt: "json",

    success: function(jsonrecibido) {

      console.log(jsonrecibido);
    
      }

}; 

$( document ).ready(

$(function() {



$("#buttonTw").click( function() {
  $.ajax(peticion);

})
//INVESTIGAR PROMESAS
var Promesa = new Promise(function(enviado, error){
	if(enviado(exito)){

	}

});

	Promesa.then(function(){
		window.location="perfiluser.html"
	})

}));
	//Promesa.catch()

//PROMESA SI AJAX CUMPLE, THEN

/*
$("#buttonTwitter").click(function() {

	//function crear5gif (peticion)
	function buclegif() {

			//no hace falta parsear
			//var response = jQuery.parseJSON(data);

			console.log(datosgif
				);


			// 1) Crear un nuevo div con un diferente para cada vez
			$("#espacioGifs").prepend('<img id="randomgif"/>')
			//$("#espacioGifs").prepend('<img id="randomgif '+ i'"/>')
			$("#randomgif").attr("src", datosgif.data.image_original_url);

			console.log("he llegado");

			/*
			Que se hagan 5 peticiones AJAX iteraciones
			Que se cambie la id en cada iteracion
			 


			


			//$(divid).attr("src", );

			//console.log pedir 
			
		};

	$.ajax(peticion).done(function buclegif (datosgif));

	


});
*/

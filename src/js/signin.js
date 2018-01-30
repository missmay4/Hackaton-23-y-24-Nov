console.log("ABKAGBÑG");

// 


	function campoVacio() {

		var nombre = document.getElementById('username');
		var password = document.getElementById('password');
		var campo;
		if (nombre.value.length == "" && password.value.length == "") {
		console.log("agag" + nombre.value.length);
			
			campo = true;
		}
	};

	function campoMuchosCaracteres() {

		var nombre = document.getElementById('username');
		var password = document.getElementById('password');
		var campo2;

		if (nombre.value.length >= 15 && password.value.length >= 15) {

			campo2 = true;
		}
	};

document.getElementById('enviar').addEventListener('click', 
function validar() {

	var correcto = true;

	if (campoVacio() === true) {

		correcto = false;
		alert("Rellene los campos.");
	};

	 if (campoMuchosCaracteres() === true) {

		correcto = false;
		alert("No se admiten usuarios/password superiores a 15 caracteres.");
	};

	return correcto;
});


/*function validar(){

	var correcto = true;

	if (document.getElementById('username').value.length == "" || document.getElementById('userpass').value.length == "") {

		correcto = false;

		 alert("Rellene los campos.");
   	};

	if (document.getElementById('username').value.length >= 15 || document.getElementById('userpass').value.length >= 15) {

		correcto = false;
		 alert("No se admiten usuarios/password superiores a 15 caracteres.");
   	};

	return correcto;
};*/



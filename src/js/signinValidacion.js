function campoVacio(elemento) {

		
		if (elemento.value.length == "") {
		console.log("agag" + nombre.value.length);
			return true;
		}
};

function campoMuchosCaracteres(elemento2) {

		if (elemento2.value.length >= 15) {
			return true;
		}
};

validar() {


	var nombre = document.getElementById('username');
	var password = document.getElementById('userpass');
	var correcto = true;

	if (campoVacio(nombre) == true && campoVacio(password) == true) {

		correcto = false;
		alert("Rellene los campos.");
	};

	 if (campoMuchosCaracteres(nombre) == true && campoMuchosCaracteres(password)) {

		correcto = false;
		alert("No se admiten usuarios/password superiores a 15 caracteres.");
	};

	return correcto;
};


/*
function validaNombre(elemento) {
    // var nombre = document.getElementById("name");
    if (!elemento.checkValidity()) {
        if (elemento.validity.valueMissing) {
            error(elemento, "Debes introducir un nombre.");
        }
        if (elemento.validity.patternMismatch) {
            //console.log("pasa");
            error(elemento, "Nombre debe tener entre 3 y 15 caracteres.");
        }
        return false;
    }
    borrarError(elemento);
    return true;
}

function validar(e) {
    var myName = document.getElementById("username");
    var pwd1 = document.getElementById("userpass");
    
    if (validaNombre(myName) && validaNombre(pwd1) && confirm("Pulse aceptar si está seguro de enviar el Formulario.")) {
        return true;
    } else {
        e.preventDefault();
        return false;
    }
}


*/




/*
function validar(){

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
};
*/
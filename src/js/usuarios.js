
// --------------------------- CLASS DEFINITION ---------------------------

//CREAMOS USUARIO
function Usuarios(id, nombre, username, galerianame, email, birthdate, password, repitpassword, imagenperfil) {
  this.id = id;
  this.nombre = nombre;
  this.username = username;
  this.galerianame = galerianame;
  this.email = email;
  this.birthdate = birthdate;
  this.password = password;
  this.repitpassword = repitpassword;
  this.imagenperfil = imagenperfil;
  //this.tipouser = [ usuario, galeria];
  //this.gustos = [impresionismo, cubismo, contemporaneo, expresionismo];
  this.galerias = [];

}


Usuarios.prototype.crearGaleria = function() { // Metodo 

  // CREAMOS GALERIA
  var nuevaGaleria = new Galeria(1,
                            document.getElementById("crear_nombre").value,
                            document.getElementById("crear_descripcion").value,
                            document.getElementById("crear_address").value,
                            document.getElementById("crear_openingTimes").value,
                            document.getElementById("crear_phone").value,
                            document.getElementById("crear_web").value,
                            document.getElementById("crear_mailReg").value,
                            
                            this.id
                        );

  return nuevaGaleria;

  /*
  this.nombre = document.getElementById("crear_nombre");
  //document.getElementById("crear_nombre") = galeria.nombre;
  this.descripcion = document.getElementById("crear_descripcion"); */

  //this.galerias.push(nuevaGaleria);
};

Usuarios.prototype.eliminarGaleria = function(id) {
  // INCOMPLETO

};


// --------------------------- OBJECTS INSTANCES ---------------------------


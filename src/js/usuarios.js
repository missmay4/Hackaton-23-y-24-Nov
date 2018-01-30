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


Usuario.prototype.crearGaleria = function(id, nombre, descripcion, direccion, horario, telefono, web, email) {
  // CREAMOS GALERIA
  var nuevaGaleria = new Galeria(id, nombre, descripcion, direccion, horario, telefono, web, email);

  //this.galerias.push(nuevaGaleria);
};

Usuario.prototype.eliminarGaleria = function(id) {
  // INCOMPLETO

};
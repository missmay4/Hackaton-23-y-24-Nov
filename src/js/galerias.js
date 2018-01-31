function Galeria(id, nombre, descripcion, direccion, horario, telefono, web, email, idUsuario) {
  this.id = id;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.imagenes = [];
  this.direccion = direccion;
  this.horario = horario;
  this.telefono = telefono;
  this.web = web;
  this.email = email;
  this.eventos = [];
  this.comentarios = [];
  this.idUsuario = idUsuario;
}

Galeria.prototype.crearEvento = function(id, nombre, fecha) {

  var nuevoEvento = new Evento(id, nombre, fecha);
  nuevoEvento.nombre = document.getElementById("editar_nomEvento").value;
  nuevoEvento.fecha = document.getElementById("editar_fechaEvento").value;


  this.eventos.push(nuevoEvento);
};

/*Galeria.prototype.loadData = function(id, nombre, descripcion, direccion, horario, telefono, web, email){

}*/

Galeria.prototype.eliminarEvento = function(id) {

  //this.eventos.pop(); Quita el ultimo elemento del array
  // INCOMPLETO
};

Galeria.prototype.crearComentario = function(id, nombre, fecha, imagenperfil, texto) {

  var nuevoComentario = new Comentario(id, nombre, fecha, imagenperfil, texto);

  this.comentario.push(nuevoComentario);
};

// Crear galeria nueva
//var miGaleria = new Galeria(1, );

// Crear un evento DENTRO de miGaleria
//miGaleria.crearEvento(1, "LOUVRE", "1231");

//var myGaleria1 = new Evento(1, ...);
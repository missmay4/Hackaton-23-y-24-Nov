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

Galeria.prototype.crearEvento = function() {

  var nuevoEvento = new Evento(1, 
                    document.getElementById("editar_nomEvento").value, 
                    document.getElementById("editar_fechaEvento").value, 
                    this.id );
 
  this.eventos.push(nuevoEvento);
  //return nuevoEvento;
};

/*Galeria.prototype.loadData = function(id, nombre, descripcion, direccion, horario, telefono, web, email){

}*/

Galeria.prototype.eliminarEvento = function(id) {

  /* 
    1-Entrar en el array de Eventos, y conseguir los id (esto seria un método
     en eventos.js)
    2-Eliminar el evento asociado al id 
  */

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
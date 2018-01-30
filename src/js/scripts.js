$(document).ready(

    //----------GESTION
    $(function() {

        $("form[name='formgestion']").validate({

          rules: {

            galnombre: {
              required: true,
              rangelength: [3, 20]
            },
            galdescripcion: {
              required: true,
              rangelength: [10, 150]
            },

            galaddress: {
              required: true,
              rangelength: [10, 150]
            },

            openingTimes: {
              required: true,
              rangelength: [5, 25]
            },

            galphone: {
              digits: true,
              rangelength: [9, 9]

            },

            galweb: {
              url: true
            },

            galemail: {
              required: true,
              email: true
            },

            evento: {
              rangelength: [5, 25]
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

        //----------------LOG IN



        //----------------FIN LOG IN

        /* ---------------- SAVE DATA INTO JSON ---------------- */

        //document.myform.submit()


        //JSON vacÃ­o:
        //var galeria = {};
        var galeria2;

        /*
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

          //para comprobar JSON console.log("El nombre introducido es..." + galeria.nombre);


        }
        */

        function saveData2() {
          galeria2 = new Galeria(
            document.getElementById('nombre').value,
            document.getElementById('descripcion').value
            // ...
          );

          galeria2.crearEvento(
            1, // id
            document.getElementById('nomEvento').value,
            document.getElementById('fechaEvento').value
          );

          //Â¿evento + fecha evento?

          //para comprobar JSON console.log("El nombre introducido es..." + galeria.nombre);

          console.log(galeria2);
        }

        //boton reset (pone los campos del formulario vacÃ­os)
        function resetData() {
          document.getElementById("myForm").reset();
        }

        //
        function loadData() {
          document.getElementById('nombre').value = galeria.nombre;
          document.getElementById('descripcion').value = galeria.descripcion;
          //Â¿imÃ¡genes cargadas?
          document.getElementById('address').value = galeria.direccion;
          document.getElementById('openingTimes').value = galeria.horario;
          document.getElementById('phone').value = galeria.telefono;
          document.getElementById('web').value = galeria.web;
          document.getElementById('mailReg').value = galeria.email;

          document.getElementById('nomEvento').value = galeria.evento.nomEvento;
          document.getElementById('fechaEvento').value = galeria.evento.fechaEvento;
          //Â¿evento + fecha evento?
        };
      };


      //FUNCION JS PARA JAVASCRIPT


      /*
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

      };

      */

      //--------------FIN GESTION

//----------GESTION

// Validacion JS gestion galeria


// $.validate({
//   lang: 'es'
// });
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});
$( "#mailReg" ).validate({
  rules: {
    field: {
      required: true,
      email: true
    }
  }
});

//--------------FIN GESTION
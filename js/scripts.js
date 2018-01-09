

//----------GESTION

// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='formgestion']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      galnombre: {
      	required: true,
      	rangelength: [3,20]
      }
      galdescripcion:{

      	rangelength:[10,150]
      }

      galaddress{
      	required: true,
      	rangelength:[10,150]
      }

      openingTimes{
      	rangelength:[5, 25]
      }

      galphone{
      	required: true,
      	digits: true,
      	rangelength:[9, 9]

      }

      galweb{
      	
      }



      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },




    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

//--------------FIN GESTION


// JS Vista Detalle VALORACIÓN Estrellas

$( document ).ready(

	


$(function () {
 
  $("#rateYo").rateYo({
    rating: 3.6
  });

}))


 


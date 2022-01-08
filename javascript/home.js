$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50}); 
   
  $('#myModal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset');
  }) 
});


//login validation
function validateForm() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  if ( username == "Admin" && password == "admin123"){
    $('#myModal').modal('toggle'); 
    Swal.fire({
      icon: 'success',
      title: 'Login Success',
    }).then(function() {
        window.location = "3Managementbooks.html";
      });
    return false;
  }

  else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Incorrect email or password!',
    })
  }

}

$(document).ready(function() {
 $('#book_table').DataTable({
    
    order : [],
    "columnDefs": [ {
    "targets": 'no-sort',
    "orderable": false,
    } ],

            "language": {
            "zeroRecords": "Sorry, the book may not be available as of the moment.",
            "infoEmpty": "No records available"
        }
 });
});
 


 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
 });


function validateForm() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  if ( username == "Admin" && password == "admin123"){
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
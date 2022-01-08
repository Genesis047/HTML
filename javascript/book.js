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

$(document).ready(function(){
   $('#myModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
  })

   $('#myModalBorrow').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
  }) 
});


 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
 });


$(document).ready(function() {


  $('#myModalBorrow').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");
      var _title = _row.find(".book_title").text();
      var _author = _row.find(".book_author").text();

      $(this).find(".mtitle").val(_title);
      $(this).find(".mauthor").val(_author);
      
      validateForm2(_row, _title, _author)
  });
});


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

var arr = []
function validateForm2(row, title, author) {
  document.getElementById('add_borrow').addEventListener("click", function() {
    var fname= document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var id_no = document.getElementById("id_no").value;
    var email = document.getElementById("email_add").value;

    if ( fname == "" || lname == "" || id_no == "" || email == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incomple data detected',
      })
    }

    else {
      $('#myModalBorrow').modal('toggle');
      Swal.fire({
        icon: 'success',
        title: 'Borrow Request submitted!',
      }).then(function() {
          var data = title + '\n' + author +'\n' + fname +'\n' + lname +'\n' + id_no +'\n' + email
          arr.push(data)
          alert(arr)
        });
    }

  });
}

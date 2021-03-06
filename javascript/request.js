$(document).ready(function() {
    $('#request_table').DataTable({
            order : [],
    "columnDefs": [ {
    "targets": 'no-sort',
    "orderable": false,
    } ]
    });
});
 

$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();

    $('#myModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
    });   
});


//approval
$(document).ready(function() {

  $('#myModal').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");
      var _rowin2 = _button.parents("tr").index();

      var _title = _row.find(".book_title").text();
      var _author = _row.find(".book_author").text();
      var _name = _row.find(".name").text();
      var _id = _row.find(".id").text();
      var _date_req = _row.find(".date_req").text();

      $(this).find(".mbook_title").val(_title);
      $(this).find(".mbook_author").val(_author);
      $(this).find(".mname").val(_name);
      $(this).find(".mid").val(_id);
      $(this).find(".mreq_d").val(_date_req);
       
      validateForm(_rowin2, _title, _author, _name, _id, _date_req)
  });

});


//rejection
$(document).ready(function() {

  $('#myModal2').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");

      var _rowin = _button.parents("tr").index();

      var _title = _row.find(".book_title").text();
      var _author = _row.find(".book_author").text();
      var _name = _row.find(".name").text();
      var _id = _row.find(".id").text();

      $(this).find(".mbook_title").val(_title);
      $(this).find(".mbook_author").val(_author);
      $(this).find(".mname").val(_name);
      $(this).find(".mid").val(_id);

      validateForm2(_rowin, _title, _author, _name, _id)

  });
});

//function for rejection
function validateForm2(row, title, author, name, id) {
  document.getElementById('reject-request').addEventListener("click", function() {
    if ( title == "" || author == "" || name == "" || id == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incomple data detected!',
      })
    }

    else {
      $('#myModal2').modal('toggle');
      Swal.fire({
        icon: 'success',
        title: 'Rejection',
        text: 'Rejection success!'
      }).then(function() {
          document.getElementById("request_table").deleteRow((row+1))
          var data = [title + '\n' + author + '\n' + name +'\n' + id]
          alert(data)
        });
    }
    
  });
}

//function for approval
function validateForm(row2, title, author, name, id) {
  document.getElementById('approve_request').addEventListener("click", function() {

    var issue = document.getElementById("issue_d").value;
    var exp = document.getElementById("exp_d").value;

    if ( issue == "" || exp == ""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Incomple data detected',
      })
    }

    else {
      $('#myModal').modal('toggle');
      Swal.fire({
        icon: 'success',
        title: 'Approval',
        text: 'Aprove success!'
      }).then(function() {

          document.getElementById("request_table").deleteRow((row2+1))
          var data = [title + '\n' + author + '\n' + name +'\n' + id +'\n' + issue +'\n' + exp]
          alert(data)
        });
    }

  });
}

//restarts datetime
$(document).ready( function() {
    var now = new Date();
    var today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    $('#issue_d').val(today);
});

//sign out
$(document).ready(function(){
  $("#sign_out").click(function(){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = "1Home.html"
      }
    })
  });
});
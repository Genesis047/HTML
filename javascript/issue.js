$(document).ready(function() {
    $('#issue_table').DataTable({
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


  //$(".zz-modal").click(function() {
  //  $("#con-close-modal").modal('show');
  //});

//Book transaction
$(document).ready(function() {


  $('#myModal').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");
      var _rowin = _button.parents("tr").index();

      var _title = _row.find(".book_title").text();
      var _author = _row.find(".book_author").text();
      var _borrower = _row.find(".borrower").text();
      var _pubdate = _row.find(".exp_date").text();

      $(this).find(".mbook_title").val(_title);
      $(this).find(".mbook_author").val(_author);
      $(this).find(".mborrow").val(_borrower);
      $(this).find(".mexp_date").val(_pubdate);
      
      validateForm(_rowin,_title, _author, _borrower, _pubdate)
  });

});

function validateForm(row, title, author, borrower, pubdate) {

  document.getElementById('update_button').addEventListener("click", function() {
    var start = document.getElementById("start").value;
    var fine = document.getElementById("fine").value;
    var reason = document.getElementById("reason").value;

    if ( start == "" || fine == ""){
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
        title: 'Book Transaction success',
      }).then(function() {
          document.getElementById("issue_table").deleteRow((row+1))
          var data = title + author + borrower + pubdate + start + fine + reason
          alert(data)
        });
    }

  });
}

$(document).ready(function(){
  $("#sign_out").click(function(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'signing out from Admin Account...',
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
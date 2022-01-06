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
});


$(document).ready(function() {

  //$(".zz-modal").click(function() {
  //  $("#con-close-modal").modal('show');
  //});

  $('#myModal').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");
      var _title = _row.find(".book_title").text();
      var _author = _row.find(".book_author").text();
      var _borrower = _row.find(".borrower").text();
      var _pubdate = _row.find(".exp_date").text();

      $(this).find(".mbook_title").val(_title);
      $(this).find(".mbook_author").val(_author);
      $(this).find(".mborrow").val(_borrower);
      $(this).find(".mexp_date").val(_pubdate);
  });

});

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
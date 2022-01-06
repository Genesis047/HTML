$(document).ready(function() {
    $('#fine_table').DataTable({
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

  $('#myModal').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");
      var _title = _row.find(".book_title").text();
      var _name = _row.find(".name").text();
      var _fine = _row.find(".fine").text();
      var _reason = _row.find(".reason").text();

      $(this).find(".mbook_title").val(_title);
      $(this).find(".mname").val(_name);
      $(this).find(".mfine").val(_fine);
      $(this).find(".mreason").val(_reason);
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
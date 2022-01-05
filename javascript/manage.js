$(document).ready(function() {
    $('#manage_table').DataTable({
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

  $('#myModal_2').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");
      var _title = _row.find(".book_title").text();
      var _author = _row.find(".book_author").text();
      var _pubdate = _row.find(".pub_date").text();
      var _isbn = _row.find(".book_isbn").text();

      $(this).find(".mbook_title").val(_title);
      $(this).find(".mbook_author").val(_author);
      $(this).find(".mpub_date").val(_pubdate);
      $(this).find(".mbook_isbn").val(_isbn);
  });

});


$(document).ready(function() {
    $('#myModal').on('hidden.bs.modal', function () {
      $(this).find('form').trigger('reset');
    });

    $('#addRow').on( 'click', function () {
            var table = $('#manage_table').DataTable();

            var titlebook = document.getElementById("titlebook").value;
            var author = document.getElementById("author").value;
            var start = document.getElementById("start").value;
            var isbn = document.getElementById("isbn").value;

            if ( titlebook == "" || author == "" || start == "" || isbn == ""){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incomplete data detected!'
              })

            }

            else {
              $('#myModal').modal('toggle'); 
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Book added successfuly!',
              })
              table.row.add([
                      'image',
                      titlebook,
                      author,
                      start,
                      isbn,
                      'available',
                      'remove',
              ]).draw();
        
              }
    } );
} );
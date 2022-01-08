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
                      'Available',
                      "<button class='btn remove btn-danger px-3 text-center'></button>"
              ]).draw();;
              }
    } );
} );


$(document).ready(function(){
     $("#manage_table").on('click', '.remove', function() {
      // get the current row
      var currentRow = $(this).closest("tr");

      var col1 = currentRow.find("td:eq(0)").html(); // get current row 1st table cell TD value
      var col2 = currentRow.find("td:eq(1)").html(); // get current row 2nd table cell TD value
      var col3 = currentRow.find("td:eq(2)").html(); // get current row 3rd table cell  TD value
      var col4 = currentRow.find("td:eq(3)").html(); // get current row 4st table cell TD value
      var col5 = currentRow.find("td:eq(4)").html(); // get current row 5nd table cell TD value
      var col6 = currentRow.find("td:eq(5)").html(); // get current row rd table cell  TD value
      
      var data = col1 + "\n" + col2 + "\n" + col3;


      Swal.fire({
      title: 'Are you sure?',
      icon: 'question',
      text: 'Delete ' + col2 + ' -- ' + col3,
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      if (result.isConfirmed) {
        var table = $('#manage_table').DataTable();

        table.row( $(this).parents('tr') )
        .remove()
        .draw();

        Swal.fire({
          icon: 'success',
          title: 'Deletion Success',
        })
      }
    })
    });
  });




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
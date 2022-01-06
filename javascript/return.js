$(document).ready(function() {
  $('#return_table').DataTable();
} );

$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();   
});

function generatePDF(){
  const element = document.getElementById("return_table");

  html2pdf()
  .from(element)
  .save();
}

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
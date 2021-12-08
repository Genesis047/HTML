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
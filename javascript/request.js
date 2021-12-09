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
});


$(document).ready(function() {

  $('#myModal').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");
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
  });

});

$(document).ready(function() {

  $('#myModal2').on('show.bs.modal', function(e) {
      console.log(e);
      console.log(e.relatedTarget);


      var _button = $(e.relatedTarget); // Button that triggered the modal

       // console.log(_button, _button.parents("tr"));
      var _row = _button.parents("tr");
      var _title = _row.find(".book_title").text();
      var _author = _row.find(".book_author").text();
      var _name = _row.find(".name").text();
      var _id = _row.find(".id").text();

      $(this).find(".mbook_title").val(_title);
      $(this).find(".mbook_author").val(_author);
      $(this).find(".mname").val(_name);
      $(this).find(".mid").val(_id);
  });

});

$(document).ready( function() {
    var now = new Date();
    var today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    $('#issue_d').val(today);
});

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
 


 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
 });


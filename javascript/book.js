$(document).ready(function() {
 $('#book_table').DataTable({
    
    order : [],
    "columnDefs": [ {
    "targets": 'no-sort',
    "orderable": false,
    } ]
 });
});
 


 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);
 });


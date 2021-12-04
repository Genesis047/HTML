$(document).ready(function() {
    $('#book_table').DataTable();
});
 


 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 250);
 });


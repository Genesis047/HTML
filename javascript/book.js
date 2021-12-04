$(document).ready(function() {
    $('#book_table').DataTable();
});
 


 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
 });

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
    
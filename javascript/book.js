$(document).ready(function() {
    $('#book_table').DataTable();
});


function getElementBy()
{
 elem = document.getElementById('my_id');
 text = elem.textContent;
 alert(text);

}

 $(window).scroll(function(){
 $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
 });



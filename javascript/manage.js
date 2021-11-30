//*Get element td*//
$(document).ready(function(){
   $("#manage_table").on('click','.btn',function(){
           // get the current row
           var currentRow=$(this).closest("tr"); 
           
           var col1=currentRow.find(".book_title").html(); // get current row 1st table cell TD value
           var col2=currentRow.find(".book_author").html(); // get current row 2nd table cell TD value
         
           var data=col1+"\n"+col2;
           window.alert(data);
      });

   });   
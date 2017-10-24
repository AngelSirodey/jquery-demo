$(document).ready(function() {
   $('#menu ul li:first-child').addClass('selected');
   $('.container article:nth-child(2)').addClass('middle');
   $('.list-item:odd').addClass('highlighted');
   $('.list-item:last-child').css({
       border:'1px solid #eee',
   })
   
   $('#form-container input').focus(function(){
       $(this).css({
        borderColor: 'red',     
    })
   })
   $('#form-container input').blur(function(){
    $(this).css({
     borderColor: 'initial',     
 })
})

  });


 
// here is  my js comment

$(document).ready(function(){
  
});
$(function(){
  
  
  $('li').click(function(){
    $('#console-box').text(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
; 
  });
  
});

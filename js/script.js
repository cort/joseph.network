setInterval( function(){
  var currentLeft = parseFloat( $('#movingH1').css('left') );
  currentLeft++; 
  $('#movingH1').css('left', currentLeft+'px');
  
  if(currentLeft > $(window).width()){
  $('#movingH1').css('left', '0px');
    
    
  }
  
}, 5 );;

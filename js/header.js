$(function(){
  
  //random header color
  $(".tis_link").click(function() {
  
  var back = ["linear-gradient(135deg, purple, orange)","linear-gradient(135deg, green, orange)","linear-gradient(135deg, red, purple)","linear-gradient(135deg, Tomato, PaleVioletRed)","linear-gradient(135deg, darkmagenta, teal)","linear-gradient(135deg, CadetBlue, BurlyWood)","linear-gradient(135deg, darkolivegreen, teal)"];
     var rand = back[Math.floor(Math.random() * back.length)];
      
   $("header").css("background", rand);
  });




  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }//if-else
  });//win func.



  //capture scroll any percentage
  $(window).scroll(function(){
  var wintop = $(window).scrollTop(), docheight = 
      
      $(document).height(), winheight = $(window).height();
        var scrolled = (wintop/(docheight-winheight))*100;
    
        $('.scroll-line').css('width', (scrolled + '%'));
  });

  //show the icons
  $(function() {
    setTimeout(function(){ 
        $('.i1').show();
     }, 1500);
    
  });

  $(function() {
    setTimeout(function(){ 
        $('.i2').show();
     }, 2500);
    
  });

  $(function() {
    setTimeout(function(){ 
        $('.i3').show();
     }, 3500);
    
  });

  

 
 

  
});//ready func.
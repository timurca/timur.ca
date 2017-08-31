$(function(){
  
  //random header color
  $(".tis_link").click(function() {
  
   var back = ["linear-gradient(135deg, green, orange)","linear-gradient(135deg, purple, orange)","linear-gradient(135deg, red, purple)","linear-gradient(135deg, #333, yellow)","linear-gradient(135deg, orange, pink)"];
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
});//ready func.
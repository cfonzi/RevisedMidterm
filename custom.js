$(document).ready(function() {

    
//NUMBERED TABS CODE
  
//$(".canvas").hide();
    
$("#1").click(function() {
    $(".canvas").hide();
    $("#image1").show("slide", 1000); 
});
    
$("#2").click(function() {
    $(".canvas").hide();
    $("#image2").show("slide", 1000); 
});
    
$("#3").click(function() {
    $(".canvas").hide();
    $("#image3").show("slide", 1000);
});
    
$("#4").click(function() {
    $(".canvas").hide();
    $("#image4").show("slide", 1000);
});
    
$("#5").click(function() {
    $(".canvas").hide();
    $("#image5").show("slide", 1000);
});
    
    
//PREVIOUS NEXT CODE
   
    
  $("#next").click(function() {
      var nextDiv = $(".canvas:visible").next(".canvas");
      if (nextDiv.length === 0) {
          nextDiv = $(".canvas:first");
      }
      
      $(".canvas").hide(); 
      nextDiv.show().effect("shake", 500)
  });

    
     $("#previous").click(function() {
      var prevDiv = $(".canvas:visible").prev(".canvas");
      if (prevDiv.length === 0) {
          prevDiv = $(".canvas:last");
      }
      
      $(".canvas").hide(); 
      prevDiv.show().effect("bounce", 500)
  });
    

    
});




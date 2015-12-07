function getCanvas() {
  $.getJSON('data/data.json')
  .done( function(data){                    

$.each(data.canvas, function(key, val) {
    $("#buttons").append("<button id='btn" + key + "'>" + (key+1) + "</button>");
    $("#btn" + key).on('click', function () {
        $(".canvas").hide();
        $("#canvas" + key).show("slide", 1000);
    });

msg = "<div class='canvas' id='canvas" + key + "'>"; 

        $('#content').append(msg); 

  		$('#canvas' + key).css("background", "url(" + val.image + ") top left no-repeat");
        $('#canvas' + key).hide();

    if (key === 0) {
        $('#canvas0').show();
        };
    });

    
//PREVIOUS NEXT CODE
    
$('#buttons').append("<button id='previous'>&laquo;</button><button id='next'>&raquo;</button>"); 


$("#previous").on ('click', function () {
        var i = $(".canvas:visible").index();
        if (i < 1) {
            $(".canvas:visible").hide();
            $(".canvas:last").show("shake", 1000);        
        } else {
                       
                $(".canvas:visible").hide().prev(".canvas").show("shake", 1000);
        };
        });    
    
    $("#next").on ('click', function () {

        var i = $(".canvas:visible").index();
        var len = $(".canvas").length - 1;
        
        if (i < len) {
                    $(".canvas:visible").hide().next(".canvas").show("bounce", 1000);
        } else {
            $(".canvas:visible").hide();
            $(".canvas:first").show("bounce", 1000);
        };
    });                           
  })    
                            
         
}


$(document).ready(function() {
    getCanvas();  
    });


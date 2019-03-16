$( document ).ready(function() {
  var handle = 11;//chart data
  var pocket = 3; //chart data
  var hotel = 1;  //chart data

  var likes = 131;//likes count
  var twits = 14; //twits count

  var liked = false;//like flag
  var twited = false;//twit flag

  $('#11').append(handle); //filling a services column
  $('#3').append(pocket); //filling a services column
  $('#1').append(hotel);  //filling a services column
  $('#15').append(hotel+pocket+handle); //filling a services column

  $('.likescore').append(likes);  //filling a likes counter
  $('.twitscore').append(twits);  //filling a twits counter
  $(function(){ //chart drawing
      var canvas=document.getElementById("cgistogram"); //chart keeping
      var ctx=canvas.getContext("2d");  //some configuration

      var canvasOffset=$("#cgistogram").offset(); //global coordinates
      var offsetX=canvasOffset.left;  //offset of X coordinate
      var offsetY=canvasOffset.top;   //offset of Y coordinate

      var barHeight=22; //the width of bar(in horizontal it feels like height)
      var barSpacing=10;//the space between bars
      var bars=[] //a settings container in future

      bars.push({width:handle * 28, color:"#b1e19b", x:null,y:null,left:null}); //set for first bar
      bars.push({width:pocket * 22, color:"#ace2f8", x:null,y:null,left:null}); //set for second bar
      bars.push({width:hotel * 44, color:"#ace2f8", x:null,y:null,left:null}); //set for third bar

      for(var i=0;i<bars.length;i++){ //use sets
          bar=bars[i];
          bar.y=(barHeight+barSpacing)*i; //setting y coordina for lower angle
          bar.x=bar.width;  //setting x coordinate for righter angle
          bar.height=barHeight; //setting a height(width)
          bar.left=bar.y+barHeight;//setting y for upper angle
      }
      drawBarchart();

      function drawBarchart(){
          ctx.clearRect(0,0,canvas.width,canvas.height);  //clear a field for draw
          ctx.rect(0,0,canvas.width,canvas.height); //seting a shape of draw
          ctx.fillStyle="transparent";  //making a transparent background
          ctx.fill(); //releas background

          for(var i=0;i<bars.length;i++){ //rectangle drawing
              bar=bars[i];  //setting current bar
              ctx.beginPath();  //start linear drawing
              ctx.rect(0,bar.y + 5,bar.x,bar.height);  //draw a rectangle frame
              ctx.fillStyle=bar.color;  //set a color for current bar
              ctx.fill(); //release filling
              ctx.strokeStyle = bar.color;  //set the color of stroke
              ctx.lineJoin = 'round'; //a rounding of angles
              ctx.lineWidth = 8;  //set a width of stroke
              ctx.stroke(); //release stroke
          }
          ctx.fillStyle = "#000000";  //set a font colour
          ctx.font = " 18px Arial"; //set a font
          ctx.fillText("Ручное бронирование", 10,22); //describing a first bar
          ctx.fillText("Пакетные туры", 10,54);//describing a second bar
          ctx.fillText("Отели", 10,85);//describing a third bar
      }
  });

  $('#hearts').on('click',function(){ //setting dynamic likes
    liked = !liked; //change a flag
    if(liked) {
      likes++;  //likes rising
      $('#hearts').css( 'color' , 'salmon' ); //changing colour
    }
    else {
      likes--;  //like falling
      $('#hearts').css( 'color' , '#6fadce' );  //changing colour back
    }
    $('.likescore').empty();  //clear old likes
    $('.likescore').append(likes);  //set new likes
  });

  $('#clouds').on('click',function(){ //setting dynamic twits
    twited = !twited; //change a flag
    if(twited) {
      twits++;  //twits rising
      $('#clouds').css( 'color' , '#497DDD' ); //changing colour
    }
    else {
      twits--;  //twits falling
      $('#clouds').css( 'color' , '#6fadce' ); //changing colour back
    }
    $('.twitscore').empty();  //clear old likes
    $('.twitscore').append(twits);  //set new likes
  });
});

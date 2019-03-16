$( document ).ready(function() {
  var handle = 11;
  var pocket = 3;
  var hotel = 1;

  var likes = 131;
  var twits = 14;
  $('#11').append(handle);
  $('#3').append(pocket);
  $('#1').append(hotel);
  $('#15').append(hotel+pocket+handle);

    $('.likescore').append(likes);
    $('.twitscore').append(twits);
  $(function(){

      var canvas=document.getElementById("cgistogram");
      var ctx=canvas.getContext("2d");

      var canvasOffset=$("#cgistogram").offset();
      var offsetX=canvasOffset.left;
      var offsetY=canvasOffset.top;

      var barHeight=22;
      var barSpacing=10;
      var leftMargin=0;
      var bars=[]

      bars.push({width:handle * 28, color:"#b1e19b", x:null,y:null,left:null,bottom:null});
      bars.push({width:pocket * 22, color:"#ace2f8", x:null,y:null,left:null,bottom:null});
      bars.push({width:hotel * 44, color:"#ace2f8", x:null,y:null,left:null,bottom:null});


      for(var i=0;i<bars.length;i++){
          bar=bars[i];
          bar.y=leftMargin+(barHeight+barSpacing)*i;
          bar.x=bar.width;
          bar.height=barHeight;
          bar.left=bar.y+barHeight;
          bar.bottom=canvas.height;
      }

      drawBarchart();

      function drawBarchart(){

          ctx.clearRect(0,0,canvas.width,canvas.height);
          ctx.rect(0,0,canvas.width,canvas.height);
          ctx.fillStyle="transparent";
          ctx.fill();

          for(var i=0;i<bars.length;i++){
              bar=bars[i];
              ctx.beginPath();
              ctx.rect(0,bar.y + 5,bar.x,bar.height);
              ctx.fillStyle=bar.color;
            ctx.fill();
              ctx.strokeStyle = bar.color;
              ctx.lineJoin = 'round';
              ctx.lineWidth = 8;
              ctx.stroke();
          }


          ctx.fillStyle = "#000000";
          ctx.font = " 18px Arial";
          ctx.fillText("Ручное бронирование", 10,22);
          ctx.fillText("Пакетные туры", 10,54);
          ctx.fillText("Отели", 10,85);

      }
  });
  var liked = false;
  var twited = false;

  $('#hearts').on('click',function(){
    liked = !liked;
    if(liked) {
      likes++;
      $('#hearts').css( 'color' , 'salmon' );
    }
    else {
      likes--;
      $('#hearts').css( 'color' , '#6fadce' );
    }
    $('.likescore').empty();
    $('.likescore').append(likes);
  });

  $('#clouds').on('click',function(){
    twited = !twited;
    if(twited) {
      twits++;
      $('#clouds').css( 'color' , '#497DDD' );
    }
    else {
      twits--;
      $('#clouds').css( 'color' , '#6fadce' );
    }
    $('.twitscore').empty();
    $('.twitscore').append(twits);
  });

});

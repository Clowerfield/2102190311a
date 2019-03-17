var controled = false;  //  flag for catching Ctrl press

$( document ).ready(function() {
  $('#comment').on('click',function(){
    var named = prompt("Введите имя коментатора", "Лилия Семеновна"); // Addition a users name
    if(named == null) named = 'Пользователь № '+ new Date().getMilliseconds();  // undefined users definition
    var texted = $('textarea').val(); // keeping text by user
    if(texted == '') texted = '<Многозначное молчание>';  //silence must make a scene
    $('textarea').val('');  //  clearning an input field
    var monthed = new Date().toLocaleString('ru', {month: 'long'}); //getting a verbal presentation of mounth
    if(~monthed.indexOf("й") || ~monthed.indexOf("ь")){ // a mounth little changing
      if(~monthed.indexOf("й")){
       monthed = monthed.substring(monthed.indexOf("й"));
      }
      if(~monthed.indexOf("ь")){
       monthed = monthed.substring(monthed.indexOf("ь"));
      }
      monthed += 'я';//keeping changed mounth(for cyrillic text only)
    }
    else monthed += 'а';  //keeping changed mounth(for cyrillic text only)
    var timed = new Date().getDate() + ' ' + monthed + ' ' + new Date().getFullYear();  //keeping a full date

    $('main').append(   //inserting a structured data
      "<div> <span class = 'uname'>" + named +
      "</span> <span class = 'udate'>" + timed +
      "</span> <div class = 'said'>" + texted +
      "</div></div>"
    );
  });
});

$(document).keyup(function (e) {  //a detector of key pressing
  if(e.which == 17) controled = false; //17 -- Ctrl, detecting that Ctrl already pressed and kept
  }).keydown(function (e) {
  if(e.which == 17) controled=true; //17 -- Ctrl, saving Ctrl state
  if(e.which == 13 && controled == true) {  //13 -- Enter
    $('#comment').click();  //when Ctrl+Enter pressed together
    controled=false;  //droping a flag
  }
});

$( document ).ready(function() {
  $('#comment').on('click',function(){
    var named = prompt("Введите имя коментатора", "Лилия Семеновна");
    var texted = $('textarea').val();
    $('textarea').val('');
    var monthed = new Date().toLocaleString('ru', {month: 'long'});
    if(~monthed.indexOf("й") || ~monthed.indexOf("ь")){
      if(~monthed.indexOf("й")){
       monthed = monthed.substring(monthed.indexOf("й"))
      }
      if(~monthed.indexOf("ь")){
       monthed = monthed.substring(monthed.indexOf("ь"))
      }
      monthed += 'я';
    }
    else monthed += 'а';
    var timed = new Date().getDate() + ' ' + monthed + ' ' + new Date().getFullYear();


  $('main').append(
    "<div> <span class = 'uname'>" + named +
    "</span> <span class = 'udate'>" + timed +
    "</span> <div class = 'said'>" + texted +
    "</div></div>"
  );
  });
});

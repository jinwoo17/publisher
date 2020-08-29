$(document).ready(function(){
    $('#header a').on('click',function(){
      var conTop = $('#content1').position().top;
      $('html, body').animate({scrollTop: conTop});
    })
    $('#gnb li').on('click',function(){
      var idName = $(this).children('a').attr('href');
      var conPos = $(idName).position().top;
      $('html, body').animate({scrollTop: conPos})
    })

    var view = 1;
    $(window).on('scroll',function(){
      if ($(window).scrollTop() >= 700 && view == 1) {
        $('#gnb').css({ position: 'fixed', height: 0}).animate({height: 50});
        view = 0;
      }
      else if($(window).scrollTop() < 700 && view == 0) {
        $('#gnb').css({ position: 'absolute'})
        view = 1;
      }
    })
})

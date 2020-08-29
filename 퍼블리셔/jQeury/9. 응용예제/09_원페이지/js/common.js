$(document).ready(function(e) {
  // 메뉴클릭시 이동
  $("#gnb li").on('click', function() {
      var idName = $(this).children('a').attr('href');
      var conPos = $(idName).position().top;
      $("html, body").animate({ scrollTop: conPos })
      $("#gnb li").removeClass("over");
      $(this).addClass('over')
  })

  //마우스휠을 이용한 이동

  //휠을 올렸을 경우
  $('section').on('mousewheel',function(event, delta){ //delta는 마우스 올리고 내렸을 때 값
    if(delta > 0) {
      var prev = $(this).prev().position().top;
      $('html,body').not(':animated').animate({scrollTop: prev });

      var prevIndex = $(this).index();
      if( prevIndex < 2){
        prevIndex = 2;
      } else {
        $('#gnb li').removeClass("over");
        $('#gnb li:eq('+ (prevIndex - 2) +')').addClass('over');
      }
      return false;
    }
    //휠을 내렸을 경우
    else if(delta < 0) {
      var next = $(this).next().position().top;
      $('html,body').not(':animated') .animate({scrollTop: next });

      var nextNum = $(this).index();
      if(nextNum > 2) {
        nextIndex = 2
      } else {
        $('#gnb li').removeClass("over");
        $('#gnb li:eq('+ nextNum +')').addClass('over');
      }

      return false;
    }
  })
})

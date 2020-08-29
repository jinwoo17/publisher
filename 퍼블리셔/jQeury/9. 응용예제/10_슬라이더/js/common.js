// 좌우 버튼 클릭시
$(".btnLeft").on('click', function() {
    $("#sliderList li a").animate({ opacity: 0 }, 100);
    $("#sliderList").prepend($("#sliderList > li:last"))
                    .css({ marginLeft: "-100%"})
                    .animate({ marginLeft: 0 }, function() {
                      $("#sliderList li:eq(0) a").animate({ opacity: 1 }, 200)
                    })
})
$(".btnRight").on('click', function() {
    $("#sliderList li a").animate({ opacity: 0 }, 100);
    $("#sliderList").animate({ marginLeft: "-100%"}, function() {
      $(this).append($(" > li:first", this))
             .css({ marginLeft: 0 })
      $("#sliderList li:eq(0) a").animate({ opacity: 1 }, 200)
    })
})
// 자동롤링
var timer = setInterval(function() {
  $('.btnRight').click();
}, 3000)
$("#btnWrap span, #btnNum a").on('click', function() {
  clearInterval(timer);
  timer = setInterval(function() {
    $('.btnRight').click();
  }, 3000)
})

// 번호버튼 클릭시
var n;
$("#btnNum a").on('click', function() {
    $("#sliderList li a").animate({ opacity: 0 }, 100);
    var num = $(this).index()+1;
    var className = $("#sliderList li.slider" + num)
    var pos = className.position().left;
    $("#sliderList").animate({ marginLeft: -pos }, function() {
      for ( n=1; n<4; n++ ) {
          $("#sliderList").append($("#sliderList li.slider" + num))
          num++;
          if ( num > 3 ) {
            num = 1;
          }
      }
      $("#sliderList").css({ marginLeft: 0 })
      $("#sliderList li.slider" + num + " a").animate({ opacity: 1 }, 100);
    })
})

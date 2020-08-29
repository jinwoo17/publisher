var liLength = $("#sliderList li").length;
function fading() {
  var className = $("#sliderList li:first").attr('class');
  var num = className.substr(6, 1);
  if ( num == liLength ) {
      num = 0;
  }
  $("#btnNum a").removeClass('active');
  $("#btnNum a:eq("+num+")").addClass('active');
  console.log(num)
  $("#sliderList li:eq(1):not(:animated)").addClass('on')
                           .css({ opacity: 0 })
                           .animate({ opacity: 1 }, function() {
                             $("#sliderList").append($("#sliderList li:eq(0)"));
                             $("#sliderList li:last").removeClass('on');
                           })
}
var timing  = setInterval(fading, 3000);
$("#btnWrap span, #btnNum a").on('click', function() {
    clearInterval(timing);
    timing  = setInterval(fading, 3000);
})
// 좌우버튼
$(".btnLeft").on('click', function() {
  var className = $("#sliderList li:last").attr("class") ;
  var num = className.substr(6, 1) - 1;

  $("#btnNum a").removeClass("active");
  $("#btnNum a:eq("+ num +")").addClass('active');

  $("#sliderList li:last:not(:animated)").addClass('on')
                          .css({ opacity: 0 })
                          .animate({ opacity: 1 }, function() {
                            $("#sliderList").prepend($("#sliderList li:last"));
                            $("#sliderList li:eq(1)").removeClass('on');
                          })
})
$(".btnRight").on('click', function() {
    fading();
})
$("#btnNum a").on('click', function() {
    var n = $(this).index() + 1;
    $("#btnNum a").removeClass('active');
    $(this).addClass('active');

    $("#sliderList li.slider"+n).addClass('on')
                             .css({ opacity: 0 })
                             .animate({ opacity: 1 }, function() {
                                $("#sliderList li").not($(".slider"+n)).removeClass('on');
                                for ( i=0; i<liLength; i++ ) {
                                  if ( n > liLength ) {
                                    n = 1;
                                  }
                                  $("#sliderList").append($("#sliderList li.slider" + n));
                                  n++;
                                }
                             })
})

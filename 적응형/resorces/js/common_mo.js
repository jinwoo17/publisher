
$(document).ready(function(){
    gnb_Mobile();
    // minHeight();
});


//Mobile Gnb 메뉴
function gnb_Mobile(){
    $(".left_gnb > li").off();
    // menu버튼 클릭시 모바일 메뉴 나오게하기
    $('.menu').on('click', function(){
        $('.left_gnbWrap').addClass('on');
        $('.bg-fix').addClass('on');
    })
    $('.left_gnbWrap .close').on('click', function(){
        $('.left_gnbWrap').removeClass('on');
        $('.bg-fix').removeClass('on');
    })

    // depth1의 각메뉴 클릭시 depth2 나오게 하기
    // 변수 선언
    $depth1_wrap = $('.left_gnb>li');
    $depth1 = $depth1_wrap.children('ul');
    $depth1_btn = $depth1_wrap.children('a');

    $('.left_gnb>li>a').click(function(event){
        var $this = $(this);
        var $this_ul = $this.siblings('ul');
        var check = $this.hasClass('on');

        if(check){
            $this.removeClass('on');
            $this_ul.stop(true,true).slideUp();
        } else {
            $depth1_btn.removeClass('on');
            $depth1.stop().slideUp();
            $this.addClass('on');
            $this_ul.stop(true,true).slideDown();
        }
    })
}

// 컨텐츠 최소높이
// function minHeight(){
//     var windowsHeight = $(window).height() ;
//     var commonHeight = $(".header").outerHeight() + $(".footer").outerHeight();
//     var minHeight = windowsHeight - commonHeight
//     $(".contentsWrap").css('min-height', minHeight);
// }

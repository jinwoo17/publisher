

$(document).ready(function(){
    gnb_pc();
    // minHeight();
});

// PC Gnb 메뉴
function gnb_pc() {
    $('.sub_lnb').hide();
    $(".left_gnb > li").off();
    $('.left_gnb > li').hover(
        function(){
            $(this).children('.sub_lnb').stop().slideDown(200);
        },
        function(){
            $(this).children('.sub_lnb').stop().slideUp(200);
        })
}

// 컨텐츠 최소높이
// function minHeight(){
//     var windowsHeight = $(window).height() + 100;
//     var commonHeight = $(".header").outerHeight() + $(".footer").outerHeight();
//     var minHeight = windowsHeight - commonHeight
//     $(".contentsWrap").css('min-height', minHeight);
// }

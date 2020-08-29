
// 페이지 메뉴표시
var categoryNum = null;
var submenuNum = null;
function setGnb(cn, sn) {
    $(".gnb .ctGroup").removeClass("current");
    $(".gnb .ctGroup").eq(cn).addClass("current");
    $(".gnb .ctGroup.current > ul li").removeClass("current");
	$(".gnb .ctGroup.current > ul li").eq(sn).addClass("current");
    categoryNum = cn;
    submenuNum = sn;
}

$(document).ready(function(){

    // fileBox
    var uploadFile = $('.fileBox .uploadBtn');
    uploadFile.on('change', function(){
        if(window.FileReader){
            var filename = $(this)[0].files[0].name;
        } else {
            var filename = $(this).val().split('/').pop().split('\\').pop();
        }
        $(this).siblings('.fileName').val(filename);
        $(".fileAddList").append('<li> <span>' + filename + '</span> <button type="button" name="" id="" class="fileDel">삭제</button></li>');
    });

    //file리스트 삭제
    $(document).on('click','.fileDel', function(){
        var clearfile = $(this).parent().parent().siblings(".fileName");
        $(this).parent("li").remove();
        $(clearfile).val("");
    });


    //링크리스트
    $(document).on('click', '.linkList>.toggleBtn', function(){
        var $linkList = $(this).parent('.linkList');
        var $linkBox = $(this).next('.list');
        if($(this).attr('aria-expanded') == 'false'){
            $(".linkList .list").slideUp('fast');
            $(".linkList").removeClass("opened");
            $(".linkList .toggleBtn").attr('aria-expanded', 'false');
            $linkBox.stop().slideDown('fast');
            $(this).attr('aria-expanded', 'true');
            $linkList.addClass('opened');
        }else{
            $linkBox.stop().slideUp('fast');
            $(this).attr('aria-expanded', 'false');
            $linkList.removeClass('opened');
        }
    });
    $(document).on('click', '.linkList .list a', function(){
        if($(".linkList .list").hasClass("mCustomScrollbar") == true){
            //mCustomScroll이 적용 된케이스
            var $linkList = $(this).parent().parent().parent().parent().parent('.linkList');
            var $linkBox = $(this).parent().parent().parent().parent('.list');
            var $toggleBtn = $(this).parent().parent().parent().parent().siblings('.toggleBtn');
            $linkBox.stop().slideUp('fast');
            $linkList.removeClass('opened');
            $toggleBtn.attr('aria-expanded', 'false');
        }else{
            var $linkList = $(this).parent().parent().parent('.linkList');
            var $linkBox = $(this).parent().parent('.list');
            var $toggleBtn = $(this).parent().parent().siblings('.toggleBtn');
            $linkBox.stop().slideUp('fast');
            $linkList.removeClass('opened');
            $toggleBtn.attr('aria-expanded', 'false');
        }

        if($(this).prop('target') == '_blank'){

        }else{
            $toggleBtn.text($(this).text());
        }

    });
    // 링크리스트 창 닫기
    $("body").click(function(){
        if($(".linkList").hasClass("opened") == true){
            $(".linkList .list").stop().slideUp('fast');
            $(".linkList").removeClass("opened");
        }
    });

    // 모달창내 닫기(X)버튼
    $(document).on('click','.closeModal', function(){
        $(this).parent().parent().stop().fadeOut("fast");
        $(this).parent().parent().removeClass("on");
        $("body").removeClass("overhidden");
    });

    //top 버튼
    $(".btnTop").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });

    //Tab
    $(document).on('click', '.tabBtn', function(e){
        $(this).parent().siblings("li").removeClass("current");
        $(this).parent().addClass("current");
        $(this).parent().siblings("li").children(".tabBtn").attr('title', '');
        $(this).attr('title', '현재창')

        if($(this).is('button') == true){
            var tbtnNum = $(this).parent().index();
            var tcontNum = $(this).parent().parent().siblings(".tabContents").children(".tabCont");
            $(tcontNum).removeClass("current");
            $(tcontNum).eq(tbtnNum).addClass("current");
            $(this).parent().siblings("li").children(".tabBtn").attr('aria-expanded', 'false');
            $(this).attr('aria-expanded', 'true')
        }
    });

    //accordion
    $(document).on('click', '.accBtn', function(){
        var itemstate = $(this).parent().parent(".accItem");
        var accCont = $(this).parent().next(".accCont");
        if( $(itemstate).hasClass("expanded") == true){
            $(accCont).stop().slideUp("fast");
            $(accCont).addClass("current");
            $(this).attr('aria-expanded', 'false');
            $(itemstate).removeClass("expanded");
        }else{
            $(accCont).stop().slideDown("fast");
            $(accCont).addClass("current");
            $(this).attr('aria-expanded', 'true');
            $(itemstate).addClass("expanded")
        }
    });


});


// mCustomScrollbar 적용
(function($){
    $(window).on("load",function(){
        $(".linkList .list").mCustomScrollbar({
            theme:"minimal-dark"
        });
        $(".membershipForm .agreeContent").mCustomScrollbar({
            theme:"minimal-dark"
        });
        $(".linkList .list").css('overflow', 'hidden');
    });
})(jQuery);


//Layer Popup Open
function lpOpen(el) {
    var $el = $(el);
	$el.addClass("on");
	$el.stop().fadeIn("fast");

    var windowsHeight = $(window).height();
    var lpHeight = $(el).children(".lpWrap").height();
    var lpPosition = (windowsHeight - lpHeight) / 2;
    $("html").addClass("overhidden");
    $(el).children('.lpWrap').css('top', lpPosition);
}

// Layer Popup Close
function lpClose(el) {
	var $el = $(el);
	$el.stop().fadeOut("fast",function(){
		$el.removeClass("on");
        $("body").removeClass("overhidden");
        $(".modalWrap.popUp").css('display','none');
	});
}

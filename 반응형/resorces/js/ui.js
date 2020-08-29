$(document).ready(function() {
    $('.sub-lnb').hide();

    var deviceWidth = $(window).width();
    if(deviceWidth < 760){
        //미디어쿼리 모바일 대응
        lnb_Mobile();
        // minHeight();
    }
    // 미디어쿼리 PC대응
    else{
        lnb_pc();
        // minHeight();
    }
    $(window).resize(function(){ //사이즈 변화시
        var deviceWidth = $(window).width();
        if(deviceWidth < 760){
            //미디어쿼리 모바일 대응
            lnb_Mobile();
        }
        // 미디어쿼리 PC대응
        else{
            lnb_pc();
            //mobile메뉴 slideDown된 상태일 때 초기화
            $depth1_btn.removeClass('on');
            $depth1.stop().slideUp();
        }
    });

    // PC lnb
    function lnb_pc() {
        $(".lnb-wrap > .lnb > li").off();
        $('.lnb-wrap > .lnb > li').hover(
            function(){
                $(this).children('.sub-lnb').stop().slideDown(200);
            },
            function(){
                $(this).children('.sub-lnb').stop().slideUp(200);
            })
    }

    //Mobile lnb
    function lnb_Mobile() {
        $(".lnb-wrap > .lnb > li").off();
        // menu버튼 클릭시 모바일 메뉴 나오게하기
        $('.menu').on('click', function(){
            $('.lnb-wrap').addClass('on');
            $('.bg-fix').addClass('on');
        })
        $('.lnb-wrap .close').on('click', function(){
            $('.lnb-wrap').removeClass('on');
            $('.bg-fix').removeClass('on');
            $depth1_btn.removeClass('on');
            $depth1.stop().slideUp();

        })

        // depth1의 각메뉴 클릭시 depth2 나오게 하기
        // 변수 선언
        $depth1_wrap = $('.lnb > li');
        $depth1 = $depth1_wrap.children('ul'); // .lnb > li > ul
        $depth1_btn = $depth1_wrap.children('a'); // .lnb > li > ul > a

        $('.lnb > li > a').click(function(event){
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

	/*if($('.tab-wrap').length >0){
		tabSelect();
	}*/
});

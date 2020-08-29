$(document).ready(function(){
    $.ajax({
        type : "POST",
        url: "/ajxa_box/notice01.asp",
        dataType : "html", 
        success: function(data) {
            $(".main_tab_content").html(data);
            notice_slider();
        }
    });
    
    var news_slide = new Swiper('.board_banner01 .swiper-container', {
        loop:true,
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
    });

    // main banner swiper
    var main_slide = new Swiper('.main_banner .swiper-container', {
        loop:true,
        slidesPerView: 1,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
    });
    $(".swiper-button-pause").click(function(){
        main_slide.autoplay.stop();
        $(".swiper-button-pause").addClass("hid");
        $(".swiper-button-play").removeClass("hid");
    });
    $(".swiper-button-play").click(function(){
        main_slide.autoplay.start();
        $(".swiper-button-play").addClass("hid");
        $(".swiper-button-pause").removeClass("hid");
    });


	$(document).on('click','.main_tab > li', function(e){
		var index = $(this).index();
		$(this).addClass("on").siblings("li").removeClass("on");
        // $(".main_tab_content > div").eq(index).addClass("on").siblings("div").removeClass("on");
        // $(".main_tab_content .notice_slider .swiper-wrapper").attr('style', '')
        
        // notice_slider();

        // return;
    });


  
    function notice_slider(){
        // notice swiper
        var notice_slider = new Swiper('.notice_slider .swiper-container', {
            observer: true, 
            observeParents: true,
            slidesPerView: 'auto',
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        });
    };

    $(".main_tab > li").click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        var url = index+1;
        // console.log(index);
        $(".main_tab_content").each(function(){
            $.ajax({
                type : "POST",
                url: "/ajxa_box/notice0"+url+".asp",
                dataType : "html", 
                success: function(data) {
                    $(".main_tab_content").html(data);

                    notice_slider();
                }
            });

        });
    });


});

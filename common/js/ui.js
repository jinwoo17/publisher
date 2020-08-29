//var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

$(document).ready(function(e) {
///////////////////////////////////////////
	// 해당페이지 메뉴표시
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
	//해당 페이지에 넣기, 해당 페이지에 해당하는 nav 번호
	$(document).ready(function(){
		setGnb(2, 0) //categoryNum, submenuNum
	});

/////////////////////////////////////////////
	// 모달창
	$('.cancle').on('click', function(){
		$('.modal').fadeOut();
	});
	$('.close').on('click', function(){
		$('.modal').fadeOut();
	});
	$('.cbox').on('click', function(){
		$('.modal').fadeIn();
	});

	// select 선택시 색상 변경
	$('.inp01').change(function () {
		   if ($(this).children('option:first-child').is(':selected')) {
			   $(".inp01").css("color", "#999");
			   $(".inp01 option:checked").css("color", "#999");
			   $(".inp01 option:not(:checked)").css("color", "#999");
		   } else {
			   $(".inp01").css("color", "#000");
			   $(".inp01 option:checked").css("color", "#000");
			   $(".inp01 option:not(:checked)").css("color", "#999");
		   }
	});

	// swiper
	var swiper = new Swiper('.main-slide .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
	var swiper = new Swiper('.sub-slide .swiper-container', {
	      direction: 'vertical',
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
    });


	//브랜드 탭메뉴
	$(document).on('click','.tab-nav > li', function(e){
		var index = $(this).index();
		$(this).addClass('curr').siblings('li').removeClass('curr');
		$('.tab-content > .tab-cont').eq(index).addClass('curr').siblings('.tab-cont').removeClass('curr');
	});

	// 아코디언 메뉴
	$('.accordion .body').hide();
	var $index = $('.accordion .head').on('click',function(e){
		var idx = $index.index(this);  //클릭한 요소의 인덱스값 가져오기
		$(this).next('.body:not(:animated)').slideToggle(400,function(){
			$('.accordion .head > a').eq(idx).toggleClass('on');
			$('.accordion .head > .arrow').eq(idx).toggleClass('on');
		});
		e.preventDefault();
	});

	// input design
	var fileTarget = $('.filebox .upload-hidden');
	fileTarget.on('change', function(){ // 값이 변경되면
		if(window.FileReader){ // modern browser
			var filename = $(this)[0].files[0].name;
		}
			else { // old IE
				var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
			}
			// 추출한 파일명 삽입
			$(this).siblings('.upload-name').val(filename);
			$(".fileAddList").append('<li> <span>' + filename + '</span> <button type="button" name="" id="" class="fileDel">삭제</button></li>');
		});
		// file리스트 삭제
		$(document).on('click','.fileDel', function(){
			var clearfile = $(this).parent().parent().siblings(".fileName");
			$(this).parent("li").remove();
			$(clearfile).val("");
		});
		// option선택시 해당 text표시
		var select = $('.select-script select');
	      select.change(function(){
	          var select_name = $(this).children('option:selected').text();
	          $(this).siblings("label").text(select_name);
	      });

	$('.select-box #select').on('click',function(){
		$('.select-box > label').toggleClass('arrow');
	})


	// 햄버거 메뉴
	$('.gnb-button').on('click', function(){
		$(this).toggleClass('close');
	})


	// scroll top
	$(".btn-top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

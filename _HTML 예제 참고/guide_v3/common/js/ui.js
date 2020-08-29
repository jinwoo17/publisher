var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

$(function() {
	/*-------------------------------------------------------------------
		## Gnb
	-------------------------------------------------------------------*/
	// pc gnb 전체 메뉴 열기
	$('.gnb').on('mouseenter focusin',function(e){
		var header = $('.header');
		var gnbDep = $('.gnb .depth2');
		var gnbBg = $('.gnb-bg');

		header.addClass('is-active');
		gnbDep.stop().slideDown('fast');
		gnbBg.stop().slideDown('fast');
	});
	$('.gnb').on('mouseleave focusout',function(e){
		var header = $('.header');
		var gnbDep = $('.gnb .depth2');
		var gnbBg = $('.gnb-bg');

		header.removeClass('is-active');
		gnbDep.stop().slideUp('fast');
		gnbBg.stop().slideUp('fast');
	});


	/*-------------------------------------------------------------------
		## Snb - sidebar, Aside
	-------------------------------------------------------------------*/
	// Aside - sidebar snb
	$(document).on('click','.snb ul > li > a.has-expand',function(e){
		var snbDepth = ('.depth2');
		e.preventDefault();
		if ($(this).parent().hasClass('is-active')){
			$(this).parent().removeClass('is-active');
			$(this).parent().find(snbDepth).stop().slideUp('fast');
		}else{
			$(this).parent().siblings().find(snbDepth).stop().slideUp('fast');
			$(this).parent().siblings().removeClass('is-current is-active');
			$(this).parent().addClass('is-current is-active');
			$(this).parent().find(snbDepth).stop().slideDown('fast');
		}
		//$(this).find('.ico-snb-fold.dep1')
	});

	// Aside - sidebar slide
	$(document).on('click','.side-menu > a.all-menu',function(e){
		var ele = $('.wrapper').hasClass('side-closed');
		var wrapper = $('.wrapper');
		if (ele){
			wrapper.removeClass('side-closed');
		}else{
			wrapper.addClass('side-closed');
		}
	});


	/*-------------------------------------------------------------------
		## Lnb
	-------------------------------------------------------------------*/
	// lnb toggle
	$(document).on('click', '.lnb > ul > li', function(e){
		var cls = $(this).hasClass('is-active');
		var lnbDepth = ('.depth2');
		if(cls){
			$(this).removeClass('is-active');
			$(this).find(lnbDepth).stop().fadeOut(300);
		}
		else{
			$(this).siblings().find(lnbDepth).stop().fadeOut(300);
			$(this).siblings().removeClass('is-active');
			$(this).addClass('is-active')
			$(this).find(lnbDepth).stop().toggle('fade', 200);
		}
	});

	// $('.lnb').on('click focusin',function(e){
	// 	var lnbDepth = ('.depth2');
	// 	if ($('.lnb').has(e.target).length === 0){
	// 		$(this).removeClass('is-active');
	// 		$(lnbDepth).stop().toggle('fade', 200);
	// 	}
	// });


	/*-------------------------------------------------------------------
		## Sticky
	-------------------------------------------------------------------*/
	// lnb sticky
	$(window).on('scroll',function(e){
		var lnbPos = $(this).scrollTop();
		var lnb = $('.lnb');
		if(lnbPos > 93){
			console.log('page load-scrollY : '+scrollY);
			lnb.addClass('fixed');
		} else {
			lnb.removeClass('fixed');
		}
	});

	// header fixed sticky
	$(document).on('scroll', function(e){
		funcHeadFixed();
		e.preventDefault;
	});

	// header fixed sticky
	// if(!$('.wrapper').hasClass('page-main')) {
	// 	//console.log('page load-scrollY : '+scrollY);
	// 	funcHeadFixed();

	// 	$(document).on('scroll', function(e){
	// 		funcHeadFixed();
	// 		e.preventDefault;
	// 	});
	// }


	/*-------------------------------------------------------------------
		## Toggle
	-------------------------------------------------------------------*/
	// Dashboard menu toggle
	$(document).on('click', '.btn-toggle', function(e){
		var $ele = $(this).parent();
		toggleSelect($ele);
	});

    // button toggle
	// $(document).on('click', '.btn-toggle', function(e){
	// 	if ($(this).parent().hasClass('is-active')) {
	// 		$(this).parent().removeClass('is-active')
	// 		$('.toggle-list').slideUp(300);
	// 	} else {
	// 		$(this).parent().addClass('is-active')
	// 		$('.toggle-list').slideDown(300);
	// 	};
	// });


	/*-------------------------------------------------------------------
		## Accodion
	-------------------------------------------------------------------*/
	$(document).on('click','.accodi-header > .accodi-open', function(){
		var id = $(this).closest('.accodi').attr('id');
		accodiAction(id);
	});

	/*-------------------------------------------------------------------
		## Tab
	-------------------------------------------------------------------*/
	$(document).on('click', '.tab-nav ul li', function(e){
		var activeTab = $(this).attr('data-tab');
		$(this).addClass('is-active').siblings('li').removeClass('is-active');
		$('#' + activeTab).addClass('is-active').siblings('.tab-content').removeClass('is-active');
	});

	// Tab
	// $(document).on('click','.tab-nav ul > li', function(e){
	// 	var index = $(this).index();
	// 	$(this).addClass('is-active').siblings('li').removeClass('is-active');
	// 	$('.tab-container > .tab-content').eq(index).addClass('is-active').siblings('.tab-content').removeClass('is-active');
	// 	$('.tab-nav li a').removeAttr('title'); //접근성
	// 	$('.tab-nav li.is-active a').attr('title','현재탭') //접근성
	// });


	/*-------------------------------------------------------------------
		## Swiper tab slide
	-------------------------------------------------------------------*/
	// tab slide
	$(document).on('click','.slide-tab .swiper-wrapper .swiper-slide', function(e){
		var index = $(this).index();
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.tab-body2 > .tab-cont').eq(index).addClass('on').siblings('.tab-cont').removeClass('on');
		$('.slide-tab .swiper-wrapper > li a').removeAttr('title'); //접근성일때
		$('.slide-tab .swiper-wrapper > li.on a').attr('title','현재탭'); //접근성일때
	});

	// slide tab
	new Swiper('.swiper-container', {
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		}
	});

	let tabInputs = document.querySelectorAll('.tabInput');

	tabInputs.forEach(function(input) {

		input.addEventListener('change', function() {
		let id = input.value;
		let thisSwiper = document.getElementById('swiper' + id);
		thisSwiper.swiper.update();
		});

	});


	// tab slide
	$('.tab-slide').each(function(){
		var tabSlide = undefined;
		var $this = $(this);
		var minWidth = 140;
		var lens = $this.find('li').length;
		var action = function(){
			if ($(window).width() < lens * minWidth){
				$this.addClass('is-responsive');
			} else {
				$this.removeClass('is-responsive');
			}
			function initSwiper() {
				var screenWidth = $(window).width();
				if(screenWidth < 1024 && tabSlide == undefined) {
					setTimeout(function(){
						tabSlide = new Swiper('.tab-slide > .swiper-container', {
							slidesPerView: 'auto',
							spaceBetween: 0,
							freeMode: true,
							pagination: false,
							slideToClickedSlide: true,
							resistanceRatio: 0 //좌우 움직임 저항 조정
						});
						if($('.tab-slide').size()!=0){
							tabSlide.slideTo($(".tab-slide > .swiper-container .swiper-wrapper .swiper-slide.is-active").index(), 0, true);
						}
					}, 0);
				} else if (screenWidth > 1024 && tabSlide != undefined) { //1024px 이전엔 silde 작동 안함
					tabSlide.destroy();
					tabSlide = undefined;
					jQuery('.tab-slide > .swiper-container .swiper-wrapper').removeAttr('style');
					jQuery('.tab-slide > .swiper-container .swiper-wrapper .swiper-slide').removeAttr('style');
				}
			}
			initSwiper();
		}
		action();
		var indicatorSetTime;
		$(window).on('resize', function(){
			clearTimeout(indicatorSetTime);
			indicatorSetTime = setTimeout(function(){
				action();
			}, 0);
		})
	});


	/*-------------------------------------------------------------------
		## Scroll
	-------------------------------------------------------------------*/
	// scroll top button 이동
	$(window).on('scroll', function(e){
		var btnScroll = $('.btn-scrollTop');
		if ($(this).scrollTop() > 0) {
			btnScroll.addClass('is-active');
		} else {
			btnScroll.removeClass('is-active');
		}
	});
	$(document).on('click', '.btn-scrollTop', function(e){
		e.preventDefault();
		$('html').animate({
			scrollTop: 0
		}, 500);
	});

	// click scroll section 위치로 이동
	$(document).on('click', '.header .gnb .node1 > a', function(e){
		e.preventDefault();
		var scrollPos = $($(this).attr('href'));
		var scrollPosTop = scrollPos.offset().top - 150;
		$('html, body').animate({
			scrollTop: scrollPosTop
		}, 500);
	});


	/*-------------------------------------------------------------------
		## Scroll animate
	-------------------------------------------------------------------*/
	// Scroll animate
	var $eleAnimateSec = $('.to-animate-sec');
	var clsAnimate = 'animated';
	var percent = 0.3;
	var time = null;
	var winHOld = -1
	var direction;

	function action(){
		var winH = $(window).scrollTop() + $(window).outerHeight();
		var winH2 = $(window).scrollTop();
		if (winHOld > winH2){ direction = 'up' }
		if (winHOld < winH2){ direction = 'down' }
		winHOld = winH2;
		$eleAnimateSec.each(function(){
			var $this = $(this);
			var objH = $this.offset().top + ($this.outerHeight() * percent);
			var objH2 = $this.offset().top;
			console.log(direction, winH2, objH2);

			// 내릴때 실행
			if (winH > objH && direction == 'down'){
				$this.addClass(clsAnimate).addClass($this.attr('data-animate'));
				$this.find('.to-animate').each(function(){
					$(this).addClass(clsAnimate).addClass($(this).attr('data-duration')).addClass($(this).attr('data-animate'));
				})
			}
			// // 올릴때 실행
			// if (winH2 < objH2 && direction == 'up'){
			// 	$this.addClass(clsAnimate).addClass($this.attr('data-animate'));
			// 	$this.find('.to-animate').each(function(){
			// 		$(this).addClass(clsAnimate).addClass($(this).attr('data-duration')).addClass($(this).attr('data-animate'));
			// 	})
			// }
			// // 올렸을때 초기화
			// if (winH < objH2){
			// 	$this.removeClass(clsAnimate).removeClass($this.attr('data-animate'));
			// 	$this.find('.to-animate').each(function(){
			// 		$(this).removeClass(clsAnimate).removeClass($(this).attr('data-duration')).removeClass($(this).attr('data-animate'));
			// 	})
			// }
			// // 내렸을때 초기화
			// if (winH2 > (objH2  + ($this.outerHeight() * 1))){
			// 	$this.removeClass(clsAnimate).removeClass($this.attr('data-animate'));
			// 	$this.find('.to-animate').each(function(){
			// 		$(this).removeClass(clsAnimate).removeClass($(this).attr('data-duration')).removeClass($(this).attr('data-animate'));
			// 	})
			// }
		})
	}
	$(window).on('scroll', function(){
		clearTimeout(time);
		time = setTimeout(function(){ action() });
	})
	action();


	/*-------------------------------------------------------------------
		## Input - file field 추가
	-------------------------------------------------------------------*/
	// Input - file : upload input 추가
    var fileTarget = $('.form-file .upload-hidden');
    fileTarget.on('change', function (e){ // 값이 변경되면
        if (window.FileReader) { // modern browser
            var filename = $(this)[0].files[0].name;
        } else { // old IE
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
        }
        // 추출한 파일명 삽입
		$(this).siblings('.upload-name').val(filename);
	});
	// file field type 추가삭제
    $('.file-plus').on('click', function (e){
        var fileIndex = $('.file-input').children().length;
        $('.file-input').append(
            '<div class="file-box">' +
            '<input class="upload-name" value="파일찾기" disabled="disabled">' +
            '<input type="file" id="ex-filename' + fileIndex + '" class="upload-hidden"> <label for="ex-filename' + fileIndex + '">파일찾기</label>' +
            '<button type="button" class="btn btn-file file-minus" onclick="javascript:removeFile(this);">삭제</button>' +
            '</div>');
	});


	/*-------------------------------------------------------------------
		## popover, toggle 클릭/스크롤 닫기
	-------------------------------------------------------------------*/
	$(document).on('click', function(e){
		// popover 닫기
		if ($('.popover-content:visible').length && $('.popover').has(e.target).length === 0) {
			$('.popover-content:visible').each(function(){
				var id = $(this).attr('id');
				popover(id);
			});
		}

		// toggle 닫기
		if ($('.toggle.is-active').length && $('.toggle').has(e.target).length === 0) {
			$('.toggle.is-active').each(function(){
				toggleSelect($(this));
			});
		}
	})
	// popover, toggle 스크롤시 닫기
	// $('.container').on('scroll', function(e){
	// 	if ($('.popover:visible').length) {
	// 		$('.popover:visible').each(function(){
	// 			var id = $(this).attr('id');
	// 			popover(id);
	// 		});
	// 	}

	// 	if ($('.toggle.is-active').length) {
	// 		$('.toggle.is-active').each(function(){
	// 			toggleSelect($(this));
	// 		});
	// 	}
	// })

});


/*-------------------------------------------------------------------
	## Window popup
-------------------------------------------------------------------*/
$(function(){
    $('.win-popup').click(function(e){  //버튼을 클릭 했을시 windowPopup 함수 출력
		console.log('click');
		windowPopup();
	});
    function windowPopup(){
        var url= "windowopen.html"; //팝업창에 출력될 페이지 URL
        var winWidth = 500;
        var winHeight = 500;
        var popupOption= "width="+winWidth+", height="+winHeight; //팝업창 옵션(optoin)
        var myWindow = window.open(url,"TestName",popupOption);
        myWindow.document.write("<h1>"+myWindow.name+"</h1>");
    }
});

function windowopenPopup() {
	window.open('windowopen.html', 'window팝업', 'width=500, height=500, left=100; top=100, menubar=no, status=no, toolbar=no');
}

/*-------------------------------------------------------------------
	## Utility Functions
-------------------------------------------------------------------*/
// Dim mask
function funcDimOpen() {
	var $dim = $('.dim-mask');
	var $body = $('body');

	setTimeout(function(){
		$dim.addClass('is-active');
		$body.addClass('scrollOff');
	}, 50);
}
function funcDimClose() {
	var $dim = $('.dim-mask');
	var $body = $('body');

	setTimeout(function(){
		$dim.removeClass('is-active');
		$body.removeClass('scrollOff');
	}, 50);
}

// Sidebar snbset
// function snbSet (n1, n2){
// 	var $snb = $('.snb');
// 	var $n1, $n2;

// 	if (typeof(n1) == 'number'){
// 		$n1 = $snb.find('ul > .node1').eq(n1);
// 		$n1.addClass('is-current is-active');
// 	}
// 	if (typeof(n2) == 'number'){
// 		$n2 = $n1.find('.depth2 > ul > .node2').eq(n2);
// 		$n2.addClass('is-current is-active');
// 	}
// }

// Header fixed - sticky
function funcHeadFixed() {
	var scrollY = $(window).scrollTop();
	//var header = $('.header');

	if(scrollY > 0 && !$('.header').hasClass('fixed')){
		console.log('scrollY > 0 : '+scrollY);
		$('.header').addClass('fixed');
	}else if(scrollY == 0 && $('.header').hasClass('fixed')){
		console.log('scrollY == 0 : '+scrollY);
		$('.header').removeClass('fixed');
	}
	//console.log(scrollY);
}

/*-------------------------------------------------------------------
	## Accordion : ID
-------------------------------------------------------------------*/
function accodiAction (id) {
    var $accodi = $('#' + id);
    if ($accodi.hasClass('is-active')){
        $accodi.removeClass('is-active');
        $accodi.find('.accodi-content').stop().slideUp(350);
    }else{
        $accodi.siblings().find('.accodi-content').stop().slideUp(350);
        $accodi.siblings().removeClass('is-active');
        $accodi.addClass('is-active');
        $accodi.find('.accodi-content').stop().slideDown(350);
    }
}

/*-------------------------------------------------------------------
	## Toggle
-------------------------------------------------------------------*/
function toggleSelect($ele){
	$ele.toggleClass('is-active');
	$ele.find('.toggle-list').stop().slideToggle(300);
	$('.toggle.is-active').not($ele).each(function(){
		$(this).removeClass('is-active');
		$(this).find('.toggle-list').stop().slideUp(300);
	});
}

/*-------------------------------------------------------------------
	## Popover - onClick ID 처리 : onclick="popover('popover')"
-------------------------------------------------------------------*/
function popover(id) {
	var $popover = $('#'+id)
	$popover.stop().toggle('fade', 300);
	$popover.addClass('is-active')
	$('.popover-content:visible').not('#'+id).each(function(){
		$(this).stop().fadeOut(300);
	});

	var popEle = $('#'+id);
	var popPos = $('.btn-popover').position();	// 버튼 위치에 띄우고자 할 경우, 위치 정보 가져옴
	popEle.css('top', (popPos.top) + 'px');	    // 위치 지정
	popEle.css('left', (popPos.left) + 'px');

}

/*-------------------------------------------------------------------
	## Popup - onClick ID 처리 : 열기 onclick="popup('popupBasic', this, 'open');"  /  닫기 onclick="popup('popupBasic', this, 'close')"
-------------------------------------------------------------------*/
function popup(id, obj, action, callback){
	var eleModule = '.popup-wrap',
		//eleOpener = '.popup-opener',
		//eleCloser = '.popup-closer',
		eleFocus = '.popup-focus',
		zindex = 1000;

	//열기
	if (action == 'open'){
		var $id = $('#'+id);
		$(obj).attr({'data-popup': id});
		$id.removeAttr('hidden');
		setTimeout(function(){ $id.addClass('is-active'); });
		$id.one(transitionend, function(){
			if ($(this).hasClass('is-active')){
				$(this).find(eleFocus).attr('tabindex','0').focus();
				//console.log('aaaa');
			}
		});
		funcDimOpen();
	}

	//닫기
	else if (action == 'close'){
		var $id = $('#'+id);
		var $opner = $('[data-popup='+id+']');
		$id.removeClass('is-active');
		$id.one(transitionend, function(){
			if (!$(this).hasClass('is-active')){
				$id.attr('hidden', 'hidden');
				$opner.focus().removeAttr('data-popup');
				if (callback){ callback }
			}
		});
		funcDimClose();
	}
}

// Mobile(ios,and) popup 스크롤막기
function scrollDisable(){
	$('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
		e.preventDefault();
	});
}
function scrollEnable(){
	$('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
}

/*-------------------------------------------------------------------
	## File Functions
-------------------------------------------------------------------*/
// Input - file : 파일명 하단 리스트 추가 타입
function fileAttach(obj) {
	if (window.FileReader) {
		var filename = $(obj)[0].files[0].name;
	} else {
		var filename = $(obj).val().split('/').pop().split('\\').pop();
	}
	var fileIndex = $('.filebox').children().length;
	$(obj).siblings('.upload-hidden').val(filename);
	$(obj).closest('.form-list').find('.form-file').prepend(
		'<div class="filebox">' +
		'<input class="upload-name" value="파일찾기" disabled="disabled">' +
		'<input type="file" id="filename' + fileIndex + '" class="upload-hidden" onchange="fileAttach(this)">' +
		'<label for="filename' + fileIndex + '">파일찾기</label>' +
		'</div>');
	console.log(fileIndex);
	$(obj).closest('.form-list').find('.file-list').append(
		'<div class="file-name">' +
		'<span class="item">' + filename + '<button type="button" onclick="removeFile(this)"><span>삭제</span></button></span>' +
		'</div>');
}
// Input: file upload 삭제 호출
function removeFile(minus) {
    var $minus = $(minus);
    $minus.parent().remove();
}

/*-------------------------------------------------------------------
	## Loading - 호출예시: 로딩실행 loading('open'); / 로딩닫기 loading('close');
-------------------------------------------------------------------*/
function loading (action, callback){
	var $eleModule = $('.loading-wrap');

	// 실행
	if (action == 'open'){
		$eleModule.removeAttr('hidden');
		setTimeout(function(){ $eleModule.addClass('is-active'); });
		$eleModule.one(transitionend, function(){
			if ($eleModule.hasClass('is-active')){
				if (callback){ callback }
			}
		})
		funcDimOpen();
	}

	// 닫기
	else if (action == 'close'){
		$eleModule.removeClass('is-active');
		$eleModule.one(transitionend, function(){
			if (!$(this).hasClass('is-active')){
				$eleModule.attr('hidden', 'hidden');
				if (callback){ callback }
			}
		});
		funcDimClose();
	}
}


/*-------------------------------------------------------------------
	## Popup cookie
-------------------------------------------------------------------*/
// function getCookie(cname) {
// 	var name = cname + "=";
// 	var ca = document.cookie.split(';');
// 	for (var i = 0; i < ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') c = c.substring(1);
// 		if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
// 	}
// 	return "";
// }

// function setCookie(cname, cvalue, exdays) {
// 	var d = new Date();
// 	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
// 	var expires = "expires=" + d.toUTCString();
// 	document.cookie = cname + "=" + cvalue + "; " + expires;
// }

// function popupClose() {
// 	if ($("input[name='popCheck']").is(":checked") == true) {
// 		setCookie("close", "Y", 1);
// 	}
// 	$('.popup').hide();
// }
// $(document).ready(function () {
// 	cookiedata = document.cookie;
// 	if (cookiedata.indexOf("close=Y") < 0) {
// 		$('.popup').show();
// 	} else {
// 		$('.popup').hide();
// 	}
// 	$('.btn-popupClose').click(function () {
// 		popupClose();
// 	});
// });

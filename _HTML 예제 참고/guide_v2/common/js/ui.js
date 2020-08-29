jQuery(document).ready(function(e) {
	/*-------------------------------------------------------------------------------------------------------------
		## Gnb - aside, mobile
	-------------------------------------------------------------------------------------------------------------*/
	// aside active - mobile gnb dim 처리
    $('.aside-open .btn-asideOpen').on('click',function(e){
		$('.aside').addClass('is-visible');
		$('body').addClass('scrollOff');
		funcDimOpen();
		setTimeout(function(){
			$('.aside').addClass('is-active');
		},50);
    });
    $('.aside-close .btn-asideClose').on('click',function(e){
		$('.aside').on(function(){
			if ($(this).hasClass('is-active') == false){
				$('.aside').removeClass('is-visible');
			}
		})
		$('.aside').removeClass('is-active');
		$('body').removeClass('scrollOff');
		funcDimClose();
	});

	// aside active - bg 처리
	/*$(document).on('click','.btn-asideOpen',function(e){
        $('.aside').addClass('is-active');
        $('.overlay').addClass('is-active');
    });
    $(document).on('click','.btn-asideClose',function(e){
        $('.aside').removeClass('is-active');
        $('.overlay').removeClass('is-active');
	});*/


	// mobile gnb, adside - toggle m-depth2
	$(document).on('click','.m-gnb ul .m-node1 > a',function(e){
		e.preventDefault();
		if ($(this).parent().hasClass('on')){
			$('.m-gnb .m-node1').removeClass('on');
			$('.m-gnb .m-node1 .m-depth2').stop().slideUp('fast');
		}else{
			$('.m-gnb .m-node1 .m-depth2').stop().slideUp('fast');
			$('.m-gnb .m-node1').removeClass('on');
			$(this).parent().addClass('on');
			$('.m-gnb .m-node1.on .m-depth2').stop().slideDown('fast');
		}
	});
	// mobile gnb, adside - toggle m-depth3
	$(document).on('click','.m-gnb .m-depth2 .m-node2 > a',function(e){
		e.preventDefault();
		if ($(this).parent().hasClass('on')){
			$('.m-gnb .m-depth2 .m-node2').removeClass('on');
			$('.m-gnb .m-depth2 .m-node2 .m-depth3').stop().slideUp('fast');
		}else{
			$('.m-gnb .m-depth2 .m-node2 .m-depth3').stop().slideUp('fast');
			$('.m-gnb .m-depth2 .m-node2').removeClass('on');
			$(this).parent().addClass('on');
			$('.m-gnb .m-depth2 .m-node2.on .m-depth3').stop().slideDown('fast');
		}
	});
	// mobile gnb, adside - toggle : this 방식
	// $(document).on('click','.m-gnb a',function(e){
	// 	e.preventDefault();
	// 	if ($(this).parent().hasClass('on')){
	// 		$(this).parent().siblings().removeClass('on');
	// 		$(this).next().stop().slideUp('fast');
	// 	}else{
	// 		$(this).parent().siblings().find('>a').next().slideUp('fast');
	// 		$(this).parent().siblings().removeClass('on');
	// 		$(this).parent().addClass('on');
	// 		$(this).next().stop().slideDown('fast');
	// 	}
	// });

	// aside : this 방식
	// $(document).on('click','.gnb a.has-expand',function(e){
	// 	e.preventDefault();
	// 	if ($(this).parent().hasClass('is-active')){
	// 		$(this).parent().removeClass('is-active');
	// 		$(this).next().stop().slideUp('fast');
	// 	}else{
	// 		$(this).parent().siblings().find('>a').next().slideUp('fast');
	// 		$(this).parent().siblings().removeClass('is-active');
	// 		$(this).parent().addClass('is-active');
	// 		$(this).next().stop().slideDown('fast');
	// 	}
	// 	$(this).find('.ico-gnb-fold.dep1')
	// });


    /*-------------------------------------------------------------------------------------------------------------
		## Gnb - pc
	-------------------------------------------------------------------------------------------------------------*/
    // pc gnb 개별 메뉴 열기
    $('.snb').hide();
    $('#gnb > li').hover(
      function(){
        $(this).children('.snb').fadeIn(200);
    },
      function(){
        $(this).children('.snb').stop().fadeOut(200);
    })

    // pc gnb 전체 메뉴 열기
	$('.gnb .node1 > a').on('mouseenter focusin',function(e){
		$('.header').addClass('on');
		$('.gnb .depth2').stop().slideDown(200);
		$('.gnb-bg').stop().slideDown(200);
	});
	$('.gnb').on('mouseleave',function(e){
		$('.header').removeClass('on');
		$('.gnb .depth2').stop().slideUp(200);
		$('.gnb-bg').stop().slideUp(200);
	});
	$(document).on('click focusin',function(e){
		if ($('.gnb').has(e.target).length === 0){
			$('.header').removeClass('on');
			$('.gnb .depth2').stop().slideUp(200);
			$('.gnb-bg').stop().slideUp(200);
		}
	});


	/*-------------------------------------------------------------------------------------------------------------
		## Toggle & Accodion & Tab
	-------------------------------------------------------------------------------------------------------------*/
    // button toggle menu
	$(document).on('click', '.btn-menu', function(e){
		if ($(this).parent().hasClass('on')) {
			$(this).parent().removeClass('on')
			$('.menu-list').slideUp(300);
		} else {
			$(this).parent().addClass('on')
			$('.menu-list').slideDown(300);
		};
	});


    //accordion1
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

	// accordion2 : this 방식
	$(document).on('click','.acco-list dl > dt',function(e){
		e.preventDefault();
		if ($(this).closest('li').hasClass('is-active')){
			$(this).closest('li').removeClass('is-active');
			$(this).next().stop().slideUp('fast');
		}else{
			$(this).closest('li').siblings().find('dd').slideUp('fast');
			$(this).closest('li').siblings().removeClass('is-active');
			$(this).closest('li').addClass('is-active');
			$(this).next().stop().slideDown('fast');
		}
	});
	// accordion2 : class 방식
	// $(document).on('click', '.acco-list dl > dt', function(e){
	// 	e.preventDefault();
	// 	if ($(this).parent().hasClass('on')){
	// 		$('.acco-list dl').removeClass('on');
	// 		$('.acco-list dl > dd').stop().slideUp(300);
	// 	}else{
	// 		$('.acco-list dl > dd').stop().slideUp(300);
	// 		$('.acco-list dl').removeClass('on');
	// 		$(this).parent().addClass('on');
	// 		$('.acco-list dl.on dd').stop().slideDown(300);
	// 	}
	// });

	// lnb toggle
	$(document).on('click', '.lnb-wrap .lnb > li', function(e){
		var cls = $(this).hasClass('is-active');
		if(cls){
			$(this).removeClass('is-active').next('.lnb-sub').slideUp();
		}
		else{
			$(this).addClass('is-active').next('.lnb-sub').slideDown();
			$(this).siblings().removeClass('is-active');
		}
	});

	// tab
	$(document).on('click','.tab-nav > li', function(e){
		var index = $(this).index();
		$(this).addClass('on').siblings('li').removeClass('on');
		$('.tab-body > .tab-cont').eq(index).addClass('on').siblings('.tab-cont').removeClass('on');
		$('.tab-nav > li a').removeAttr('title'); //접근성일때
		$('.tab-nav > li.on a').attr('title','현재탭') //접근성일때
	});



	/*-------------------------------------------------------------------------------------------------------------
		## Swiper slide & tab
	-------------------------------------------------------------------------------------------------------------*/
	// slide tab on
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

    // tab in tab
    // 부모를 찾는 함수, 재귀함수
    function findParent(el, className){
      let check = el.parentNode.classList.contains(className);

      if(check === true){
         return el.parentNode;
      }else{
        return findParent(el.parentNode, className);
      }
    }

    function bindingTabEvent(wrap){ //class명을 받아서 이벤트를 부여하는 역할
        let wrapEl = document.querySelectorAll(wrap);

        wrapEl.forEach(function(tabArea){ //forEach를 통해 각각의 탭 영역이 개별로 동작되도록
        let btn = tabArea.querySelectorAll('.btn_tab'); //인자로 넘어오는 값인 wrap(class명)을 querySeleterAll을 통해 선택

        btn.forEach(function(item){ //forEach를 통해 각각의 탭 영역이 개별로 동작되도록, 각각의 버튼을에 이벤틀을 부여해야 하므로
            item.addEventListener('click', function(){
                let parent = findParent(this, 'tab_area'); //현재 클릭한
                let idx = this.dataset['idx']; //현재 버튼이 가지고 있는 idx 값
                let depth = this.dataset['depth']; //현재 버튼이 가지고 있는 depth 값
                let btnArr = parent.querySelectorAll('.btn_tab[data-depth="'+ depth +'"]'); //현재 버튼과 동일 선상에 있는 다른 버튼들
                let contentArr = parent.querySelectorAll('.content_area[data-depth="'+ depth +'"]'); //현재 버튼에 해당하는 그룹단위 안의 컨텐츠 엘리먼트들

                btnArr.forEach(function(btn){
                    btn.classList.remove('act');
                });
                this.classList.add('act');
                contentArr.forEach(function(content){
                    content.classList.remove('act');
                });
                parent.querySelector('.content_area[data-idx="'+ idx +'"][data-depth="'+ depth +'"]').classList.add('act');
            });
        });
      });
    }
    bindingTabEvent('.tab_wrap');


	/*-------------------------------------------------------------------------------------------------------------
		## Sticky menu
	-------------------------------------------------------------------------------------------------------------*/
	// header fixed - sticky
	if(!$('.wrapper').hasClass('page-main')) {
		//console.log('page load-scrollY : '+scrollY);
		funcHeadFixed();

		var setTime;
		$(document).on('scroll', function(e){
			clearTimeout(setTime);
			setTime = setTimeout(function(){
				funcHeadFixed();
			},200)
			e.preventDefault;
		});
	}

	// header fixed setTimeout 적용 안함
	// if(!$('.wrapper').hasClass('page-main')) {
	// 	//console.log('page load-scrollY : '+scrollY);
	// 	funcHeadFixed();

	// 	$(document).on('scroll', function(e){
	// 		funcHeadFixed();
	// 		e.preventDefault;
	// 	});
	// }

	// lnb sticky
	$(window).on('scroll',function(e){
		var lnb_postion = $(this).scrollTop();
		if(lnb_postion > 190){
			//console.log('page load-scrollY : '+scrollY);
			$('.lnb-wrap').addClass('fixed');
		} else {
			$('.lnb-wrap').removeClass('fixed');
		}
	});



	/*-------------------------------------------------------------------------------------------------------------
		## TweenMax js
	-------------------------------------------------------------------------------------------------------------*/
	var $btnMove = $('.btn-movebox'),
		$tweenBox = $('.tween-box1');

	var myBox = new TimelineLite()

	$btnMove.on('click',function(e){
		e.preventDefault();
		myBox.to($tweenBox, 1, {backgroundColor:'#52e252', left:300})
		//.to($tweenBox, 1, {left:300})
		.to($tweenBox, 2, {left:270, width:90, height:90})
	});

	$(".circle-move").on("click",function(){
	//TweenMax.to(".box", 2, { ease: Bounce.easeOut, x:300, rotation:370 });
	//TweenMax.to(".phone img", 2, { left : "10%", rotation:90, transformOrigin: "350px 200px" });
		TweenMax.to(document.getElementById("boxId"), 3, { //대상은 id 값으로 받아야함
			bezier:{
				type:"soft",  // 커브를 돌때 부드럽게 움직임 curviness와 따로 쓰면 될듯
				values:[
					{x:0, y:0},
					{x:300, y:250},
					{x:600, y:0}
				],
			}, ease:Power1.easeInOut, repeat: -1, yoyo: true
		});
	});


	/*-------------------------------------------------------------------------------------------------------------
		## Scroll & Scroll animate
	-------------------------------------------------------------------------------------------------------------*/
	// scroll top button 이동
	$(window).on('scroll', function(e){
		if ($(this).scrollTop() > 0) {
			$('.btn-scrollTop').addClass('active');
		} else {
			$('.btn-scrollTop').removeClass('active');
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
		var tabscroll = $($(this).attr('href'));
		var tabscrollTop = tabscroll.offset().top - 150;
		$('html, body').animate({
			scrollTop: tabscrollTop
		}, 500);
	});

	// scroll animate
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
			// 올릴때 실행
			// if (winH2 < objH2 && direction == 'up'){
			// 	$this.addClass(clsAnimate).addClass($this.attr('data-animate'));
			// 	$this.find('.to-animate').each(function(){
			// 		$(this).addClass(clsAnimate).addClass($(this).attr('data-duration')).addClass($(this).attr('data-animate'));
			// 	})
			// }
			//올렸을때 초기화
			// if (winH < objH2){
			// 	$this.removeClass(clsAnimate).removeClass($this.attr('data-animate'));
			// 	$this.find('.to-animate').each(function(){
			// 		$(this).removeClass(clsAnimate).removeClass($(this).attr('data-duration')).removeClass($(this).attr('data-animate'));
			// 	})
			// }
			//내렸을때 초기화
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


	// mCustom scrollbar
	$(window).on('load',function(){
		$(".mScroll").mCustomScrollbar({
			theme:'dark',
			mouseWheelPixels : 600, // 마우스휠 속도
			scrollInertia : 400 // 부드러운 스크롤 효과 적용
		});
	});



	/*-------------------------------------------------------------------------------------------------------------
		## Modal & Layer popup
	-------------------------------------------------------------------------------------------------------------*/
	// var scrollHeight = 0; // 전역변수로 초기화
	var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

	// layer popup dim
	$('.btn-popup').on('click', function(){
		//scrollHeight = $('body').scrollTop(); // 열렸을떄 scrollTop 체크 (var 쓰지않기. 팝업오픈했을때만사용하기위한 변수)
		$('body').addClass('scrollOff'); //overflow:hidden 추가
		$('.layerPopup').addClass('is-visible');
		funcDimOpen();
		setTimeout(function(){
			$('.layerPopup').addClass('is-active');
		},50);
	});

	$('.btn-popupClose').on('click', function(){
		$('.layerPopup').on(transitionend, function(){
			if ($(this).hasClass('is-active') == false){
				$('.layerPopup').removeClass('is-visible');
			}
		})
		$('.layerPopup').removeClass('is-active, is-visible');
		$('body').removeClass('scrollOff'); // fixed 해지
		//$('body').scrollTop(scrollHeight); //현재 스크롤된값=보이는화면
		funcDimClose();
	});

	// Layer popup 함수로 방법
	// $(document).on('click', '.btn-layer', function(){
	// 	setTimeout(function(){
	// 		$('.layerPopup').addClass('is-active');
	// 	},50);
	// });

	// function layerClose() {
	// 	var $layer = $('.layerPopup');
	// 	setTimeout(function(){ $layer.removeClass('is-active') }, 200);
	// }


	// layer popup cookie
	function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
	}

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
	}

    function popupClose() {
        if ($("input[name='popCheck']").is(":checked") == true) {
            setCookie("close", "Y", 1);
        }
        $('.layerPopup.type2').hide();
    }
    $(document).ready(function () {
        cookiedata = document.cookie;
        if (cookiedata.indexOf("close=Y") < 0) {
            $('.layerPopup.type2').show();
        } else {
            $('.layerPopup.type2').hide();
        }
        $('.btn-popupClose').click(function () {
            popupClose();
        });
	});



	/*-------------------------------------------------------------------------------------------------------------
		## Input - datepicker, range, file
	-------------------------------------------------------------------------------------------------------------*/
	// datepicker
	$('.datepicker').each(function(){
		var id = '#'+$(this).parent().attr('id'); //classic 버전일경우 id로 찾아야함
		var options = {
			selectYears: true,
			selectMonths: true,
			format: 'yyyy/mm/dd',
			formatSubmit: 'yyyy/mm/dd',
			// min: [2015, 7, 14],
			container: id,
			// editable: true,
			closeOnSelect: false,
			closeOnClear: false,
		};
		var $input = $(this).pickadate(options);
		var picker = $input.pickadate('picker');
	});


	// input - range
	var rangeSlider = function(){
	var slider = $('.form-range'),
		range = $('.range-slider'),
		value = $('.range-value');

		$('.range-slider').on('change', function(){
			var $value = $(this).next('.range-value');
			var nowValue = $(this).val();
			$value.html(nowValue);
		});
	};
	rangeSlider();


	// input - file : upload input 추가
    var fileTarget = $('.file-wrap .upload-hidden, .file-wrap2 .upload-hidden');
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
        var fileIndex = $('.file-wrap2').children().length;
        $('.file-wrap2').append(
            '<div class="filebox2">' +
            '<input class="upload-name" value="파일찾기" disabled="disabled">' +
            '<label for="ex-filename' + fileIndex + '">파일찾기</label> <input type="file" id="ex-filename' + fileIndex + '" class="upload-hidden">' +
            '<button type="button" class="btn-file file-minus" onclick="javascript:removeFile(this);">삭제</button>' +
            '</div>');
    });

});


// input - file명 삽입 ajax 호출시
var fileTarget = $('.file-group .input-upload-hidden');
function fileChange(obj){
    if (window.FileReader) { // modern browser
        var filename = $(obj)[0].files[0].name;
    } else { // old IE
        var filename = $(obj).val().split('/').pop().split('\\').pop(); // 파일명만 추출
    }
    // 추출한 파일명 삽입
    $(obj).siblings('.upload-name').val(filename);
}

// input - file : 파일명 하단 리스트 추가 타입
function fileAttach(obj) {
	// 값이 변경되면
	if (window.FileReader) { // modern browser
		var filename = $(obj)[0].files[0].name;
	} else { // old IE
		var filename = $(obj).val().split('/').pop().split('\\').pop(); // 파일명만 추출
	}
	var fileIndex = $('.filebox').children().length;
	$(obj).siblings('.upload-hidden').val(filename);
	$(obj).closest('.form-list').find('.file-wrap').prepend(
		'<div class="filebox">' +
		'<input class="upload-name" value="파일찾기" disabled="disabled">' +
		'<label for="filename' + fileIndex + '">파일찾기</label>' +
		'<input type="file" id="filename' + fileIndex + '" class="upload-hidden" onchange="fileAttach(this)">' +
		'</div>');
	console.log(fileIndex);
	$(obj).closest('.form-list').find('.fileListWrap').append(
		'<div class="fileList">' +
		'<span class="item">'+filename+' <button type="button" onclick="removeFile(this)"><span>삭제</span></button></span>' +
		'</div>');
}

// input: file upload 삭제 호출
function removeFile(minus) {
    var $minus = $(minus);
    $minus.parent().remove();
}


/*$(window).on({
	'scroll mousewheel DOMMouseScroll': function() {
		var scrollTop = $(document).scrollTop();

		if (scrollTop > 20) {
			setTimeout(function() {
				$('.ceo-wrap .bg-ceo').addClass('on');
			}, 300);
			setTimeout(function() {
				$('.ceo-wrap .ceo').addClass('on');
			}, 500);
		}
	}
});*/

// window popup - button
$(function(){
    $('.win-popup').click(function(e){  //버튼을 클릭 했을시 popupOpen 함수 출력
            console.log('click');
            popupOpen();
        });
    function popupOpen(){
        var url= "/orderController/modiftCartPopup"; //팝업창에 출력될 페이지 URL
        var winWidth = 500;
        var winHeight = 500;
        var popupOption= "width="+winWidth+", height="+winHeight; //팝업창 옵션(optoin)
        var myWindow = window.open(url,"TestName",popupOption);
        myWindow.document.write("<h1>"+myWindow.name+"</h1>");
    }
});


/*-------------------------------------------------------------------------------------------------------------
	## Utility Functions
-------------------------------------------------------------------------------------------------------------*/
// dim mask
function funcDimOpen() {
	var $dim = $('.dim-mask');
	setTimeout(function(){ $dim.addClass('is-active') }, 50);
}
function funcDimClose() {
	var $dim = $('.dim-mask');
	setTimeout(function(){ $dim.removeClass('is-active') }, 200);
}


// header fixed - sticky
function funcHeadFixed() {
	var scrollY = $(window).scrollTop();

	if(scrollY > 0 && !$('.header, .m-header').hasClass('fixed')){
		//console.log('scrollY > 0 : '+scrollY);
		$('.header, .m-header').addClass('fixed');
	}else if(scrollY == 0 && $('.header, .m-header').hasClass('fixed')){
		//console.log('scrollY == 0 : '+scrollY);
		$('.header, .m-header').removeClass('fixed');
	}
	//console.log(scrollY);
}


// modal & layer popup 스크롤막기 - mobile ios
function scrollOff(){
   $('body').addClass('scrollOff').on('scroll touchmove mousewheel', function(e){
	  e.preventDefault();
   });
}
function scrollOn(){
   $('body').removeClass('scrollOff').off('scroll touchmove mousewheel');
}


// popup ID 위치정보로 onclick 팝업 띄우기  onclick="openLayer(this, '#chartPopup')"
function closePopup() {
	var layPop = $('#Popup'); // 팝업 id
	layPop.fadeOut();
}
function openPopup(btnObj, modalObj){
	var targetFrame = $(modalObj);
	targetFrameIn = targetFrame.find('iframe'); // custom id 입력

	var layPop = $('#Popup');
	var pos = $('#layerPos').position();    // ID 위치에 레이어를 띄우고자 할 경우, 위치 정보 가져옴
	layPop.css('top', (pos.top) + 'px');    // 레이어 위치 지정
	layPop.css('left', (pos.left) + 'px');
	layPop.fadeIn();
	layPop.focus();
}


// Modal layer popup - onClick ID 처리 : 열기 onclick="popup('popupBasic', this, 'open');"  /  닫기 onclick="popup('popupBasic', this, 'close')"
function popup(id, obj, action, callback){
	var eleModule = '.popup-wrap',
		eleOpener = '.popup-opener',
		eleCloser = '.popup-closer',
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
				console.log('aaaa');
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

// css 팝업 닫기
$(document).on('click','.btn-popupClose', function(e){
	e.preventDefault();
	$(this).closest('.modalPopup').hide('fast',function(){
		$('body').removeClass('scrollOff');
	});
	funcDimClose();
});


// function openPopup(btnObj, modalObj){
// 	var targetFrame = $(modalObj);
// 	targetFrameIn = targetFrame.find('iframe');

// 	$(modalObj).stop().fadeIn('fast')
// 	$('body').addClass('scrollOff');
// 	funcDimOpen();
// }
// function closePopup(btnObj, modalObj){
// 	var targetFrame = $(modalObj);
// 	targetFrameIn = targetFrame.find('iframe');

// 	$(modalObj).stop().fadeOut('fast')
// 	$('body').removeClass('scrollOff');
// 	funcDimClose();
// }




// fade in Out
// $(document).on('click', '.btn-tooltip', function(e){
// 	if ($(this).parent().hasClass('is-active')) {
// 		$(this).parent().removeClass('is-active')
// 		$('.tooltip').fadeOut();
// 	} else {
// 		$(this).parent().addClass('is-active')
// 		$('.tooltip').fadeIn();
// 	};
// });
// $('.btn-tooltip').on('click', function() {
// 	if ($('.tooltip').css('display') == 'none') {
// 		$('.tooltip').fadeIn();
// 	}
// 	else {
// 		$('.tooltip').fadeOut();
// 	}
// });

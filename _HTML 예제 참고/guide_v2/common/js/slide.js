jQuery(document).ready(function(e) {	
	
	// swiper slide type1
	var mainSetTime = null;
	var mainSlide = new Swiper('.main-slide > .swiper-container', {
		autoHeight: true,
		slidesPerView: 'auto',
		setWrapperSize: true,
		speed: 400,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.main-slide .swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			slideChangeTransitionStart: function() {
				var index = this.activeIndex;
				//alert(this.activeIndex);
				console.log('true index num : ' + index);
				$('.animated').removeClass('fadeInUp');
				$('.swiper-slide').eq(index).find('.animated').addClass('fadeInUp');
			}, // slide index on page
		}
	});
	$('.main-slide .swiper-pagination-bullet').append('<span>'); //pagination animation span


	// swiper slide type2
	function historyThumbPositio(){
		var $container = $('.history-list > .history-thumbs');
		var sizeContainer = $container.outerWidth();
		var sizeActive = $container.find('li').first().outerWidth();
		$container.css({'padding-right': sizeContainer-sizeActive});
	}
	if ($('.history-list > .history-thumbs').length){
		historyThumbPositio();
		var setTimeHistoryThumb;
		$(window).on('resize', function(){
			clearTimeout();
			setTimeHistoryThumb = setTimeout(function(){ historyThumbPositio() }, 200);
		})
	}
	$(document).on('click', '.history-list > .history-thumbs .swiper-slide', function(){
		var idx = $(this).index();
		historyThumbs.slideTo(idx);
	})

	// history slide
	var historyThumbs = new Swiper('.history-list > .history-thumbs', {
		spaceBetween: 0,
		slidesPerView: 'auto',
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	var historyTop = new Swiper('.history-list > .history-top', {
		spaceBetween: 10,
		pagination: {
			el: '.history-list .swiper-pagination',
			clickable: false,
		},
		thumbs: {
			swiper: historyThumbs
		}
	});
	
	
	
});

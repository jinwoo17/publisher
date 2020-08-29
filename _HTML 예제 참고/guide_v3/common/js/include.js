var baseURL = './common/';
var include = {
	meta : function(){
		document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
		document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">');
		document.write('<meta name="apple-mobile-web-app-title" content="">');
		document.write('<meta name="apple-mobile-web-app-capable" content="yes">');
		document.write('<meta name="apple-touch-fullscreen" content="yes">');
		document.write('<meta name="keywords" content="">');
		document.write('<meta name="description" content="">');
		document.write('<meta name="format-detection" content="telephone=no">');
	},
	styles : function(){
		document.write('<link rel="stylesheet" href="'+baseURL+'css/base.css">');
		document.write('<link rel="stylesheet" href="'+baseURL+'css/common.css">');
		document.write('<link rel="stylesheet" href="'+baseURL+'css/ui.css">');
		document.write('<link rel="stylesheet" href="'+baseURL+'css/layout.css">');
		document.write('<link rel="stylesheet" href="'+baseURL+'css/libs/animate.css">');
		document.write('<link rel="stylesheet" href="'+baseURL+'css/libs/swiper.min.css">');
	},
	scripts : function(){
		document.write('<script src="'+baseURL+'js/libs/jquery-3.3.1.min.js"></script>');
		document.write('<script src="'+baseURL+'js/libs/jquery-ui.min.js"></script>');
		document.write('<script src="'+baseURL+'js/libs/swiper.min.js"></script>');
		document.write('<script src="'+baseURL+'js/libs/tweenmax/gsap.min.js"></script>');
		document.write('<script src="'+baseURL+'js/libs/tweenmax/CSSRulePlugin.min.js"></script>');
		document.write('<script src="'+baseURL+'js/slide.js"></script>');
		document.write('<script src="'+baseURL+'js/ui.js"></script>');
		document.write('<!--[if lt IE 9]>');
		//document.write('<script src="'+baseURL+'js/libs/html5shiv-printshiv.js"></script>');
		document.write('<![endif]-->');
	},
	skipNav : function(){
		document.write('	<div class="skipNav">');
		document.write('		<a href="#content" title="본문바로가기">본문 바로가기</a>');
		document.write('	</div>');
	},
}
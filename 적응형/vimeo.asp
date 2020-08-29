<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=9, chrome=1">
<meta name="viewport" id="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0">
<title>Vimeo API</title>
<link rel="stylesheet" href="/resorces/css/base.css" type="text/css">
<script src="/resorces/js/libs/jquery-1.12.4.min.js"></script>
<script src="https://player.vimeo.com/api/player.js"></script>
<style>
.wraper {position:relative; width:100%; height:100%;}
.container {max-width:1380px; margin:0 auto; padding:30px;}
.section {margin-bottom:30px;}
.btn-wrap {position:relative; margin-top:20px;}
.btn-wrap.btn-right {text-align:right;}
.btn-wrap button {height:40px; padding:0 15px; border:1px solid #ddd; font-size:14px; line-height:38px; color:#000; background-color:#fff;}
.btn-wrap:after {content:""; display:block; clear:both;}
.video-content:after {content""; display:block; clear:both;}

.video-title {margin-bottom:40px;}
.video-title h1 {font-size:30px;}
.video-view-wrap {display:block; position:relative; float:left; width:85%;}
.video-view {display:block; position:relative; padding-bottom:56.25%; background-color:#000;}
.video-view.fixed {position:fixed; top:0px; left:0px; z-index:20; width:100%; height:100%; padding-bottom:0px;}
.video-view .caption {
	display:none;
	position:absolute;
	top:0px;
	left:0px;
	z-index:10;
	width:100%;
	height:50px;
	font-size:14px;
	line-height:50px;
	color:#fff;
	text-align:center;
	background-color:rgba(0,0,0,0.5);
}
.video-view  iframe {position:absolute; z-index:1; width:100%; height:100%;}
.video-area {display:block; position:relative; float:right; width:15%; padding-left:20px;}
.video-list {overflow:hidden;}
.video-list li {position:relative;}
.video-list li + li {margin-top:20px;}
.video-list li a.video {display:block; position:relative; overflow:hidden; width:100%; max-height:115px; cursor:pointer;}
.video-list a.video img {width:100%; height:auto;}

.video-list li a.video .duration {
	display:inline-block;
	position:absolute;
	bottom:0px;
	right:0px;
	width:60px;
	font-size:12px;
	line-height:20px;
	color:#fff;
	text-align:center;
	background-color:#000;
}


@media all and (max-width:1024px){
    .container {padding:10px;}

    .video-view-wrap, .video-area {float:none;}
    .video-view-wrap {width:auto;}
	.video-view-wrap.landscape {margin:0 -10px;}

    .video-area {width:100%; margin-top:20px; padding-left:0px;}
    .video-list {width:auto; margin:0 -5px;}
    .video-list li {float:left; width:20%; padding:0 5px;}
    .video-list li + li {margin-top:0px;}

}
</style>
<script>
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

var videoPlayer;

// var vimeoPlayer = {
// 	'load': function(videoId) {
// 		var options = {
// 			autoplay : false,
// 			id: videoId,
// 			//url: "https://vimeo.com/280815263"
// 		}

// 		videoPlayer = new Vimeo.Player('video-view', options);
// 	},
// 	'play': function() {

// 		console.log('play');
// 	},
// 	'stop': function() {
// 		console.log('stop');
// 	}
// }

function setVideo(videoId, target, saveTime){
	var totalDuration;
	var currentTime = 0;
	var lastPlayTime = 0;
	var pauseCount = 0;
	var cuePointPos = [21, 21.1, 100]; // Percent value

	var options = {
		autoplay: false,
		id: videoId,
		//controls:false
		//url: "https://vimeo.com/280815263"
	};

	videoPlayer = new Vimeo.Player(target, options);

	// Event Loaded
	videoPlayer.on('loaded', function(){
		videoPlayer.getDuration().then(function(duration){
			totalDuration = duration;

			console.log('Total Duration:' + totalDuration + 'sec');

			if (saveTime !== 0) {
				videoPlayer.setCurrentTime(saveTime);
				currentTime = saveTime;
				lastPlayTime = saveTime;
			}

			for (i=0; i < cuePointPos.length; i++){
				var cuePoint = totalDuration * (cuePointPos[i]/100);
				var cueMsg = "<div class='caption'>현재까지 강의시간까지 중간 저장되었습니다.</div>";

				if (i == (cuePointPos.length-1)) {
					cueMsg = "<div class='caption'>총 강의시간까지 저장되었습니다. 수고하셨습니다!</div>";
				}

				if (saveTime < cuePoint) {
					console.log('cuePoint:' + cuePoint);

					//Add Cuepoint For Save
					videoPlayer.addCuePoint(cuePoint, {
						"cues": cueMsg
					}).then(function(id){
						console.log('cuepoint id:' + id +'/saveTime:' + cuePoint);
					}).catch(function(error) {
						switch (error.name) {
							case 'UnsupportedError': // cue points are not supported with the current player or browser
								break;
							case 'RangeError': // the time was less than 0 or greater than the video’s duration
								break;
							default: // some other error occurred
								break;
						}
					});
				}
			}

		});

	});

	// Event Play
	videoPlayer.on('play', function(data){
		//console.log('event:play');

        videoPlayer.getFullscreen().then(function(fullscreen) {
			if (!fullscreen) {
				$(window).bind("orientationchange", function(){
					var orientation = window.orientation;
					var videoPos = $(target).offset().top;
					//console.log(orientation);

					if (orientation == 90) {
						//console.log($(window).width());
						$(".video-view-wrap").addClass("landscape");
						$(".video-view").css('padding-bottom', $(window).width() - 15 + 'px');

						setTimeout(function(){$(window).scrollTop(videoPos)}, 250);
					} else {
						$(".video-view-wrap").removeClass("landscape");
						$(".video-view").css('padding-bottom','56.25%');
					}
				});
			}
		});

	});

	// Event Pause
	videoPlayer.on('pause', function(data){
    	console.log('event:pause');
	});

	// Event Timeupdate
	videoPlayer.on('timeupdate', function(data){
		videoPlayer.getCurrentTime().then(function(seconds){
			currentTime = seconds;
			//console.log('timeupdate:' + currentTime);
		});
	});

	// Event Seeking
	videoPlayer.on('seeking', function(data){
		//console.log('seeking duration:' + data.duration + 'sec');
		//console.log('seeking percent:' + data.percent +'%');
		//console.log('seeking seconds:' + data.seconds + 'sec');

		if (data.seconds >= currentTime) { // lastPlayTime업데이트는 currentTime 보다 seekTime이 클때만 적용
			if (lastPlayTime <= currentTime) { // currentTime이 lastPlayTime보다 클때 lastPlayTime을 업데이트 한다.
				pauseCount = 0;
				videoPlayer.pause().then(function() {
					if (pauseCount == 0) {
						lastPlayTime = currentTime;
					}
				});
			}
		}

		console.log('lastPlayTime:' + lastPlayTime);
	});
	// Event Seeked
	videoPlayer.on('seeked', function(data){
		//console.log('seeked duration:' + data.duration + 'sec');
		//console.log('seeked percent:' + data.percent +'%');
		//console.log('seeked seconds:' + data.seconds + 'sec');

		if (data.seconds > lastPlayTime) {
			pauseCount = 1;

			if (currentTime > lastPlayTime) {
				videoPlayer.setCurrentTime(lastPlayTime);
			} else {
				videoPlayer.setCurrentTime(currentTime);
			}
		}

		//console.log(pauseCount);
	});


	// Event Cuepoint
	videoPlayer.on('cuepoint', function(data){
		console.log('event:cuepoint');
		console.log(data);
		//console.log(data.id);
		//console.log(data.time);

		$(".video-view").append(data.data.cues);
		saveVideo(data.id, data.time);
	});

	// Event Ended
	videoPlayer.on('ended', function(){
		console.log('ended');
	});
}

function saveVideo(cuePointId, cuePoint){
	var videoId, saveTime;

	$(".video-view").find(".caption").fadeIn('fast');

	videoPlayer.getCurrentTime().then(function(seconds){
		saveTime = seconds;

		videoPlayer.getVideoId().then(function(id){
			videoId = id;
			console.log('Save videoId:' + videoId);
		});

		if (cuePointId) {
			console.log('cuePointId:' + cuePointId);

			videoPlayer.removeCuePoint(cuePointId).then(function(id) {
				console.log('removeCuePoint');

				setTimeout(function(){
					$(".video-view").find(".caption").fadeOut('fast', function(){
						console.log('caption remove');
						$(this).remove();
					})
				}, 2000);
			});
		}

		if (cuePoint) {
			saveTime = cuePoint;
		}

		//Ajax Save
		// $.ajax({
		// 	url: saveUrl,
		// 	type:'POST',
		// 	success: function(data){
		// 	},
		// 	error: function(xhr, status, error){
		// 		alert(xhr.responseText);
		// 	}
		// });
		console.log('save Time:' + saveTime);
	});

}

function getTimeStr(seconds){
	var hour, min, sec

	hour = parseInt(seconds/3600);
	min = parseInt((seconds%3600)/60);
	sec = seconds%60;

	if (hour.toString().length==1) hour = "0" + hour;
	if (min.toString().length==1) min = "0" + min;
	if (sec.toString().length==1) sec = "0" + sec;

	return hour + ":" + min + ":" + sec;
}

var vTitle, vDuration, vThumb;
function getVideoInfo(videoId, el) {
    var videoData =  "http://vimeo.com/api/v2/video/" + videoId +".json";

    $.ajax({
        url: videoData,
		type:'GET',
		dataType:'jsonp',
        success: function(data){
            // console.log(data[0]);

            vTitle = data[0].title;
            vDuration = data[0].duration;
            vThumb = data[0].thumbnail_medium;

            //console.log('Video Title:' + vTitle);
            //console.log('Video Duration:' + vDuration);
            //console.log('Video Thumbnail:' + vThumb);

			$(el).find('.video').append("<img src='"+ vThumb +"' alt='" + vTitle +"'>");
            $(el).find('.video').append("<div class='duration'>"+ getTimeStr(vDuration) +"</div>");
        },
		error: function(xhr, status, error){
			alert(xhr.responseText);
		}
    });
}

function popVideo(popId, saveTime){
	setVideo(popId, 'lecture', saveTime);
}

function setVideoList() {
    var htmlStr;

    $(".video-list li").each(function (indexInArray, valueOfElement) {
        var videoId = $(this).find("a").data("vimeoId");

        getVideoInfo(videoId, $(this));
    });
}

// Modal Popup Module
var popModal = (function($){
	var $popModal;
	var inlineModule,
		ajaxModule,
		closeModul;
	var $btn;
	var $pop;
	var popMode = null;
	//var trapFocus = true;

	function appendHTML(popId) {
		$("body").append('<div id="' + popId + '" class="pop-modal"></div>');
	}

	function trapFocus(){
		$pop.find(".pop-wrapper").focus();
		$pop.find(".pop-wrapper:visible .btn-pop-close").on('blur', function(){
			console.log('popup focus out');
			$(".pop-wrapper").focus();
		});
	}

	inlineModule = function(btn, target, callback){
		var popWidth = $(target).find(".pop-wrapper").data("width");

		popMode = "inline";

		if (btn) $btn = $(btn);
		if (target) $pop = $(target);

		if (popWidth) {
			$pop.find(".pop-wrapper").css('max-width', popWidth +'px');
		}

		$pop.fadeIn('fast', function(){
			trapFocus();

			if (callback){
				eval(callback());
			}
		});
	};

	ajaxModule = function(btn, popId, callback, popUrl){
		var sUrl;

		popMode = 'ajax';

		if (btn) {
			$btn = $(btn);

			if ($btn.is("a")) {  // A태그 인 경우
				sUrl = $btn.attr("href");
			} else {  // Button태그인 경우
				sUrl = $btn.attr("data-href");;
			}
		}

		if (popUrl){
		 	sUrl = popUrl;
		}
		appendHTML(popId);

		if (popId) $pop = $("#" + popId);

		$pop.load(sUrl, function(){
			var popWidth = $pop.find(".pop-wrapper").data("width");

			if (popWidth) {
				$pop.find(".pop-wrapper").css('max-width', popWidth +'px');
			}

			$(this).fadeIn('fast', function(){
				trapFocus();

				if (callback){
					eval(callback);
				}
			});
		});
	};

	closeModule = function(closeBtn, target, callback){
		var $target;

		if (target){
			$pop = $(target);
		} else {
			$pop = $(closeBtn).closest(".pop-modal");
		}

		$pop.fadeOut('fast', function(){
			console.log(popMode);

			if (popMode == "ajax") {
				$pop.remove();
			}

			if (callback){
				eval(callback());
			}

			$btn.focus();
		})
	};

	// Click Overlay
	$(document).on('click', '.pop-modal', function(e){
		//console.log($(".pop-wrapper").has(e.target).length);

		if ($pop.find(".pop-wrapper").has(e.target).length === 0){
			$pop.fadeOut('fast', function(){
				if (popMode == 'ajax'){
					$pop.remove();
				}
			});
		};
	});

	// Esc Key Popup Close
	$(document).keydown(function(e){
		if (e.keycode == 27 || e.which == 27) {
			//console.log('esc key');
			closeModule($btn, $pop);
		}
	});

	return {
		inline:inlineModule,
		ajax:ajaxModule,
		close:closeModule
	}
}(jQuery));

function setLoginFocus(){
	$(".login-wrap").find("#sId").focus();
}
function openLogin(){
	popModal.ajax(null, 'Pop_Login', 'setLoginFocus()', 'login.html');
}

$(document).ready(function(e){
    setVideoList();

	setVideo('280815263','video-view', 2508);

	openLogin();

	$(".video-list li a").on('click', function(e){
		var item = $(this).data("vimeoId");

		//player(item);
		videoPlayer.loadVideo(item);
	});

	// 주소창 없애기 테스트
	// $(".wrapper").css('height','200%');

	// $(window).on('load',function(e){

	// 	setTimeout(function(){$(window).scrollTop(70);},1000);
	// });
});
</script>
</head>

<body>
<div class="wrapper">
	<div class="container">
		<!-- main-banner -->
		<div class="video-content">
			<div class="video-title">
				<h1>비디오 타이틀</h1>
				<div style="margin-top:20px;">
					<a href="#Pop_Video" onClick="javascript:popModal.inline(this,'#Pop_Video', null);">Inline 팝업창</a>
					<a href="popup.html" onClick="javascript:popModal.ajax(this,'Pop_Video2', null); return false;" style="margin-left:40px">ajax 팝업창</a>
					<button type="button" data-href="popup.html" onClick="javascript:popModal.ajax(this,'Pop_Video2', 'popVideo(280815263, 2508)'); return false;" style="margin-left:40px">강의 동영상</a>
				</div>
			</div>
			<div class="video-view-wrap">
				<div id="video-view"  data-vimeo-defer class="video-view"></div>
				<div class="btn-wrap btn-right">
					<button type="button" onClick="javascript:saveVideo();" class="btn_save">저장하기</button>
				</div>
			</div>

			<div class="video-area">
				<ul class="video-list">
					<li class="is-active">
						<a data-vimeo-id="355789315" class="video"></a>
						<input type="hidden" name="sTitle" id="sTitle0" class="title-list" value="언어치료 홍보영상01">
					</li>
					<li>
						<a data-vimeo-id="434357706" class="video"></a>
						<input type="hidden" name="sTitle" id="sTitle1" class="title-list" value="언어치료 홍보영상02">
					</li>
					<li>
						<a data-vimeo-id="434357706" class="video"></a>
						<input type="hidden" name="sTitle" id="sTitle1" class="title-list" value="언어치료 홍보영상02">
					</li>
					<li>
						<a data-vimeo-id="434357706" class="video"></a>
						<input type="hidden" name="sTitle" id="sTitle1" class="title-list" value="언어치료 홍보영상02">
					</li>
					<li>
						<a data-vimeo-id="434357706" class="video"></a>
						<input type="hidden" name="sTitle" id="sTitle1" class="title-list" value="언어치료 홍보영상02">
					</li>
				</ul>
			</div>


		</div>
		<!-- //main-banner -->

	</div>
	<!-- //contentsWrap  -->
</div>
<style>
.pop-modal {display:none; position:fixed; top:0px; left:0px; z-index:100; width:100%; height:100%; background-color:rgba(0,0,0,0.6);}
.pop-wrapper {
	display:block;
	position:relative;
	top:50%;
	left:0px;
	z-index:10;
	width:100%;
	margin:0 auto;
	padding-top:70px;
	transform:translateY(-50%);
	background-color:#fff;
}
.pop-container {position:relative; padding:30px; max-height:500px; overflow-Y:auto;}
.pop-header {position:absolute; top:0px; left:0px; width:100%; height:70px; padding-left:30px; background-color:#ddd;}
.pop-header h2 {font-size: 30px; line-height:70px; color:#000;}
.pop-content {position:relative;}
.pop-wrapper .btn-pop-close {display:inline-block; position:absolute; top:10px; right:20px; z-index:10; width:40px; height:40px; background:transparent;}
.pop-wrapper .btn-pop-close span {display:inline-block; overflow:hidden; width:0px; height:0px; font-size:0px;}
.pop-wrapper .btn-pop-close:before {content:"X"; display:inline-block; font-size:30px; color:#333;}
.pop-modal .pop-footer {position:relative; overflow:hidden; width:0px; height:0px;}
</style>
<div id="Pop_Video" class="pop-modal">
	<div class="pop-wrapper" tabindex="-1" data-width="600">
		<div class="pop-header">
			<h2>팝업</h2>
		</div>
		<div class="pop-container">
			<div class="pop-content">
				<a href="#">포커스 테스트</a><br><br>
				테스트<br><br>
				테스트<br><br>
				테스트<br><br>
				테스트<br><br>
				테스트<br><br>
			</div>
		</div>
		<button type="button" onClick="javascript:popModal.close(this);" class="btn-pop-close"><span>팝업창 닫기</span></button>
		<div class="pop-footer" tabindex="0"></div>
	</div>
</div>
</body>
</html>

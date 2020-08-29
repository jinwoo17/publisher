<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=9, chrome=1">
<meta name="viewport" id="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0">
<title>Vimeo API</title>
<link rel="stylesheet" href="/resorces/css/base.css" type="text/css">
<script src="/resorces/js/libs/jquery-1.12.4.min.js"></script>
<script src="/resorces/js/libs/jquery.easing.min.js"></script>
<script src="https://player.vimeo.com/api/player.js"></script>
<style>
.wraper {position:relative; width:100%; height:100%;}
.container {max-width:1380px; margin:0 auto; padding:30px;}
.section {margin-bottom:30px;}
.title h1 {font-size:20px;}
.btn-wrap .btn-pop {display:inline-block; position:relative; width:100px; height:30px; line-height:30px; border:1px solid #333; text-align:center;}

/* Popup */
.pop-modal {display:none; position:fixed; top:0px; left:0px; z-index:100; width:100%; height:100%; background-color:rgba(0,0,0,0.6);}
.pop-wrapper {display:block; position:relative; top:50%; left:0px; z-index:10; width:600px; margin:0 auto; padding-top:70px; transform:scale(1) translateY(-50%); background-color:#fff; transition:all ease 0.2s;}
.pop-wrapper.zoomOut {top:50%; transform:scale(0.5) translateY(-50%);}
.pop-wrapper:focus{outline:0;}
.pop-container {position:relative; padding:30px; max-height:500px; overflow-Y:auto;}
.pop-header {position:absolute; top:0px; left:0px; width:100%; height:70px; padding-left:30px; background-color:#ddd;}
.pop-header h2 {font-size: 30px; line-height:70px; color:#000;}
.pop-content {position:relative;}
.pop-wrapper .btn-pop-close {display:inline-block; position:absolute; top:10px; right:20px; z-index:10; width:40px; height:40px; background:transparent;}
.pop-wrapper .btn-pop-close span {display:inline-block; overflow:hidden; width:0px; height:0px; font-size:0px;}
.pop-wrapper .btn-pop-close:before {content:"X"; display:inline-block; font-size:30px; color:#333;}
.pop-modal .pop-footer {position:relative; overflow:hidden; width:0px; height:0px;}

/* login */
.login-wrap {position:relative;}
.login-wrap .login-container {position:relative; margin-bottom:20px; padding-right:110px;}
.login-wrap .login-input li {margin-top:10px;}
.login-wrap .login-input li:first-child {margin-top:0px;}
.login-wrap .input-login {width:100%; height:40px; padding:0 15px; border:1px solid #ddd;}
.login-wrap .btn_login { position:absolute; top:0px; right:0px; width:100px; height:90px; font-size:28px; line-height:90px; color:#fff; text-align:center; background-color:#ff6600;}

</style>
<script>
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                               모달 팝업
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Modal Popup Module
var popModal = (function($){
    var ajaxModule,   //ajax변수
        closeModul;   //close변수
    var $btn;
    var $pop;
    var popMode = null;

    function appendHTML(popId) {    //태그 추가시키는 함수
        $("body").append('<div id="' + popId + '" class="pop-modal"></div>');    //append안의 내용을 body태그 아래에 추가
    }

    function trapFocus(){     //포커스 관련 팝업(팝업 내에서만 포커스 이동)
        $pop.find(".pop-wrapper").focus();
        $pop.find(".pop-wrapper:visible .btn-pop-close").on('blur', function(){    //blur - 포커스를 잃었을 때
            console.log('popup focus out');
            $(".pop-wrapper").focus();    //포커스가 빠져나가지않고 다시 팝업창으로 위치
        });
    }

//ajax방식
    ajaxModule = function(btn, popId, callback, popUrl){
        var sUrl;   //sUrl 변수 초기화

        popMode = 'ajax';      //onClick="popModal.ajax();"

        if (btn) {
            $btn = $(btn);
            if ($btn.is("a")) {  // A태그 인 경우
                sUrl = $btn.attr("href");        //a태그의 hreft주소를 sUrl로 지정
            } else {  // Button태그인 경우
                sUrl = $btn.attr("data-href");;    //button태그의 data-href 주소를 sUrl로 지정
            }
        }

        if (popUrl){
            sUrl = popUrl;
        }
        appendHTML(popId);  //function appendHTML(popId)함수 호출
                            //ㄴ$("body").append('<div id="' + popId + '" class="pop-modal"></div>');

        if (popId) $pop = $("#" + popId);    //popID에 #붙인다.

        $pop.load(sUrl, function(){     //sUrl에 해당하는 주소를 load하면

            $(this).fadeIn('fast', function(){   //팝업fadeIn
                trapFocus();    //trapFocus함수실행

                if (callback){
                    eval(callback);
                }
            });
        });
    };

    closeModule = function(closeBtn, callback){
        if (!$pop){
            $pop = $(closeBtn).closest(".pop-modal");  //closet- 원하는 부모 요소를 반환 (많은 부모요소 중 pop-modal을 가져옴)
        }

        $pop.fadeOut('fast', function(){    //팝업 fadeOut
            //console.log(popMode);
            $pop.find(".pop-wrapper").removeClass("zoomOut");

            if (popMode == "ajax") {   //ajax방식이면
                $pop.remove();   //append로 추가된거 제거
            }

            if (callback){
                eval(callback());
            }

            if ($btn) $btn.focus();
        })
    };

    // Click Overlay  -- 모달창 밖에 클릭했을 때도 닫히도록
    $(document).on('click', '.pop-modal', function(e){
        if ($pop.find(".pop-wrapper").has(e.target).length === 0){
            closeModule();
        };
    });

    // Esc Key Popup Close
    $(document).keydown(function(e){
        if (e.keycode == 27 || e.which == 27) {   //esc키 눌렀을 때 팝업창 닫히도록
            //closeModule($btn, $pop);    원래 이거에서
            //수정,,,포커스 있을때는 esc눌러도 안닫힘
            if ($pop.find(".pop-wrapper").has(e.target).length === 0){
                closeModule();
            };
        }
    });

    return {
        ajax:ajaxModule,        //popModal.ajax()로 호출
        close:closeModule       //popModal.close()로 호출
    }
}(jQuery));
</script>
</head>

<body>
<div class="wrapper">
    <div class="container">
        <!-- main-banner -->
        <div class="content">
            <div class="title">
                <h1>ajax방식 팝업</h1>
            </div>
            <div class="btn-wrap" style="margin-top:20px;">
                <!-- ajax호출 방식 -->
                <!-- a태그, button태그 -->
                <a href="../ajax_load/popup.html" role="button" onClick="javascript:popModal.ajax(this,'Pop_Video2', null); return false;" class="btn-pop">ajax 팝업창 </a>
                <button type="button" data-href="../ajax_load/login.html" onClick="javascript:popModal.ajax(this,'login_pop', null); return false;" class="btn-pop" style="margin-left:40px">ajax 로그인 팝업</button>
            </div>
        </div>
    </div>
    <!-- //main-banner -->
</div>
<!-- //contentsWrap  -->
</div>

</body>
</html>

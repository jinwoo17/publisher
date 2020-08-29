<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=9, chrome=1">
<meta name="viewport" id="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0">
<title>Layer PopUp</title>
<link rel="stylesheet" href="/resorces/css/base.css" type="text/css">
<script src="/resorces/js/libs/jquery-1.12.4.min.js"></script>
<script src="/resorces/js/libs/jquery.easing.min.js"></script>
<script src="https://player.vimeo.com/api/player.js"></script>
<style>
.wraper {position:relative; width:100%; height:100%;}
.container {max-width:1380px; margin:0 auto; padding:30px;}
.section {margin-bottom:30px;}
.title h1 {font-size:20px;}
.btn-wrap .btn-pop {display:block; position:relative; width:100px; height:30px; line-height:30px; border:1px solid #333; text-align:center;}

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
</style>
<script>

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                               모달 팝업
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Modal Popup Module
var popModal = (function($){
    // 변수설정
    var inlineModule,   //inline변수   ->  변수역할, 속성
        closeModul;   //close변수
    var $btn;
    var $pop;
    var popMode = null;
    //var trapFocus = true;

    function trapFocus(){     //포커스 관련 팝업(팝업 내에서만 포커스 이동)
        $pop.find(".pop-wrapper").focus();
        $pop.find(".pop-wrapper:visible .btn-pop-close").on('blur', function(){    //blur - 포커스를 잃었을 때
            console.log('popup focus out');
            $(".pop-wrapper").focus();    //포커스가 빠져나가지않고 다시 팝업창으로 위치
        });
    }

//inline방식
    inlineModule = function(btn, popId, callback){   //inline방식 함수
        // var popWidth = $(target).find(".pop-wrapper").data("width");

        popMode = "inline";    //popMode가 inline (호출하려면 onClick="popModal.inline();")

        if (btn) $btn = $(btn);
        // if (target) $pop = $(target);
        if (popId) $pop = $("#" + popId);    //popID에 #붙인다.

        $pop.fadeIn('fast', function(){   //팝업 fadeIn
            trapFocus();   //trapFocus함수 실행

            if (callback){     //콜백함수일 때 - $('선택자').이벤트(속도, function(){구문});
                eval(callback());   //eval- 문자열을 코드로 인식,바꾸는 것
            }
        });
    };

    closeModule = function(closeBtn, callback){
        if (!$pop){
            $pop = $(closeBtn).closest(".pop-modal");  //closet- 원하는 부모 요소를 반환 (많은 부모요소 중 pop-modal을 가져옴)
        }

        $pop.fadeOut('fast', function(){    //팝업 fadeOut
            //console.log(popMode);
            $pop.find(".pop-wrapper").removeClass("zoomOut");

            if (callback){
                eval(callback());
            }

            if ($btn) $btn.focus();
        })
    };

    // Click Overlay   -- 모달창 밖에 클릭했을 때 닫히도록할 경우
    $(document).on('click', '.pop-modal', function(e){
        //console.log($(".pop-wrapper").has(e.target).length);
        if ($pop.find(".pop-wrapper").has(e.target).length === 0){
            closeModule();
        };
    });

    // Esc Key Popup Close
    $(document).keydown(function(e){
        if (e.keycode == 27 || e.which == 27) {   //esc키 눌렀을 때 팝업창 닫히도록
            //closeModule($btn, $pop);  원래 이거에서
            //수정,,,포커스 있을때는 esc눌러도 안닫힘
            if ($pop.find(".pop-wrapper").has(e.target).length === 0){
                closeModule();
            };
        }
    });

    return {            //return값으로 함수를 사용
        inline:inlineModule,        //popModal.inline() 로 호출
        close:closeModule           //popModal.close()로 호출
    }
}(jQuery));    //여기까지 popModal 관련

</script>
</head>

<body>
<div class="wrapper">
    <div class="container">
        <section class="content">
            <div class="title">
                <h1>inline방식 팝업</h1>
            </div>
            <div class="btn-wrap" style="margin-top:20px;">
                <!-- inline방식 -->
                <button type="button" class="btn-pop" onClick="javascript:popModal.inline(this,'layer_pop', null);">Inline 팝업창</a>
            </div>
        </section>
    </div>
</div>

<!-- inline방식에서는 팝업이 나와야하는 페이지에 팝업 코드를 적어줘야한다. -->
<div id="layer_pop" class="pop-modal">
    <div class="pop-wrapper" tabindex="-1">
        <div class="pop-header">
            <h2>팝업</h2>
        </div>
        <div class="pop-container">
            <div class="pop-content">
                <a href="#">포커스 테스트</a><br />
                <a href="#">포커스 테스트</a><br />
                <a href="#">포커스 테스트</a><br />
                <a href="#">포커스 테스트</a>
            </div>
        </div>
        <button type="button" onClick="javascript:popModal.close(this);" class="btn-pop-close"><span>팝업창 닫기</span></button>
        <div class="pop-footer" tabindex="0"></div>
    </div>
</div>

</body>
</html>

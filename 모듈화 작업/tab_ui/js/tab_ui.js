/*-------------------------------------------------------------------------------------------------------------
	*필수 클래스명*
	tabs, tab-list
-------------------------------------------------------------------------------------------------------------*/
function tabUI(){
    var $tab_button = $('.tab-list > li > button[role="tab"]');

    $tab_button.on({
       // 'click': function(){
       //     var $this = $(this),
       //         $idx = $this.parent('li').index(),
       //         $content = $this.parents('.tab-list').next('.tab-contents').children('div[role="tabpanel"]').eq($idx);
       //     $this.parent('li').addClass('is-active');
       //     $this.parent('li').siblings().removeClass('is-active');
            
            /* WAI-ARIA Apply */
            // $this.attr({'aria-selected':'true', 'tabindex':'0'});
            // $this.parent('li').siblings().children().attr({'aria-selected':'false', 'tabindex':'-1'});
            
            /* content */
            // $content.removeClass('unvisual').attr({'aria-hidden':'false', 'tabindex':'0'});
            // $content.siblings().addClass('unvisual').attr({'aria-hidden':'true', 'tabindex':'-1'});
        // },
        'keyup': function(e){
            var $this = $(this),
                $keyCode = e.keyCode || e.which; //키보드 코드값
            
            if($keyCode == 39 || $keyCode == 40){ //오른쪽 방향키 이거나 아래 방향키
                //브라우저의 기본 동작을 취소한다.
                // e.preventDeFault();
                //다음 tab 요소에 ara-selected=true로 지정하고
                //형제 요소중에 자신 tab 이외의 나머지 tab 요소들을 aria-selected=false로 지정한다.
                $this.parent('li').next().attr('aria-selected', true).siblings().attr('aria-selected', false);

                var $selectedID = '#' + $this.parent('li').next().children().attr('aria-controls');
                //자신은 보이게하고 다른 tabpanel은 보이지 않게 지정한다.
                $($selectedID).removeClass('unvisual').siblings().addClass('unvisual');
                $this.parent('li').next().children().focus();

                //마지막 요소에서 오른쪽 방향키나 아래 방향키를 눌렀을 경우
                //if($this.parent('li').next().prevObject.attr('aria-controls') == 'panel-03'){
                //    //tab, tabpanel, focus 모두 처음으로 이동
                //    $('#tab-01').attr('aria-selected', true).parent('li').siblings().attr('aria-selected', false);
                //    $('#panel-01').removeClass('unvisual').siblings().addClass('unvisual');
                //    $('#tab-01').focus();
                //}
            }
        }
    });

};

$(document).ready(function(){
    tabUI();
});
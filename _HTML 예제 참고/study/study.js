/* Variables */
var transitionend = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend';

$(document).on('click', function(){
    console.log('click');
})

$(function() {

     

});

// 호출 방식
function uiInit(){
    // 설정이 필요한 함수들
    //tabInit();
    //accorInit();
    //sticky();
}

function accodiAction (id) {
    var $accodi = $('#' + id);
    console.log(id)
    if ($accodi.hasClass('is-active')){
        $accodi.removeClass('is-active');
        $accodi.find('.accodi-container').stop().slideUp(350);
    }else{
        $accodi.siblings().find('.accodi-container').stop().slideUp(350);
        $accodi.siblings().removeClass('is-active');
        $accodi.addClass('is-active');
        $accodi.find('.accodi-container').stop().slideDown(350);
    }
}
$(document).on('click','.accodi-header > .accodi-open', function(){
    var id = $(this).closest('.accodi').attr('id');
    accodiAction(id);
})

////////////////////////////////////////////////////////////////////////////

// function tabEvent () {
//     $(document).on('click', '.tab ul > li > a', function(){
//         var id = $(this).attr('href');
//         tabAction(id);
//     })
// }
$(document).on('click', '.tab ul > li > a', function(){
    var id = $(this).attr('href');
    tabAction(id);
});

function tabAction (id){
    var $id  = $(id);
    $id.show().siblings().hide();
    $id.attr('title', '');
    $id.attr('title', '');
    $id.attr('title', '');
}
// function tabInit (){
//     if ($('tab').length){
//         console.log('init 이 필요할대, 요소에 속성을 부여하는 경우');
//     }
// }




// $(function(){
//     uiInit();
// });


// 아코디언실행
    // 아코디언 클릭
    // 클릭한 버튼의 헤더를 찾아서 활성화 한다
    // 클릭한 버튼의 바디를 찾아서 활성화 한다
    // 활성화된 아코디언을 제외한 나머지를 비활성화 한다





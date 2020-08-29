$(function(){
    
    // paging scroll
    var link = $('.slide-paging .paging-link');
    link.on('click',function(e){
        
        //href 속성을 통해, section id 타겟을 잡음
        var target = $($(this).attr('href')); 
        
        //target section의 좌표를 통해 top 이동
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
        
        //active 클래스 부여
        $(this).addClass('is-active');

        //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
        e.preventDefault();
    });
    
    $(window).on('scroll',function(){
        slidePosition();
    });

    function slidePosition(){
        $('.slide-content').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 20){
                link.removeClass('is-active');
                $('.slide-paging').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('is-active');
            }
        });
    }
    slidePosition();

});
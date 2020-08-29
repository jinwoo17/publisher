$(document).ready(function(){
    $('body').on('mousemove',function(e){
      var $bg = $('body');
      var posX = ($(window).width()/2 - e.pageX)/50 - $(window).width()*0.1 ;
      var posY = ($(window).height()/2 - e.pageY)/50 - $(window).height()*0.1 ;
      console.log(posX, posY)
      var bgPos = posX +"px "+ posY+"px"
      $bg.css({backgroundPosition: bgPos })
    })
})

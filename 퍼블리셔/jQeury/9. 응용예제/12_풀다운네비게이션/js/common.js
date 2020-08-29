$(document).ready(function() {

    $("#gnb").on('mouseenter', function() {
        $("#header").stop().animate({ height: 500 })
        $("#header").addClass("over")
    })
    $("#gnb").on('mouseleave', function() {
        $("#header").stop().animate({ height: 100 })
        $("#header").removeClass('over')
    })
})

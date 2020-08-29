$(document).ready(function() {
    $(".snb").hide();
    $(".over").parent().show();
    $(".lnb > li").on('mouseenter', function() {
      $('.over').parent().hide();
      $(this).children('.snb').show();
    })
    $(".lnb > li").on('mouseleave', function() {
        $(this).children('.snb').hide();
        $(".over").parent().show();
    })
})

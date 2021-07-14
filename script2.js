$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#strzal').fadeIn();
    } else {
    $('#strzal').fadeOut();
    }
    });
    $('#strzal').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
    });
$(document).ready(function () {

    new WOW().init();

    $(".burguger-nav").on('click',function(){
        $(".container nav ul").toggleClass("open");
    });

    $('.js-wp-2').waypoint(function (direction) {
        $('.js-wp-2').addClass('animated slideInUp')
    }, {
        offset: '70%'
    });

    $('.js-wp-3').waypoint(function (direction) {
        $('.js-wp-3').addClass('animated fadeIn')
    }, {
        offset: '70%'
    });
    $("#box").animate({height: "300px"});

    $(".iPhone-power-button").delay(2300).animate( {botttom: "+=-3"}, 300);
    $(".iPhone-power-button").delay(300).animate( {top: "+=-3"}, 100);

});
$(document).ready(function(){
    $("ul a").click(function(event){
        event.preventDefault();
        console.log(event);
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body, html").animate({scrollTop: top}, 800);
    });
    if ($(window).scrollTop() > $(".header").height() / 2){
        $(".header").css({"background": "#441EA1"});
    } else {};
    $(window).scroll(function(){
        if ($(window).scrollTop() > $(".header").height() / 2){
            $(".header").css({"background": "#441EA1"});
        } else {
            $(".header, .header *").removeAttr("style");
        };
    });
    $(".nav").css("display", "block");
    $(".nav").css("right", "-" + $(".nav").width() + "px");
    $(".header__nav-btn").click(function(){
        $(this).toggleClass("header__nav-btn_active");
        $(".nav").toggleClass("nav_active");
    });
    $(".partners__slider").slick({
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $(".integrations__slider").slick({
        slidesToShow: 2,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
});
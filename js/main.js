$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 400);
    return false;
});

$(window).load(function(){
    $('.sidenav').liLanding();
});

//  слайдер b01

$('.b01__slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.b01 .nav-prev').click(function(){
    $('.b01__slider').slick('slickPrev');
});

$('.b01 .nav-next').click(function(){
    $('.b01__slider').slick('slickNext');
});


//  слайдер b02

$('.b02__slider').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});


//  слайдер b04

$('.b04__slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.b04 .nav-prev').click(function(){
    $('.b04__slider').slick('slickPrev');
});

$('.b04 .nav-next').click(function(){
    $('.b04__slider').slick('slickNext');
});


//  слайдер b06

$('.b06__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.b06 .nav-prev').click(function(){
    $('.b06__slider').slick('slickPrev');
});

$('.b06 .nav-next').click(function(){
    $('.b06__slider').slick('slickNext');
});


$('.b06__window-close').click(function(){
    $('.b06__window').hide();
});



$(document).ready(function () {
    $("#makeMeScrollable").smoothDivScroll({
        mousewheelScrolling: "allDirections",
        manualContinuousScrolling: true,
        autoScrollingMode: "onStart",
        scrollingHotSpotLeftClass: "scrollingLeft",
        scrollingHotSpotRightClass: "scrollingRight"
    });
});


$(".gallery__item a").fancybox({
    "padding" : 0
});
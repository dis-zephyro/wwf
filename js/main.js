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
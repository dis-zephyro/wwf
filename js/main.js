$(function() {
    $(window).resize(function() {
        $('.b01').height($(window).height() - $('.b01').offset().top);
    });
    $(window).resize();
});


$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 400);
    return false;
});

$(window).load(function(){
    $('.sidenav').liLanding();
});

//  слайдер b01

var otz_nom = 0;
var otz = new Array();
otz = [
    "img/b01_bg_bg1.jpg",
    "img/b01_bg_bg2.jpg",
    "img/b01_bg_bg3.jpg"
];
var otz_max = otz.length;

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




$('.b01__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    otz_nom += 1;
    if (otz_nom == otz_max) otz_nom = 0;
    $(".b01").css("background-image", 'url("'+otz[otz_nom]+'")')
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


$('.user').slick({
    arrows: false,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
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
        mousewheelScrolling: "",
        manualContinuousScrolling: false,
        autoScrollingMode: "",
        hotSpotScrollingInterval: 80,
        scrollingHotSpotLeftClass: "scrollingLeft",
        scrollingHotSpotRightClass: "scrollingRight"
    });
});



$('.map-static').popover({
    html:true
});

$(".gallery__item a").fancybox({
    "padding" : 0
});


$(".map-item-more").fancybox({
    "padding" : 20,
    maxWidth	: 800,
    maxHeight	: 600,
        beforeLoad: function() {
            $('.map-static').popover('hide');
    }
});

$(".map-video").fancybox({
    maxWidth	: 800,
    maxHeight	: 600,
    fitToView	: false,
    width		: '70%',
    height		: '70%',
    autoSize	: false,
    closeClick	: false,
    openEffect	: 'none',
    closeEffect	: 'none'
});


$('.island').popover({
    html:true
});

$(".island-more").fancybox({
    "padding" : 20,
    maxWidth	: 800,
    maxHeight	: 600,
    beforeLoad: function() {
        $('.island').popover('hide');
    }
});


$('[data-type="slider-scroller"]').mousemove((function () {
    var
        $scroller = $('[data-type="slider-scroller"]'),
        $img = $('[data-type="slider-image"]'),
        wrapperHeight = parseInt($('[data-type="slider-image-wrapper"]').height()),
        imgHeight = parseInt($img.height()),
        step = (imgHeight - wrapperHeight) / 100;


    return function () {
        //noinspection JSJQueryEfficiency
        var val, top;

        imgHeight = parseInt($img.height());
        step = (imgHeight - wrapperHeight) / 100;

        val = $scroller.val();
        top = val * step;
        top = '-' + top + 'px';

        $img.css('top', top);

        console.log('top', top);
    };
})());

  
   $(document).ready(function() {
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed:1000,
        responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
       autoplaySpeed:1000


      }
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
        slidesToShow: 1,
      autoplay: true,
      autoplaySpeed:1000


      }
    }
  ]

      });

      $('[data-js-show-hide-slide-btn]').click(function () {
        $('[data-js-hidesample]').toggle('slow');
      });
    });





  $( function() {
    $( "#accordion" ).accordion();
    $("#accordion").accordion({autoHeight:false,collapsible:true});
  });



    $(window).scroll(function (){
        $(' .mow_1').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass('zoomIn');
            }
        });
    });﻿

        $(window).scroll(function (){
        $(' .mow_2').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass('fadeIn');
            }
        });
    });﻿


   $(document).ready(function() {

  $('.photo').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled:true
  },
  zoom: {
     enabled: true,
     duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
 }
  //removaDelay: 300,
  //mainClass: 'nfp-fade'
});
  });







/*<script type="text/javascript">
  $(document).ready(function(){
  if($('.block').length){
    $('.topheader').addclass('hasSlider');
    $('.block').slick{
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    }
  }
}) 




    $(function () {
      $("").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed:10000,

      });
});









$(document).ready(function(){
  $('.main_jquery').slick({
        infinite:true,
        centerMode: true,
        variableWidth: true,
        dots: true,
        speed: 500,
        cssEase: 'linear',
        useTransform:false,
//      autoplay: true,
//      autoplaySpeed: 6000,
        arrows: true
  });
});




*/
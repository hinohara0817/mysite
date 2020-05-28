'use strict';
{
  $(function(){
    var showloading = document.getElementById('showloading');
    var contents = document.getElementById('main');
    window.addEventListener('load', function () {
      showloading.style.display = 'none';
      contents.classList.remove('main');
    });
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:(position - 100)}, speed, "swing");
      return false;
    });
    $(".Toggle").on("click", function(){
      var rightVal = 0;
      if($(this).hasClass("active")) {
        rightVal = -300;
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }

      $("#global-navi").stop().animate({
        right: rightVal
      }, 500);
    });
    $(window).scroll(function (){
      $('.fadein').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
    });
    $('.modal-show').on('click', function(e){
      e.preventDefault();
      $(this).siblings().fadeIn();
    });

    $('.modal-background').on('click', function(e){
      e.preventDefault();
      $('.modal-background').fadeOut();
    });
    $('.tab').click(function(){
      $('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
      $('.is-show').removeClass('is-show');
      const index = $(this).index();
      $('.panel').eq(index).addClass('is-show');
    });
    $('.popup-image').magnificPopup({
      type: 'image'
    });
  });
  
}

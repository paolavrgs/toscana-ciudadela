new WOW().init();
 
WebFont.load({
  google: {
    families: ['Montserrat:400,500']
  }
});


$('.js-gotop').on('click', function(event){
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $('html').offset().top
  }, 500, 'easeInOutExpo');

  return false;
});

$(window).scroll(function(){
  var $win = $(window);
  if ($win.scrollTop() > 200) {
    $('.js-top').addClass('active');
  } else {
    $('.js-top').removeClass('active');
  }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a.scroll-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();
      
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 'slow', function(){
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function() {
  $('#toscana-slider').on('init', function(e, slick) {
      var $firstAnimatingElements = $('div.main-slider__item:first-child').find('[data-animation]');
      doAnimations($firstAnimatingElements);    
  });

  $('#toscana-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('div.main-slider__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      doAnimations($animatingElements);    
  });

  $('.main-slider').slick({
    infinite: true,
    fade: true,
    cssEase: 'linear'
  });

  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }
});
$( document ).ready(function() {

  $slides = $('.slide')
  var index = 0;
  var total = $slides.length-1
  var state;

  $slides.first().addClass('current')

  var forward = function() {
    $slide = $slides.eq(index)
    $slide.removeClass('current')

    index++
    $slide = $slides.eq(index)
    $slide.addClass('current')

    if (index >= total) {
      $('.next').hide();
      $('.previous').show();
    } else if (index <= 0) {
      $('.next').show();
      $('.previous').hide();
    } else {
      $('.next').show();
      $('.previous').show();
    }
  };

  $('.next').click(forward);

  var back = function() {

    $slide = $slides.eq(index)
    $slide.removeClass('current')
    
    index--
    $slide = $slides.eq(index)
    $slide.addClass('current')
    
    if (index == 0){ 
      $('.next').show();
      $('.previous').hide();
    } else if (index >= total) {
      $('.next').hide();
      $('.previous').show();
    } else if (index <= 0) {
      $('.next').show();
      $('.previous').hide();
    } else {
      $('.next').show();
      $('.previous').show();
    }
  };

  $('.previous').click(back)

  $('.start').click(forward);

  $( window ).resize(function() {

  });
});
(function () {
  'use strict';
  var scene = document.getElementById('seoparallax');
  var parallax = new Parallax(scene);
  var pageX, pageY;
  $('.layer__svg__glass').on('mousedown', function (e) {
    console.log(e.pageX, e.pageY);
    pageX = e.pageX;
    pageY = e.pageY;
    $(this).addClass('movedown');
  });
  $('body').on('mouseup', function (e) {
    $('.layer__svg__glass').removeClass('movedown');
    console.log(e.pageX, e.pageY);

    if (pageX+100 <= e.pageX || pageY+20 <= e.pageY) {
      $('.layer__svg__glass').addClass('through');
      $('#fox_eye_right, #fox_eye_left, #tail, .layer__svg__fox, #foot1, #foot3, #foot2, #foot4, #light').addClass('run');
      setTimeout(function () {
        $('.layer__svg__glass').removeClass('through');
        $('#fox_eye_right, #fox_eye_left, #tail, .layer__svg__fox, #foot1, #foot3, #foot2, #foot4, #light').removeClass('run');
      }, 12000)
    }
  });
})();
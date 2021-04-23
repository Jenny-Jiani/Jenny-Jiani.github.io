$(document).ready(function(){ 
  var sd = $(window).scrollTop()
  if(sd > 0) {
      realFunc()
  }

  $(window).resize(function() {
      realFunc()
  })

  window.addEventListener('scroll', realFunc);

  function realFunc() {
      if (breakpoint() == 'lg') {
          var subHeight = 0;
          subHeight = $('.productMenu').height();
          var menuHeight = $('#overall-header').height() + subHeight;
          var sd = $(window).scrollTop();
          if (sd >= $('#overall-header').height()) {
            // head and sidebar fixed
            $('#docHead').css({'top': ($('.productMenu').height() + 1) + 'px'});
          } else {
            $('#docHead').css({'top': (menuHeight-sd)+1 + 'px'});
          }
      } else {
          $('#docHead').css({'top': 'unset'});
      }
  }
})
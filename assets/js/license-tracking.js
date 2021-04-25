$(document).ready(function(){ 
  var sd = $(window).scrollTop()
  if(sd > 0) {
    realFunc2()
  }

  $(window).resize(function() {
    realFunc2()
  })

  window.addEventListener('scroll', realFunc2);

  function realFunc2() {
      if (breakpoint() == 'lg') {
          var menuHeight = $('#overall-header').height();
          var sd = $(window).scrollTop();
          if (sd >= $('#overall-header').height()) {
            // head and sidebar fixed
            $('#docHead').css({'top': '0px'});
          } else {
            $('#docHead').css({'top': (menuHeight - sd + 1) + 'px'});
          }
      } else {
          $('#docHead').css({'top': 'unset'});
      }
  }
})
// DBC JS
$(document).ready(function() {

  // SELECT AND GO
  $('#doc-menu').on('change', function () {
      var url = $(this).val(); // get selected value
      if (url) { // require a URL
          window.location = url; // redirect
      }
      return false;
  });

  // MENU TOGGLE ICONs
  $('.menu-toggle').click(function() {
    $(this).find('.ss-icon').toggleClass("ss-navigatedown ss-navigateright");
    // e.preventDefault();
  });


  // SMOOTH SCROLL
  $("#toc-menu a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // store hash
    var hash = this.hash;
    // animate
    $('html, body').animate({
     scrollTop: $(hash).offset().top
    }, 300, function(){
     // when done, add hash to url
     // (default click behaviour)
     window.location.hash = hash;
    });
   });


});

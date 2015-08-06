// DBC JS
$(document).ready(function() {

  // TOC
  // - TOC LIST
  count = 0;
  var ToC = "<ul class='nav'>";
  var newLine, el, title, titleclean, link;
  $("article h2").each(function() {
    el = $(this);
    title = el.text();
    // titleclean = title.slice(0,-1);
    link = "#" + el.attr("id");
    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";
    ToC += newLine;
    count++;
  });
  ToC += "</ul>";
  if (count > 0) {
    $("#toc-menu").append(ToC);
  }
  // - SCROLLSPY
  $('body').scrollspy({ target: '#toc-menu' });

  // AFFIX SIDEBAR
  // #header-wrapper +31px
  // #sidebar-box
  // #footer-wrapper +16px
  $('#sidebar-box').affix({
    offset: {
      top: $('#header-wrapper').outerHeight(true) + 31
    }
  });
  // - Prevent width resize
  $('#sidebar-box').width($('#sidebar-box').parent().width());
  $(window).resize(function () {
    $('#sidebar-box').width($('#sidebar-box').parent().width());
  });


  // MENU TOGGLE ICON SWAP
  $('.menu-toggle').click(function() {
    $(this).find('.ss-icon').toggleClass("ss-navigatedown ss-navigateright");
    event.preventDefault();
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

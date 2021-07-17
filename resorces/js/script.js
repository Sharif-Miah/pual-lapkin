// MIXITUP

var mixer = mixitup('.grid-portfolio-content');


// scrollify

$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false,
      updateHash: false,
    });
  });

  // HAMVERGER MENU 

  function openMenu() {
    document.getElementById('navber').style.height = '100%'
  }
  function closeMenu() {
    document.getElementById('navber').style.height = '0'
  }

  // SMOOTH SCROLL 
  $(function(){
    $('.navber-menu a').on('click', function(){
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false
    });
  });



$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
   
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  

  $(document).ready(function () {
      $(window).scroll(function () {
          var header = $("header");
          header.toggleClass("sticky", $(window).scrollTop() > 0);
      });
  });


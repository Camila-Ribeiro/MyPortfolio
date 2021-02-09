$(function(){
  $(".smooth").click(function(event){
    event.preventDefault();
    //calculate destination place
    var dest=0;
    if($(this.hash).offset().top > $(document).height()-$(window).height()){
          dest=$(document).height()-$(window).height();
    }else{
          dest=$(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({scrollTop:dest}, 1000,'swing');
  });
});
$(function(){
  var url = window.location.href;
  $('ul.navbar-nav li a').filter(function() {
      return this.href == url;
  }).addClass('active');
});
$(function(){
  $('#navbar a').click(function (e) {
      var addHashUrl = e.target.hash;
      $('#navbar a').removeClass('active');
      window.location.hash = addHashUrl;
      $(this).addClass('active');
   });
});
$(function(){
  //insert back to top button dynamically
  $("#btn-backToTop").append('<a class="btn-backToTop" href="javascript:void(null);" style="display: none;"><i class="fas fa-chevron-circle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
  var $window = $(window);
  var distance = 80;
      // scroll
  $window.scroll(function() {
      // header
      if($window.scrollTop() >= distance) {
        $(".btn-backToTop").fadeIn();
      }else{
        $(".btn-backToTop").fadeOut();
      }
  });
  $('.btn-backToTop').click(function() {
      $('html, body').animate({
          scrollTop: 0
      }, 800);
  });
});
// https://codepen.io/EleftheriaBatsou/pen/vgvXQK
(function() {
  'use strict';
  // define variables
  var items = document.querySelectorAll(".timeline .year-card");
  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
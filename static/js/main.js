$(document).ready(function() {
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


  var setDefaultActive = function() {
  var path = window.location.pathname;
  console.log(path)
  var element = $("ul.navbar-nav li a[href='" + path + "']");
  console.log(element)
    element.addClass("active");
  }
    
  setDefaultActive();
   
});


$(function(){
  $('#navbar a').click(function () {
      $('#navbar a').removeClass('active');
      $(this).addClass('active');
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


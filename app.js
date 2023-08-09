document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", animateElements);
  });
  
  function animateElements() {
    var elements = document.querySelectorAll(".about .first img, .about .first .hliner, .about .first .hlinel, .about .first .text, .personal .first img, .personal .first .hliner, .personal .first .hlinel, .personal .first .text, .sports .first img, .sports .first .hliner, .sports .first .hlinel, .sports .first .text, #projects #first img, #projects #first .hliner, #projects #first .hlinel, #projects #first .text, #projects #second img, #projects #second .hliner, #projects #second .hlinel, #projects #second .text, #projects #third img, #projects #third .hliner, #projects #third .hlinel, #projects #third .text");
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = element.getBoundingClientRect().top;
  
      if (positionFromTop - window.innerHeight <= 0) {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }
    }
  }
  
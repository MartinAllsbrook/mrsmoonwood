
window.addEventListener("DOMContentLoaded", function(e) {
    var slideshow = document.getElementsByClassName("slideshow")[0];

    var fadeComplete = function(e) {
        slideshow.appendChild(arr[0]);
    };

    var arr = slideshow.getElementsByTagName("img");

    for(let i=0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }

}, false);
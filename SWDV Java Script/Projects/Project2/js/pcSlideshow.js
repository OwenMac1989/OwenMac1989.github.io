/*********************************************************************
***
*Original Author: Tyler Creager                                   *
*Date Created: 09/01/2023                                      *
*Version: 0.001                                                *
*Date Last Modified: 09/3/2023                             *
*Modified by: Tyler Creager                                        *
*Modification log:
version 0.0 - 09/03/2023 created script for the slideshow
version 0.1 - 09/03/2023 general tweaks.   
version 0.55 - 09/30/2023 tried to implement the slideshow shown in the book. 
version 0.60 - 10/01/2023 unable to implement how it worked in the book with added buttons I made , reverting back to what I had. 
I did update the selectors to use jquery now though instead of pure javascript.                                 *
***
******************************************************************** */
/* Used Web3schools for help https://www.w3schools.com/howto/howto_js_slideshow.asp */
"use strict"

let PCSlidesIndex = 1;
playSlides(PCSlidesIndex);

// Next/previous controls
function plusSlides(num) {
  playSlides(PCSlidesIndex += num);
}

// Thumbnail image controls
function currentSlide(num) {
  playSlides(PCSlidesIndex = num);
}

function playSlides(num) {
  let i;
  let slides = $(".PCSlides");
  let dots = $(".dot");
  if (num > slides.length) {PCSlidesIndex = 1}
  if (num < 1) {PCSlidesIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[PCSlidesIndex-1].style.display = "block";
  dots[PCSlidesIndex-1].className += " active";
}

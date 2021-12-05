var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}






















/*const slide = document.querySelector('.slide');
const images = document.querySelector('.slide img');


//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = document.querySelector('.slide img').clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button Listener

nextBtn.addEventListener('click', ()=>{
    slide.style.transition = "transform 0.4s ease-in-out;";
    counter++;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener('click', ()=>{
    slide.style.transition = "transform 0.4s ease-in-out;";
    counter--;
    slide.style.transform = "translateX(" + (-size * counter) + "px)";
});

slide.addEventListener('transitionend', ()=>{
    if( images[counter].id === 'lastClone') {
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    if( images[counter].id === 'firstClone') {
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
});*/







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
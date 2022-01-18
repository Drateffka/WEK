        //form validation

    
$(document).ready(function(){
    $("#submit_button").click(function(){
    const name=document.getElementById("n1");
     const surname=document.getElementById("n2");
     const error = document.getElementById("error");
     const email=document.getElementById("e1")
     let messages=[];
     if (name.value ==='' || name.value==null){
        messages.push("Imię jest wymagane");
     }
     if (surname.value ==='' || surname.value==null){
        messages.push("Nazwisko jest wymagane");
     }
     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (email.value ==='' || email.value==null || !(email.value.match(validRegex))){
        messages.push("Zły format adresu email bądź adres email niepodany");
     }
    error.innerText=messages.join(', ');    
    
    });
});







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
$(document).ready(function(){
    $('#first').click(function(){
        $('#ukryta').slideDown();
        $(this).hide();
        $('#second').show();
    });
    $(".sidebar a").click(function(){
        $(".wsparcie").hide();
        $(".sidebar a").removeClass("active");
        $(this).addClass("active");
        let text = $(this).attr("href");
        $(text).show();
     });
     //dlaczego to nie dziala?????
     $(".hero-btn").hover(function(){
        $(this).css({
            border: '1px solid rgba(128, 145, 116, 0.692)',
            backgroundColor:' rgba(128, 145, 116, 0.692)',
            transition: '1.0s'
        });

     },function(){
        $(this).css("background-color","pink")
     });
     //form validation
    $("#second").click(function(){
    const name=document.getElementById("name");
     const surname=document.getElementById("surname");
     const form = document.getElementById("ukryta");
     const error = document.getElementById("error");
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
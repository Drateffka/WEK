$(document).ready(function(){
    $('.niegotowy').click(function(){
        $('#ukryta').slideDown();
        $('#przeslij').text("Zapłać przez PayPal")
               .removeClass("niegotowy")
               .addClass("gotowy");
    });
    $('.gotowy').click(function(){
        $('#przeslij').text("test");
    });
});
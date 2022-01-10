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
    $(".sidebar a").click(function(){
        $(".wsparcie").hide();
        $(".sidebar a").removeClass("active");
        $(this).addClass("active");
        let text = $(this).attr("href");
        $(text).show();
     });
});
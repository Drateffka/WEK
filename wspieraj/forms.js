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
});
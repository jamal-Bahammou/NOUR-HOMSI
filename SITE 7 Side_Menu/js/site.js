$(function(){
    $(".close-btn").click(function(){
        $(".menu").toggleClass("menu-open");
        $(this).toggleClass("open-btn");
    });
});

$('ul#father>li').hover(function(){
    $(this).find('ul#son').show(400);
},                      function(){
    $(this).find('ul#son').hide(400);
});
$(function () {

    $('[data-bs-toggle="tooltip"]').tooltip();

});

$('.change').click(function(){
    $(this).removeClass("bg-info");
    $(this).addClass("bg-warning");
 })

$('.change').dblclick(function(){
    $(this).removeClass("bg-warning");
    $(this).addClass("bg-info");
 })

$(document).scroll(function (){
    const y = $('html').scrollTop();

    y > 300 ? $('nav').addClass('nav-black') : $('nav').removeClass("nav-black");
});


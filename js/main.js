jQuery(document).ready(function($) {
/*$(document).ready(function(){
    $('#go_next').click(function() {
        $.scrollTo('#expertise');
    });
});*/

$(function() {
    $(".page-scroll").bind("click", function(i) {
        var n = $(this);
        $("html, body").stop().animate({
            scrollTop: $(n.attr("href")).offset().top
        }, 1500, "easeInOutExpo"),
        i.preventDefault()
    })
});
$(function() {
    $(".btn_header").bind("click", function(i) {
        var n = $(this);
        $("html, body").stop().animate({
            scrollTop: $(n.attr("href")).offset().top
        }, 1500, "easeInOutExpo"),
        i.preventDefault()
    })
});




});
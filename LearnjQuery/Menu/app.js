$(document).ready(function() {
    $(".main>a").click(function() {
        var ulNode = $(this).next("ul");

        // numbers, slow, normal, fast
//        ulNode.toggle(500);
        ulNode.slideToggle(500);
    });
    
    $(".hmain").hover(function() {
        $(this).children("ul").slideDown(500);
    }, function() {
        $(this).children("ul").slideUp(500);
    });
});
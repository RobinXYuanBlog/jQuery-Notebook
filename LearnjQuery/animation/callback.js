$(document).ready(function() {
    $("button").click(function() {
//        $("p").hide(1000, function() {
//            alert("Animation Complete");
//        });
        
        $("p").css("color", "red").slideUp(1000).slideDown(1000);
    });
});
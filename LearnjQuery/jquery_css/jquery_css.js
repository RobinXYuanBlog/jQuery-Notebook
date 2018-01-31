//$(document).ready(function() {
//    $("div").css("width", "100px");
//    $("div").css("height", "100px");
//    $("div").css("background", "red");
//});
//
//
//$(document).ready(function() {
//    $("div").css({
//        width: "100px",
//        height: "100px",
//        backgroundColor: "#FFFF00"
//    });
//});

$(document).ready(function() {
    $("div").addClass("style1");
    $("div").click(function() {
//        $(this).addClass("style2");
        $(this).toggleClass("style2");
    })
});
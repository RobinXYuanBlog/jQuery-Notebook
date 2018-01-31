// first()
// last()
// eq()
// filter()
// not()

$(document).ready(function() {
//    $("div").first().css("background-color", "red");
//    $("div").last().css("background-color", "red");
    // start from 0
//    $("div").eq(0).css("background-color", "red");
//    $("div p").filter("p").css("background-color", "red");
    $("div p").not(".pclass").css("background-color", "red");
})
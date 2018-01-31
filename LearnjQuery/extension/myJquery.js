//$.myjq = function() {
//    alert("Hello myJquery");
//}

$.fn.myjq = function() {
    $(this).text("Hello");
}
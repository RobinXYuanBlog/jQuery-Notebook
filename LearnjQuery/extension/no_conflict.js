//$.noConflict();
//jQuery(document).ready(function() {
//    jQuery("#btn").on("click", function() {
//        jQuery("div").text("New Hello!");
//    });
//});

var myjq = $.noConflict();
myjq(document).ready(function() {
    myjq("#btn").on("click", function() {
        myjq("div").text("New Hello!");
    });
});
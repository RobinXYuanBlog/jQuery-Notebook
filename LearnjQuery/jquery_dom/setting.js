$(document).ready(function() {
    $("#btn1").click(function() {
        $("#p1").text("robinxyuan");
    });

    $("#btn2").click(function() {
        $("#p2").html("<a href='http://robinxyuan.github.io/' target='_blank'>robinxyuan</a>");
    });

    $("#btn3").click(function() {
        $("#i3").val("RobinXYuan");
    });

    $("#btn4").click(function() {
        $("#a4").attr({
            "href": "http://robinxyuan.github.io/",
            "title": "RobinXYuan"
        });
    });

    $("#btn5").click(function() {
        $("#p5").text(function(i, old_text) {
            return "old:" + old_text + " new: new text" + (i);
        });
    });
});
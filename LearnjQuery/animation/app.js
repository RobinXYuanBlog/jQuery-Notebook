$(document).ready(function() {
    $("#btn1").click(function() {
        $("#p1").hide(1000);
    });
    
    $("#btn2").click(function() {
        $("#p1").show(1000);
    });
    
    $("#btn3").click(function() {
        $("#p1").toggle(1000);
    });
});
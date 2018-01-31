$(document).ready(function() {
    $("#div_show").click(function() {
        $("#div2").slideDown(1000);
    });
    
    $("#div_hide").click(function() {
        $("#div2").slideUp(1000);
    });
    
    $("#div_toggle").click(function() {
        $("#div2").slideToggle(1000);
    });
});
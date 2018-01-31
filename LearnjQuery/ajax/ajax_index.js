$(document).ready(function() {
    $("#btn").on("clicke", function() {
        $.get("Server.php", {name:$("#namevalue")}, function(data) {
            $("#result").text(data);
        }).error(function() {
            $("#result").text("No Server!");
        });
    });
});


$(document).ready(function() {
    $("#result").text("Data is coming...");
    $("#btn").on("clicke", function() {
        $.post("Server.php", {name:$("#namevalue")}, function(data) {
            $("#result").text(data);
        }).error(function() {
            $("#result").text("No Server!");
        });
    });
});
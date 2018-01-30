$(document).ready(function() {
    $("#clickMeButton").bind("click", clickHandler1);
    $("#clickMeButton").bind("click", clickHandler2);
    $("#clickMeButton").unbind("click", clickHandler1);

    // After 1.7
    $("#clickMeButton").on("click", clickHandler1);
    $("#clickMeButton").on("click", clickHandler2);
    $("#clickMeButton").off("click", clickHandler1);
});

function clickHandler1(e) {
    alert("Click Handler1");
}

function clickHandler2(e) {
    alert("Click Handler2");
}
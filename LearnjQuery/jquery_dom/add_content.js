$(document).ready(function() {
    $("#btn1").click(function() {
       $("#p1").append("This is new content"); 
    });
    
    $("#btn2").click(function() {
       $("#p1").prepend("This is new content"); 
    });
    
    $("#btn3").click(function() {
       $("#p2").before("my", "This is new content"); 
    });
    
    $("#btn4").click(function() {
       $("#p1").after("my", "This is new content"); 
    });
    
});


function appendText() {
    /**
     * html/jQuery/DOM
     */
    
    var text1 = "<p>robin</p>";
    var text2 = $("<p></p>").text("x");
    var text3 = document.createElement("p");
    text3.innerHTML = "yuan";
    
    $("body").append(text1, text2, text3);
}
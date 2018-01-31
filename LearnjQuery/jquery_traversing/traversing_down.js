$(document).ready(function() {
    // Parameter in children is optional
    // find is not optional
    // children() only down 1 level
    // find() could select all down levels
//   $("#div1").children("div2").css({border: "3px solid red"});
   $("#div1").find("p").css({border: "3px solid red"});
    
});
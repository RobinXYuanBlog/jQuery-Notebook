/**
 * parent - 1 level
 * parents - all levels
 * parentsUntil - area bondry - 1 level
*/

$(document).ready(function() {
//    $("p").parent().css({border:"3px solid red"});
//    $("p").parents().css({border:"3px solid red"});
    $("a").parentsUntil("#div1").css({border:"3px solid red"});
})
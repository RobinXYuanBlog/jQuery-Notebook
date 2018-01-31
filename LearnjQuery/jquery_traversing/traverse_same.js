/**
 * siblings() - all elements in same level
 * next() - next element
 * nextAll() - next all elements
 * nextUntil() - down until element
 * opposite to next
 * prev()
 * preAll()
 * preUntil()
*/

$(document).ready(function() {
//    $("h4").siblings().css({border: "3px solid red"});
//    $("h4").next().css({border: "3px solid red"});
//    $("h4").nextAll().css({border: "3px solid red"});
//    $("h4").nextUntil("h6").css({border: "3px solid red"});
    $("h4").nextUntil("h6").css({border: "3px solid red"});
})
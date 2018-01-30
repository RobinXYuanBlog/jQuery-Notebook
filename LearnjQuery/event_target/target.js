$(document).ready(function() {
    $("body").bind("click", bodyHandler);
    $("div").bind("click", divHandler);
    $("div").bind("click", divHandler2);
})

function bodyHandler(event) {
    console.log(event);
}

function divHandler(event) {
    console.log(event);
//    event.stopPropagation();
    event.stopImmediatePropagation();
}

function divHandler2(event) {
    console.log(event);
}


/**
 * Results
 * CurrentTarget: body => event bind to body
 * Target: div => clicked div
 */
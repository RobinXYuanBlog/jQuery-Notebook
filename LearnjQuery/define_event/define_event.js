var clickBtn;

$(document).ready(function() {
    clickBtn = $("#clickMeBtn");
    clickBtn.click(function() {
        var e = jQuery.Event("MyEvent");
        clickBtn.trigger(e);
    });
    
    clickBtn.bind("MyEvent", function(event) {
        console.log(event);
    })
});
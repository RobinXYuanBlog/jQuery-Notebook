## Welcome to RobinXYuan jQuery Notebook

## Load jQuery Method

1.Download jQuery from [jQuery Official Website](http://jquery.com)

2.Download from CDN

## Basic Grammer

$(selector).action()

### Example

```html
<head lang="en">
    <meta charset="UTF8">
    <title>Basic Grammer</title>
    <script src="../jquery-3.3.1.js"></script>
    <script src="app.js"></script>
</head>
    
<body>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
    <p>Hello</p>
</body>
```

```javascript
$(document).ready(function() {
   alert("Ready"); 
});
```

```javascript
$(document).ready(function() {
    $("p").click(function() {
        $(this).hide();
    });
});
```

## Selector & Events

### Selector

```html
<body>
    <p class="pclass" id="pid1">p1</p>
    <p id="pid2">p2</p>
    <button>
        Click me
    </button>
</body>
```

You can locate an element in three ways

1.tags
```javascript
$("p").text("changed");
```

2.id
```javascript
$("#pid1").text("changed");
```

3.class
```javascript
$(".pclass").text("changed");
```

### Events

#### Common events

1.click
```javascript
$("button").click(function() {
    alert("Clicked");
});
```

2.double click
```javascript
$("button").dblclick(function() {
    alert("Clicked");
});
```

3.mouse enter
```javascript
$("button").mouseenter(function() {
    alert("Clicked");
});
```

4.mouse leave
```javascript
$("button").mouseleave(function() {
    alert("Clicked");
});
```

#### Events bind

```javascript
("#clickMeButton").bind("click", clickHandler1);

function clickHandler1(e) {
    alert("Click Handler1");
}
```

After jQuery 1.7, recommended

```
("#clickMeButton").on("click", clickHandler1);
```

Multi events could be binded in one element
```javascript
$("#clickMeButton").bind("click", clickHandler1);
$("#clickMeButton").bind("click", clickHandler2);
```


#### Events unbind

- Unbind all methods

```javascript
("#clickMeButton").unbind("click");
```

- Unbind specified method
```javascript
("#clickMeButton").unbind("click", clickHandler1);
```

After jQuery 1.7, recommended
```
("#clickMeButton").off("click", clickHandler1);
```

#### Events target


```html
<div style="height: 300px; width: 300px; background-color: antiquewhite">
    <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
    </ul>
</div>
```

```javascript
$(document).ready(function() {
    $("body").bind("click", bodyHandler);
})

function bodyHandler(event) {
    console.log(event);
}
```

click div, results
```
CurrentTarget: body
Target: div
```

The CurrentTarget is the object that event bind to, here is *body*
Target is the object that clicked, here is *div*


- Stop Propagation

```
stopPropagation()
```

- Stop All Propagation

```
stopImmediatePropagation()
```

#### Define Events

```javascript
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
```

type => "MyEvent"


### jQuery HTML

#### Capture

1.text()

Only text

```html
<p id="text">This is my webpage</p>
<button id="btn1">button1</button>
```

```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        alert("text: " + $("#text").text());
    });
});
```

2.html()

Contains 

```html
<p id="text">This is my webpage<a>This is an a tag</a></p>
<button id="btn1">button1</button>
```

```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        alert("text: " + $("#text").text());
    });
});
```

```
text: This is my webpageThis is an a tag
```

```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        alert("text: " + $("#text").html());
    });
});
```

```
text: This is my webpage<a data-brackets-id="218">This is an a tag</a>
```

3.val()

```html
<p><input type="text" id="it" value="robinxyuan"></p>
```

```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        alert("text: " + $("#it").val());
    });
});
```

```
text: robinxyuan
```

4.attr()

```html
<p><a href="http://robinxyuan.github.io/" id="aid">robinxyuan</a></p>
```


```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        alert("text: " + $("#aid").attr("href"));
    });
});
```

```
text: http://robinxyuan.github.io/
```

#### Setting

1.text()

```html
<p id="p1">This is my webpage</p>
<button id="btn1">Click me</button>
```


```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        $("#p1").text("robinxyuan");
    });
});
```

2.html()

```html
<p id="p2">Hello World!</p>
```

```javascript
$(document).ready(function() {
    $("#btn2").click(function() {
        $("#p2").html("<a href='http://robinxyuan.github.io/' target='_blank'>robinxyuan</a>");
    });
});
```

3.val()

```html
<input type="text" id="i3" value="Hello World">
<button id="btn3">val()</button>
```

```javascript
$(document).ready(function() {
    $("#btn3").click(function() {
        $("#i3").val("RobinXYuan");
    });
});
```

4.attr()

```html
<a id="a4" href="http://www.bing.com">bing -> robinxyuan</a>
<button id="btn4">attr()</button>
```

```javascript
$("#btn4").click(function() {
    $("#a4").attr({
        "href": "http://robinxyuan.github.io/",
        "title": "RobinXYuan"
    });
});
```

5.call back

```html
<p id="p5">This is my webpage</p>
<button id="btn5">Call Back</button>
```

```javascript
$("#btn5").click(function() {
    $("#p5").text(function(i, old_text) {
        return "old:" + old_text + " new: new text" + (i);
    });
});
```

#### Add elements and contents

1.append

Add content after selected element

```html
<p id="p1">This is my webpage</p>
<button id="btn1">append</button>
```

```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
       $("#p1").append("This is new content"); 
    });
});
```

2.prepend

Add content before selected element

```html
<p id="p2">This is my webpage</p>
<button id="btn2">prepend</button>
```

```javascript
$(document).ready(function() {
    $("#btn2").click(function() {
       $("#p1").prepend("This is new content"); 
    });
});
```

3.before

change line

```html
<p id="p2">my site</p>
<button id="btn3">before</button>
```

```javascript
$(document).ready(function() {
    $("#btn3").click(function() {
       $("#p2").before("my", "This is new content"); 
    });
});
```

4.after

change line

```html
<p id="p2">my site</p>
<button id="btn4">after</button>
```

```javascript
$(document).ready(function() {
    $("#btn4").click(function() {
       $("#p2").after("my", "This is new content"); 
    });
});
```

**Add Elements**

html/jQuery/DOM

```html
<button onclick="appendText()">add element</button>
```

```javascript
function appendText() {

    var text1 = "<p>robin</p>";
    var text2 = $("<p></p>").text("x");
    var text3 = document.createElement("p");
    text3.innerHTML = "yuan";
    
    $("body").append(text1, text2, text3);
}
```


#### Delete elements

```html
<div id="div" style="height: 200px; width: 200px; background-color: antiquewhite;">
    hello
    <p id="p1">hello world</p>
    <p>hello</p>
</div>
<button id="btn1">delete</button>

```

1.remove()

All delete

```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        $("#div").remove(); 
    });
});
```

2.empty()

Delete contents

```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        $("#div").empty(); 
    });
});
```

































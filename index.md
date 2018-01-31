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

### Effects

#### Hide/Show

```html
<p id="p1">Paragraph</p>
<button id="btn1">hide</button>
<button id="btn2">show</button>
<button id="btn3">toggle</button>
```

```css
div {
    background-color: antiquewhite;
    height: 100px;
    width: 100px;
    margin: 2px;
    float: left;
}
```

1.hide()

```javascript
$(document).ready(function() {
    $("#btn1").click(function() {
        $("#p1").hide(1000);
    });
});
```

2.show()

```javascript
$(document).ready(function() {
    $("#btn2").click(function() {
        $("#p1").show(1000);
    });
});
```

3.toggle()

```javascript
$(document).ready(function() {
    $("#btn3").click(function() {
        $("#p1").toggle(1000);
    });
});
```

**Improvement**

```javascript
<script>
    for(var i = 0; i < 5; i++) {
        $("<div>").appendTo(document.body);
    }
    
    $("div").click(function() {
        $(this).hide(2000, function() {
            $(this).remove();
        });
    });
</script>
```

#### Fade

```html
<button id="btn1">Fande In</button>
<button id="btn2">Fande Out</button>
<button id="btn3">Fande Toggle</button>
<button id="btn4">Fande To</button>
    
<div id="div1" style="display: none; width: 80px; height: 80px; background-color: antiquewhite"></div>
<div id="div2" style="display: none; width: 80px; height: 80px; background-color: aqua"></div>
<div id="div3" style="display: none; width: 80px; height: 80px; background-color: aquamarine"></div>
```

1.fadeIn()

```javascript
$(document).ready(function() {
    $("#btn1").on("click", function() {
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    });
});
```

2.fadeOut()

```javascript
$(document).ready(function() {
    $("#btn2").on("click", function() {
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });
});
```

3.fadeToggle()

```javascript
$(document).ready(function() {
    $("#btn3").on("click", function() {
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    });
});
```


4.fadeTo()

```javascript
$(document).ready(function() {
    $("#btn4").on("click", function() {
        $("#div1").fadeTo(1000, 0.3);
        $("#div2").fadeTo(1000, 0.5);
        $("#div3").fadeTo(1000, 0.7);
    });
});
```

#### Slide

```html
<div id="div_show">Show</div>
<div id="div_hide">Hide</div>
<div id="div_toggle">Toggle</div>
<div id="div2">Hello World!</div>
```

```css
#div2, #div_show, #div_hide, #div_toggle {
    padding: 5px;
    text-align: center;
    background-color: antiquewhite;
    border: solid 1px #333;
}
#div2 {
    padding: 50px;
    display: none;
}
```

1.slideDown()

```javascript
$("#div_show").click(function() {
    $("#div2").slideDown(1000);
});
```

2.slideUp()

```javascript
$("#div_hide").click(function() {
    $("#div2").slideUp(1000);
});
```

3.slideToggle()

```javascript
$("#div_toggle").click(function() {
    $("#div2").slideToggle(1000);
});
```

#### Callback

```html
<button>Show</button>
<p>Hide</p>
```

**Example1**

```javascript
$(document).ready(function() {
    $("button").click(function() {
		$("p").hide(1000, function() {
			alert("Animation Complete");
		});
    });
});
```

**Example2**

```javascript
$(document).ready(function() {
    $("button").click(function() {
        $("p").css("color", "red").slideUp(1000).slideDown(1000);
    });
});
```

### Extension

Define custome extension

**Way 1**

```my_jquery.js```

```javascript
$.myjq = function() {
    alert("Hello myJquery");
}
```

```extension_index.js```

```javascript
$(document).ready(function() {
    $.myjq();
});
```

**Way 2** (Common)

```html
<div></div>
```

```my_jquery.js```

```javascript
$.fn.myjq = function() {
    $(this).text("Hello");
}
```

```extension_index.js```

```javascript
$(document).ready(function() {
    $("div").myjq();
});
```


### No Conflict

Other libraries may use `$`, and this will create conflict, in jQuery, to realize no conflict.

```html
<div>Hello</div>
<button id="btn">Button</button>
```

**Method I**

```javascript
$.noConflict();
jQuery(document).ready(function() {
    jQuery("#btn").on("click", function() {
        jQuery("div").text("New Hello!");
    });
});
```

**Method II**

```javascript
var myjq = $.noConflict();
myjq(document).ready(function() {
    myjq("#btn").on("click", function() {
        myjq("div").text("New Hello!");
    });
});
```


### jQuery CSS

```html
<div></div>
```

```css
.style1 {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
}

.style2 {
    width: 100px;
    height: 100px;
    background-color: beige;
}
```

1.css()

```javascript
$(document).ready(function() {
    $("div").css("width", "100px");
    $("div").css("height", "100px");
    $("div").css("background", "red");
});
```

```javascript
$(document).ready(function() {
    $("div").css({
        width: "100px",
        height: "100px",
        backgroundColor: "#FFFF00"
    });
});
```

2.addClass()

```javascript
$("div").addClass("style1");
```

3.removeClass()

```javascript
$("div").removeClass("style1");
```

4.toggleClass()

```javascript
$("div").toggleClass("style1");
```


### jQuery Box

```html
<div id="div"></div>
```

```css
#div{
    width: 100px;
    height: 100px;
    border: solid 2px aqua;
    padding: 50px;
    margin: 50px;
    background-color: antiquewhite;
}
```

1.height(), width()

height.width of element

2.innerHeight(), innerWidth()

element + padding

3.outerHeight, outerWidth()

element + padding + border

4.outerHeight(true), outerWidth(true)

element + padding + border + margin


```javascript
$(document).ready(function() {
    alert($("#div").height());
    alert($("#div").innerHeight());
    alert($("#div").outerHeight());
    alert($("#div").outerHeight(true));
})
```

### jQuery Traversing

#### Down

1.children()

- down 1 level

- Parameter is optional

2.find()

- Parameter is not optional

- find() could select all down levels

```javascript
"#div1").children("div2").css({border: "3px solid red"});
```


#### Up

1.parent()

Up 1 level

2.parents()

up all levels

3.parentsUntil()

up to area


#### Same Level

 1.siblings()

 all elements in same level

 2.next()

 next element

 3.nextAll()

 next all elements

 4.nextUntil()

 down until element


 opposite to next

 5.prev()

 6.preAll()

 7.preUntil()


 #### Filter

 1.first()

 First element

 2.last()

 Last element

 3.eq()

 Equal to index, start from 0

 4.filter()

 Filter specificated elements

 5.not()

 Opposite to filter()


```html
<div>
    <p>div1</p>
</div>

<div>
    <p class="pclass">div2</p>
</div>
    
<div>
    <p class="pclass">div3</p>
</div>
    
<div>
    <a>div4</a>
</div>
```

```javascript
$(document).ready(function() {
    $("div").first().css("background-color", "red");
    $("div").last().css("background-color", "red");
    $("div").eq(0).css("background-color", "red");
    $("div p").filter("p").css("background-color", "red");
    $("div p").not(".pclass").css("background-color", "red");
})
```


### Menu

```html

<!-- Vertical -->
<ul>
    <li class="main">
        <a href="#">menu 1</a>
        <ul>
            <li><a href="#">submenu 1</a></li>
            <li><a href="#">submenu 2</a></li>
            <li><a href="#">submenu 3</a></li>
        </ul>
    </li>
    <li class="main">
        <a href="#">menu 2</a>
        <ul>
            <li><a href="#">submenu 1</a></li>
            <li><a href="#">submenu 2</a></li>
        </ul>
    </li>
    <li class="main">
        <a href="#">menu 3</a>
        <ul>
            <li><a href="#">submenu 1</a></li>
            <li><a href="#">submenu 2</a></li>
        </ul>
    </li>
</ul>
    
    
<br/>
<br/>
    
<!-- Horizontal -->

<ul>
    <li class="hmain">
        <a href="#">menu 1</a>
        <ul>
            <li><a href="#">submenu 1</a></li>
            <li><a href="#">submenu 2</a></li>
            <li><a href="#">submenu 3</a></li>
        </ul>
    </li>
    <li class="hmain">
        <a href="#">menu 2</a>
        <ul>
            <li><a href="#">submenu 1</a></li>
            <li><a href="#">submenu 2</a></li>
        </ul>
    </li>
    <li class="hmain">
        <a href="#">menu 3</a>
        <ul>
            <li><a href="#">submenu 1</a></li>
            <li><a href="#">submenu 2</a></li>
        </ul>
    </li>
</ul>
```

```css
ul, li {
    list-style: none;
}

ul {
    padding: 0;
    margin: 0;
}

.main, .hmain {
    background-color: antiquewhite;
    background-repeat: repeat-x;
    width: 150px;
}

li {
    background-color: azure;
}

a {
    text-decoration: none;
    padding-left: 20px;
    display: block;
    width: 130px;
    padding-top: 3px;
    padding-bottom: 3px;
}

.main a, .hmain a {
    color: #333;
}

.main li a, .hmain li a {
    color: #666;
}

.main ul, .hmain ul {
    display: none;
}

.hmain {
    float: left;
    margin-right: 1px;
}
```

```javascript
$(document).ready(function() {
    $(".main>a").click(function() {
        var ulNode = $(this).next("ul");

        ulNode.slideToggle(500);
    });
    
    $(".hmain").hover(function() {
        $(this).children("ul").slideDown(500);
    }, function() {
        $(this).children("ul").slideUp(500);
    });
});
```



























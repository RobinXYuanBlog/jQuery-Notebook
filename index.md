## Welcome to RobinXYuan jQuery Notebook

## Load jQuery Method

1. Download jQuery from [jQuery Official Website](http://jquery.com)
2. Download from CDN

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

1. tags
```javascript
$("p").text("changed");
```

2. id
```javascript
$("#pid1").text("changed");
```

3. class
```javascript
$(".pclass").text("changed");
```

### Events

#### Common events

1. click
```javascript
$("button").click(function() {
    alert("Clicked");
});
```

2. double click
```javascript
$("button").dblclick(function() {
    alert("Clicked");
});
```

3. mouse enter
```javascript
$("button").mouseenter(function() {
    alert("Clicked");
});
```

4. mouse leave
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



























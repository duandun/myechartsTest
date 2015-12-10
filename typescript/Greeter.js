var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
document.body.appendChild(button);
var result = false;
var k = 24;
var Smith = 'Smith';
var Color;
(function (Color) {
    Color[Color["red"] = 4] = "red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Black"] = 6] = "Black";
})(Color || (Color = {}));
;
var c = Color.red;
button.onclick = function () {
    console.log(Color);
};
var list = [1, "true", false];
console.log(list[1]);
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var myArray;
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
var Clock1 = (function () {
    function Clock1(h, m) {
    }
    return Clock1;
})();
var cs = Clock1;
var newClock = new cs(7, 10);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
var count;
count(10);
count.reset();
count.interval = 5.0;

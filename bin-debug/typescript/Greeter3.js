/**
 * Created by changrui on 15/12/15.
 */
/**
 * static properties
 */
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
})();
var grid1 = new Grid(1.0);
var grid2 = new Grid(0.5);
//alert(grid1.calculateDistanceFromOrigin({x: 10, y: 20}));
//alert(grid2.calculateDistanceFromOrigin({x: 20, y: 50}));
/**
 * constructor functions
 */
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
})();
var greeter1;
greeter1 = new Greeter();
//alert(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
//alert(greeter2.greet());

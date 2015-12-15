/**
 * Created by changrui on 15/12/15.
 */

/**
 * static properties
 */
class Grid {
    static origin = {x:0, y:0};
    calculateDistanceFromOrigin(point: {x: number, y: number;}) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist)/this.scale;
    }
    constructor (public scale: number) {}
}

var grid1 = new Grid(1.0);
var grid2 = new Grid(0.5);

//alert(grid1.calculateDistanceFromOrigin({x: 10, y: 20}));
//alert(grid2.calculateDistanceFromOrigin({x: 20, y: 50}));

/**
 * constructor functions
 */
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if(this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter.standardGreeting;
        }
    }
}

var greeter1: Greeter;
greeter1 = new Greeter();
//alert(greeter1.greet());

var greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2:Greeter = new greeterMaker();
//alert(greeter2.greet());








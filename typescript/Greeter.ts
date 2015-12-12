class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello, " + this.greeting;
	}
}

var greeter = new Greeter("world");

var button = document.createElement('button');
button.textContent = "Say Hello";


document.body.appendChild(button);

var result: boolean = false;

var k: number = 24;

var Smith: string = 'Smith';

enum Color { red = 4, Green , Black };
var c: Color = Color.red;

button.onclick = function() {
	console.log(Color);
};

var list: any[] = [1, "true", false];
console.log(list[1]);

interface LabelledValue {
	label: string;
}
function printLabel(labeledObj: LabelledValue) {
	console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface SquareConfig {
	color?: string;
	width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number} {
	var newSquare = { color: "white", area: 100 };
	if (config.color) {
		newSquare.color = config.color;
	}
	if(config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}
var mySquare = createSquare({ color: "black" });

interface SearchFunc {
	(source: string, subString: string): boolean;
}
var mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	var result = source.search(subString);
	if (result == -1) {
		return false;
	} else {
		return true;
	}
}
interface StringArray {
	[index: number]: string;
}
var myArray: StringArray;

interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}
class Clock implements ClockInterface {
	currentTime: Date;
	setTime(d: Date) {
		this.currentTime = d;
	}
	constructor(h: number, m: number) {}
}
interface ClockInterface1 {
	new (hour: number, minute: number);
}

class Clock1 {
	currentTime: Date;
	constructor(h: number, m: number) {}
}
var cs: ClockInterface1 = Clock1;
var newClock = new cs(7, 10);

interface Shape {
	color: string;
}
interface PenStroke {
	penWidth: number;
}
interface Square extends Shape, PenStroke {
	sideLength: number;
}
var square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

interface Counter {
	(start: number): string;
	interval: number;
	reset(): void;
}
var count: Counter;
count(10);
count.reset();
count.interval = 5.0;

var k = 5;




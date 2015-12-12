
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return "Hello," + this.greeting;
	}
}

var greeter = new Greeter("world");

class Animal {
	constructor(private name: string) {}
	move(meters: number = 0) {
		alert(this.name + "moved" + meters + "m.");
	}
}
class Snake extends Animal {
	constructor(name: string) {
		alert("Snake" + name);
		super(name);
	}
	move(meters = 5) {
		alert("Slithering...");
		super.move(meters);
	}
}
class Horse extends Animal {
	constructor(name: string) { super(name); }
	move(meters = 45) {
		alert("Galloping...");
		alert("fine");
		super.move(meters);
	}
}

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);

// class Employee {
// 	fullName: string;
// }
// var employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
// 	alert(employee.fullName);
// }

var passcode = "secret passcode1";
class Employee {
	private _fullName: string;
	get fullName(): string {
		return this._fullName;
	}
	set fullName(newName: string) {
		if(passcode && passcode == "secret passcode") {
			this._fullName = newName;
		} else {
			alert("Error: Unauthorized update of employee!");
		}
	}
}

/*var employee = new Employee();
employee.fullName = "Bob Smith";
if(employee.fullName) {
	alert(employee.fullName);
}*/

var employee = new Employee();
employee.fullName = "Bob Smith";
if(employee.fullName) {
	alert(employee.fullName);
}

var a = 5;
var tt = 8;
var kk = 5;
var mm = 3;


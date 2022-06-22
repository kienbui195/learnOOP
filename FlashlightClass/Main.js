let battery = new Battery(10);
let flashlight = new Flashlight(true, battery);


console.log(flashlight.getBattery());
flashlight.light();

document.write("Turn on<br/>")
flashlight.turnOn();
flashlight.light();
console.log(flashlight.getBattery());

document.write("Turn off<br/>")
flashlight.turnOff();
flashlight.light();
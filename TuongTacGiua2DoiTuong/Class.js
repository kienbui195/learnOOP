
class ElectricLamp {
    constructor(status) {
        this.status = status;
    }
    turnOff() {
        this.status = false;
    }
    turnOn() {
        this.status = true;
    }
}

class SwitchButton {
    constructor (electriclamp) {
        this.electriclamp = electriclamp;
    }
    connectToLamp(electriclamp) {
        this.electriclamp = electriclamp;
    }
    switchOff() {
        this.electriclamp.turnOff();
    }
    switchOn() {
        this.electriclamp.turnOn();
    }
};
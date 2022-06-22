class Flashlight {
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }
    setBattery(battery) {
        this.battery = battery;
    }

    getBattery() {
        return this.battery;
    }

    light() {
        if (this.status) {
            alert('Lighting!');
        } else alert('Not Lighting!');
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

}
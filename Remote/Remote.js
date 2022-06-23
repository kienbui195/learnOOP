class Remote {
    constructor(code) {
        this.code = code;
    }

    changeChannel(tv, code) {
        tv.code = code;
    }

    changeVolume(tv, volume) {
        tv.volume += volume;
    }

    turnOn(tv) {
        tv.status = true;
    }

    turnOff(tv) {
        tv.status = false;
    }
}
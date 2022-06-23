class Tivi {
    constructor(code,volume) {
        this.status = false;
        this.code = code;
        this.volume = volume;
    }

    changeVolume() {
        alert('Am luong: ' + this.volume);
    }

    changeChannel() {
        alert('Kenh: ' + this.code);
    }
}
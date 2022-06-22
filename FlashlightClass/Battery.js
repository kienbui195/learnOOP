class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(num) {
        this.energy = num;
    }

    getEnergy() {
        return this.energy;
    }
    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}
class Apple {
    constructor(weight) {
        this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    isEmpty() {
        if (this.weight === 0) {
            return true;
        } else return false;
    }

    decreaseWeight() {
        if (!this.isEmpty()) {
            return this.weight--;
        }
    }
}
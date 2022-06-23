class Cats {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.say = 'Meo Meo';
        this.amount = false;
    }

    catchMouse(speedcat, speedmouse) {
        if (speedcat === speedmouse) {
            this.amount = true;
        } else alert('Chuot vua moi chay thoat');
    }

    eatMouse(rat) {
        if (rat.status === true && this.amount === true) {
            this.weight += rat.weight;
            rat.status = false;
            alert('Mèo đã ấm bụng! Trọng lượng mèo: ' + this.weight);
        } else alert('Meo vua an khong khi xong');
    }
}
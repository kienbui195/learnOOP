class Human {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    checkWeight() {
        return this.weight;
    }

    saySomething() {
        document.write('Halo, my name is ' + this.name + '.I am ' + this.gender + '. My weight is ' + this.weight + '.');
    }

    eatApple(isEmpty,appleweight) {
        if (!isEmpty) {
            this.weight++;
            appleweight--;
        }
    }

    viewAppleWeight(appleweight) {
        return appleweight;
    }

    viewInfo(human2) {
        return document.write('name: ' + human2.name + '. Gender: ' + human2.gender + '. weight: ' + human2.weight);
    }
}

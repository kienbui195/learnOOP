
class Hero {
    constructor(image, top, left, size, speed) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.speed = speed;
    }

    getHeroElement(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    moveRight() {
        this.left += 20;
        console.log('ok: ' + this.left);
    }

    setSpeed(speed) {
        this.left += speed;
    }

    moveLeft() {
        this.left -= 20;
        console.log('ok: ' + this.left);
    }

    moveTop() {
        this.top -= 20;
        console.log('ok: ' + this.top);
    }

    moveBottom() {
        this.top += 20;
        console.log('ok: ' + this.top);
    }
}

let hero = new Hero('maxresdefault.png', 20, 30, 60,20);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
        hero.setSpeed(120);
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();
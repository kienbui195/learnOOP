class Cars {
    constructor(x,y,width,height,speed) {
        this.positionX = x;
        this.positionY = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    draw() {
        this.ctx.beginPath();
        const image = new Image(this.width,this.height);
        image.src = 'maxresdefault.png'
        this.ctx.drawImage(image,this.positionX,this.positionY);
        this.ctx.fill();
        this.ctx.closePath();
    }

    moveRight() {
        this.positionX += this.speed;
    }

    moveLeft() {
        this.positionX -=  this.speed;
    }

    moveTop() {
        this.positionY -= this.speed;
    }

    moveDown() {
        this.positionY += this.speed;
    }


}
class Brickwall {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('game');
        this.ctx = this.canvas.getContext('2d');
        this.flag = 'move';
    }

    moveDown() {
        this.y += 5;
    }

    draw() {
        this.ctx.beginPath();
        const img = new Image(this.width,this.height);
        img.src = 'tuonggach.jpg';
        this.ctx.drawImage(img,this.x, this.y);
        this.ctx.fill();
        this.ctx.closePath();
    }
}
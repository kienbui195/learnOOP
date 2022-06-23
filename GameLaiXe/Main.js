let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
let car = new Cars(280, 450, 10, 5, 20);
let brickwall = new Brickwall(Math.random() * 350, 0, 100, 20);
let point = 0;
car.draw();


window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37:
            car.moveLeft();
            break;
        case 39:
            car.moveRight();
            break;
        case 38:
            car.moveTop();
            break;
        case 40:
            car.moveDown();
            break;
        case 18:
            car.setSpeed(80);
            break;
    }
})


function movebrickwall() {
    if (brickwall.y >= brickwall.canvas.height) {
        brickwall.y = 0;
    }
    brickwall.moveDown();
}

function play() {
    clearCanvas();
    brickwall.draw();
    movebrickwall();
    car.draw();
    checkCollision();
}


function clearCanvas() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function checkCollision() {
    if (brickwall.y + brickwall.height >= car.positionY
        && brickwall.x >= car.positionX - brickwall.width
        && brickwall.x <= car.positionX + car.width) {
            alert('Lose. Your point: ' + point );
            clearInterval(setInterval(play, 50));
        } else if (brickwall.y + brickwall.height >= canvas.height) {
        point++;
        brickwall.y = 0;
        brickwall.draw();
    }
    }



setInterval(play, 100);
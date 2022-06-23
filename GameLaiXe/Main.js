let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
let car = new Cars(280, 450, 10, 5, 20);
let brickwall = new Brickwall(Math.random() * 350, 0, 100, 20);
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
    if (brickwall.x + brickwall.width >= car.positionX && brickwall.x + brickwall.width <= car.positionX + car.width) {
        if (brickwall.y + brickwall.height >= car.positionY && brickwall.y + brickwall.height <= car.positionY + car.height) {
            alert('Lose');
            clearInterval(setInterval(play, 50));
        }
    }
}

setInterval(play, 100);
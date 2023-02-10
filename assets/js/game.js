// Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

// Frame rate
const frames = 1000 / 15;

// Canvas style
canvas.style.border = "10px solid green";
const bgColor = '#FFFFFF';

// Canvas dinensions
const width = canvas.width;
const height = canvas.height;

// Runs while game is running
let gameLoop;

function drawBoard() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
}

function frame(){
    drawBoard();
    // drawFood();
    // moveSnake();
    // drawSnake();
    // displayScore();
}

gameLoop = setInterval(frame, frames);

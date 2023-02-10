// Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

// Frame rate
const frames = 1000 / 15;

// Canvas style
canvas.style.border = "10px solid green";
const bgColor = '#FFFFFF';

// Snake style
const Sbody = "#F02010"

// Canvas dinensions
const width = canvas.width;
const height = canvas.height;

// Runs while game is running
let gameLoop;

const square = 20;

function drawBoard() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
}

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * square, y * square, square, square);
    ctx.strokeStyle = bgColor;
    ctx.strokeRect(x * square, y * square, square, square); 
}

function drawFood() {

}

// Loops through game functions
function frame() {
    drawBoard();
    drawSquare(10, 0, Sbody)
    // drawFood();
    // moveSnake();
    // drawSnake();
    // displayScore();
}

gameLoop = setInterval(frame, frames);

// Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

// Frame rate
const frames = 1000 / 15;

// Canvas style
canvas.style.border = "10px solid green";
const bgColor = '#FFFFFF';

// Snake style
const sBody = "#F02010"
const sHead = "#F020FF"


// Canvas dinensions
const width = canvas.width;
const height = canvas.height;

// Runs while game is running
let gameLoop;

// size of custom pixel in canvas
const sqrSize = 20;

function drawBoard() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
}

function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * sqrSize, y * sqrSize, sqrSize, sqrSize);
    ctx.strokeStyle = bgColor;
    ctx.strokeRect(x * sqrSize, y * sqrSize, sqrSize, sqrSize); 
}

// Snake
let snake = [
    {x:2, y:0}, // Head
    {x:1, y:0}, // Body
    {x:0, y:0} // Tail
]

function drawSnake() {
    snake.forEach((square, i) => {
        // the first object in the array gets sHead color and the rest get sBody
        const color = i === 0 ? sHead : sBody;
        drawSquare(square.x, square.y, color);
    });
}

// Amount of squares on x and y axis
const horizontalSq = width / sqrSize;
const verticalSq = height / sqrSize;

let food = generateFood();
function generateFood() {
    let food = {
        x: Math.floor(Math.random() * horizontalSq),
        y: Math.floor(Math.random() * verticalSq),
    };
    return food;
    while(snake.some(square => square.x === food.x && square.y === food.y)) {
    let food = {   
        x: Math.floor(Math.random() * horizontalSq),
        y: Math.floor(Math.random() * verticalSq),
    };
    return food;
    }
}

function drawFood() {
    drawSquare(food.x, food.y, 'red')
}

// Loops through game functions
function frame() {
    drawBoard();
    drawFood();
    // moveSnake();
    drawSnake();
    // displayScore();
}

// runs the function "frames" 1000/15 milliseconds
gameLoop = setInterval(frame, frames);

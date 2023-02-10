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

// Directions
let currentDirection = "";

// Canvas dinensions
const width = canvas.width;
const height = canvas.height;

let gameRunning = false;

// Main loop
let gameLoop;

// size of custom pixel in canvas
const sqSize = 20;

function drawBoard() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
}

// Draw square, wich is used as pixel in game 
function drawSquare(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * sqSize, y * sqSize, sqSize, sqSize);
    ctx.strokeStyle = bgColor;
    ctx.strokeRect(x * sqSize, y * sqSize, sqSize, sqSize); 
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
const horizontalSq = width / sqSize;
const verticalSq = height / sqSize;

let food = generateFood();
function generateFood() {
    let food = {
        x: Math.floor(Math.random() * horizontalSq),
        y: Math.floor(Math.random() * verticalSq),
    };
    while(snake.some(square => square.x === food.x && square.y === food.y)) {
    let food = {   
        x: Math.floor(Math.random() * horizontalSq),
        y: Math.floor(Math.random() * verticalSq),
    };
}
return food;
}

function drawFood() {
    drawSquare(food.x, food.y, 'red')
}

function moveSnake() {
    if(!gameRunning) return;
    // spreads value of first object in snake array and saves it to head
    const head = {...snake[0]};
    switch(currentDirection) {
        case 'ArrowRight':
            head.x += 1;
            break;
        case 'ArrowLeft':
            head.x -= 1;
            break; 
        case 'ArrowDown':
            head.y += 1;
            break; 
        case 'ArrowUp':
            head.y -= 1;
            break; 
            }

            // Removes last object from snake array
            snake.pop();

            // Adds new head object in snake array
            snake.unshift(head);
}

// waits for the page to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keyup', setDirection);
    function setDirection(event) {
        const newDirection = event.key;
        const oldDirection = currentDirection;
        // Hinders snake from moving in opposit direction
        
        if(!gameRunning) {
            gameRunning = true;
            gameLoop = setInterval(frame, frames);
        }
        currentDirection = newDirection;
    }
})

// Loops through game functions
function frame() {
    drawBoard();
    drawFood();
    moveSnake();
    drawSnake();
    // displayScore();
}

// runs the function "frame" 1000/15 milliseconds
frame();
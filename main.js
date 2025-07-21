let tubesArray;
let rectangle1;
let rectangle2;
let rectangle3;
let rectangle4;
let rectangle5;
let rectangle6;
let rectangle7;

let myXPos = 100;
let myYPos = 250;
let myRightX = myXPos + 50;
let myRightY = myYPos;
let score = 0;
let flappyImage;

let enemyXPos = 300;
let enemyYPos = 300;


function preload() {
    flappyImage = loadImage("flappyBird.png");
}

function setup() {
    createCanvas(1000, 500);
    background(0);

    rectangle1 = new Rectangle(250, 0, 100, random(50, 200));
    rectangle2 = new Rectangle(450, 0, 100, random(50, 200));
    rectangle3 = new Rectangle(650, 0, 100, random(50, 200));
    rectangle4 = new Rectangle(850, 0, 100, random(50, 200));

    let fifthRectangleSize = random(50, 200);
    rectangle5 = new Rectangle(300, bottomRectangleY_Val(fifthRectangleSize), 100, fifthRectangleSize);
    let sixthRectangleSize = random(50, 200);
    rectangle6 = new Rectangle(600, bottomRectangleY_Val(sixthRectangleSize), 100, sixthRectangleSize);
    let seventhRectangleSize = random(50, 200);
    rectangle7 = new Rectangle(900, bottomRectangleY_Val(seventhRectangleSize), 100, seventhRectangleSize);

    tubesArray = [rectangle1, rectangle2, rectangle3, rectangle4, rectangle5, rectangle6, rectangle7];
}

function bottomRectangleY_Val(size) {
    let yVal = 500 - size;
    return yVal;
}

function isBetween(x, min, max) {
    return x >= min && x <= max;
}

function draw() {
    background(0);
    fill(0, 255, 0);

    let birdLeft = myXPos;
    let birdRight = myXPos + 50;
    let birdTop = myYPos;
    let birdBottom = myYPos + 50;

    // Move and draw pipes
    for (let i = 0; i < tubesArray.length; i++) {
        let pipe = tubesArray[i];

        // Update pipe position
        pipe.xVal -= 5;
        pipe.left = pipe.xVal;
        pipe.right = pipe.xVal + pipe.widthVal;

        // Reset pipe if off-screen
        if (pipe.xVal < -100) {
            pipe.xVal = 1000;
            pipe.heightVal = random(50, 200);
            pipe.passed = false;

            // Adjust bottom pipes
            if (i >= 4) { // Bottom pipes (rectangle5,6,7)
                pipe.yVal = bottomRectangleY_Val(pipe.heightVal);
            }

            // Update boundaries after reset
            pipe.left = pipe.xVal;
            pipe.right = pipe.xVal + pipe.widthVal;
            pipe.top = pipe.yVal;
            pipe.bottom = pipe.yVal + pipe.heightVal;
        }

        // Draw pipe
        rect(pipe.xVal, pipe.yVal, pipe.widthVal, pipe.heightVal);

        // Collision check
        if (birdRight > pipe.left && birdLeft < pipe.right && birdBottom > pipe.top && birdTop < pipe.bottom) {
            gameOver(); // Stop game on collision
        }
    }

    // Bird movement
    image(flappyImage, myXPos, myYPos, 50, 50);
    myYPos += 2; // Gravity
    if (keyIsDown(UP_ARROW)) {
        myYPos -= 5; // Jump
    }

    //checking passes
    for (let i = 0; i < tubesArray.length; i++) {
        if (myXPos > tubesArray[i].xVal + tubesArray[i].widthVal && !tubesArray[i].passed) {
            score++; // Increase score
            tubesArray[i].passed = true;
        }
        textSize(32);
        fill(255); // White text
        text("Score: " + score, 20, 40);
    }
}

    function gameOver() {
        background(255, 0, 0); // Red screen on crash
        textSize(48);
        fill(255);
        text("GAME OVER", 375, 250);
        noLoop(); // Stop the game
        noStroke();
        fill(255, 0, 0);
    }

class Rectangle {
    constructor(x, y, width, height) {
        this.xVal = x;
        this.yVal = y;
        this.widthVal = width;
        this.heightVal = height;
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
        this.passed = false;
    }
}

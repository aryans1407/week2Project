let myXPos = 100;
let myYPos = 250;
let enemyXPos = 300;
let enemyYPos = 300;
let flappyImage;
myLeft = myXPos - 25;
myRight = myXPos + 25;
let firstRectangleX = 250;
let secondRectangleX = 450;
let thirdRectangleX = 650;
let fourthRectangleX = 850;
let fifthRectangleX = 300; 
let sixthRectangleX = 600;
let seventhRectangleX = 800;


enemyLeft = firstRectangleX - 25;
enemyRight = firstRectangleX + 25;
enemyLeft2 = secondRectangleX - 25;
enemyRight2 = secondRectangleX + 25;
enemyLeft3 = thirdRectangleX - 25;
enemyRight3 = thirdRectangleX + 25;
enemyLeft4 = fourthRectangleX - 25;
enemyRight4 = fourthRectangleX + 25;
enemyLeft5 = fifthRectangleX - 25;
enemyRight5 = fifthRectangleX + 25;
enemyLeft6 = sixthRectangleX - 25;
enemyRight6 = sixthRectangleX + 25;
enemyLeft7 = seventhRectangleX - 25;
enemyRight7 = seventhRectangleX + 25;

let myTop;
let enemyTop, enemyBottom;

let score = 0;


function preload(){
    flappyImage = loadImage("flappyBird.png");
}

function setup() {
    createCanvas(1000, 500);
    background(0);
}

function bottomRectangle(xVal, size) {
    yVal = 500 - size;
    rect(xVal, yVal, 100, size);
}

function draw() {
    textSize(22);
    text("score:",score, 0, 0);
    
    background(0);
    fill(0, 255, 0);
    //TOP
    rect(firstRectangleX, 0, 100, 100);
    firstRectangleX -= 5;
    rect(secondRectangleX, 0, 100, 175);
    secondRectangleX -= 5;
    rect(thirdRectangleX, 0, 100, 200);
    thirdRectangleX -= 5;
    rect(fourthRectangleX, 0, 100, 150);
    fourthRectangleX -= 5;

    //BOTOOM
    bottomRectangle(fifthRectangleX, 150);
    fifthRectangleX -= 5;
    bottomRectangle(sixthRectangleX, 200);
    sixthRectangleX -= 5;
    bottomRectangle(seventhRectangleX, 170);
    seventhRectangleX -= 5;

    
    image(flappyImage, myXPos,myYPos,50,50); 
    myYPos +=2;
    if (keyIsDown(UP_ARROW)) {
       myYPos -= 5;
    }
    if (myLeft > enemyRight || myRight < enemyLeft) {
        score+=1;
    }
    if (myLeft > enemyRight2 || myRight < enemyLeft2) {
        score+=1;
    }
    if (myLeft > enemyRight3 || myRight < enemyLeft3) {
        score+=1;
    } 
    if (myLeft > enemyRight4 || myRight < enemyLeft4) {
        score+=1;
    }
    if (myLeft > enemyRight5 || myRight < enemyLeft5) {
        score+=1;
    }
    if (myLeft > enemyRight6 || myRight < enemyLeft6) {
        score+=1;
    }
    if (myLeft > enemyRight7 || myRight < enemyLeft7) {
        score+=1;
    }
}


var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img;
var img2;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup

function preload(){
  img =loadImage('https://amity-bouzu.github.io/images/pond.png');
  img2 = loadImage('https://amity-bouzu.github.io/images/frog.png');
}


function draw() {
  background(img);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="win") {
    youWin();
  }
  
  
  fill(255); // Set fill color to white
  text("Score: " + score, width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background(img);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
    gameState = "L3";
  }
  
  // Draw the image instead of ellipse
  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
} // end level two

function levelThree(){
  background(img);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>49){
    gameState = "win";
        textSize(100);
  text("You Win!!", width/2, height-20);
  textSize(20);
  }
  

  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
} // end level three
function youWin(){
  background (img);
  image(img2, 600, 600);
    textSize(100);
  text("You Win!!", width/2, height-20);
  textSize(20);
  var img2Size = 200;
  image(img2, width/2 - img2Size/2, height/2 - img2Size/2, img2Size, img2Size);
}

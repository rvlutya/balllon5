var bow , arrow,  background, red_balloon,pink_balloon, green_balloon ,blue_balloon ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;




function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
  
}



function setup() {
  createCanvas(600, 500);
  

  
  //creating background
  background =createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0 
   red_balloon= new Group();
  green_balloon= new Group();
  blue_balloon= new Group();
  pink_balloon= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
  
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  
  bow.y = World.mouseY
  
   
  if (keyWentDown("space")) {
    createArrow();
    
  }
  
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

  if (arrowGroup.isTouching(red_balloon)) {
  red_balloon.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}
  
  
  
  
if (arrowGroup.isTouching(green_balloon)) {
  green_balloon.destroyEach();
  arrowGroup.destroyEach();
  score=score+5;
}



 if (arrowGroup.isTouching(blue_balloon)) {
  blue_balloon.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}  
  
 
  
  if (arrowGroup.isTouching(pink_balloon)) {
  pink_balloon.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
  
  
  drawSprites();
    text("Score: "+ score, 200,30);
}


 function createArrow() {
  var arrow= createSprite(470, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 300;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime =75;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}

function redBalloon() {
  var redB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redB.addImage(red_balloonImage);
  redB.velocityX = 3;
  redB.scale = 0.1;
  redB.lifetime = 150;
  red_balloon.add(redB);
  }

function blueBalloon() {
  var blueB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blueB.addImage(blue_balloonImage);
  blueB.velocityX = 3;
  blueB.scale = 0.1;
  blueB.lifetime = 150;
  blue_balloon.add(blueB);
}

function greenBalloon() {
  var greenB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenB.addImage(green_balloonImage);
  greenB.velocityX = 3;
  greenB.scale = 0.1;
  greenB.lifetime = 150;
  green_balloon.add(greenB);
}

function pinkBalloon() {
  var pinkB = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkB.addImage(pink_balloonImage);
  pinkB.velocityX = 3;
  pinkB.scale = 1
  pinkB.lifetime = 150;
  pink_balloon.add(pinkB);

}






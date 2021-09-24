var dino,dinoImg;
var Ground,InvisibleGround;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var backgrounds,bgImg;
var cactus1Img,cactus2Img;
var obstacleGroup;

function preload() {
    ground = loadImage("ground.png");
    bgImg = loadImage("bg1.png");
    dinoImg = loadImage("dino.png");
    cactus1Img = loadImage("cactus.png");
    cactus2Img = loadImage("cactus2.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    backgrounds = createSprite(windowWidth-605,windowHeight-90,10,10);
    backgrounds.addImage(bgImg);
    backgrounds.scale = 2.2;

    dino = createSprite(windowWidth-1320,windowHeight-283,10,10);
    dino.addImage(dinoImg);
    dino.scale = 0.2/3;
    dino.setCollider("circle",0,0,480);
    dino.debug = true;

    Ground = createSprite(windowWidth-900,windowHeight,10,10);
    Ground.addImage(ground);
    Ground.scale = 0.6;
    
    InvisibleGround = createSprite(windowWidth-1320,windowHeight-225,55,30);
    InvisibleGround.visible = false;

    obstacleGroup = createGroup();
}
function draw() {
    background("grey");

    if(gameState === PLAY) {
    //dino.velocityX = 5;
    Ground.velocityX = -4;

    if(Ground.x === Ground.x) {
        Ground.velocityX = -4;

       
        }
        
        if(Ground.x-150 < 0) {

            Ground.x = Ground.width/4;

        }
        if(keyDown("up")) {
            dino.velocityY = -16;

        }
        if(dino.y < windowHeight) {
            dino.velocityY = dino.velocityY+0.8;

        }

        if(obstacleGroup.isTouching(dino)) {
            gameState = END;

        }
        
        dino.collide(InvisibleGround);
        cactus();
        
    }else if(gameState === END) {
        dino.velocityX = 0;
        dino.visible = false;
        Ground.velocityX = 0;
        obstacleGroup.setLifetimeEach(-1);
        obstacleGroup.setVelocityXEach(0);

        console.log("you lose");

    }
    
    
    drawSprites();
}
function cactus() {
    if (frameCount % 60 === 0){
        var obstacle = createSprite(windowWidth-800,windowHeight-290);
        obstacle.velocityX = -6;
        
         var rand = Math.round(random(1,2));
         switch(rand) {
           case 1: obstacle.addImage(cactus1Img);
           break;
           case 2: obstacle.addImage(cactus2Img);
           break;
          default: break;
         }
        
                 
         obstacle.scale = 0.2;
        
         obstacleGroup.add(obstacle);
      }
    
}
                              
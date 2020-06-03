
function setup() {
 canvas=createCanvas(500,500);
 ground=createSprite(250,490,500,20);
 ground.shapeColor=0;
 ball=createSprite(100,350,30,30);
 ball.shapeColor=0;
 upButton=createButton('↑');
 upButton.position(50,450,60,60);
 platform= createSprite(100,350,60,20);
 platform.shapeColor="black";
 platform.velocityX=-1;
 blocksgroup=createGroup();
}

function draw() {
 background("peach")
 textSize(22);
 text("dont let the ball touch the ground",100,50);

 upButton.mousePressed(()=>{
     ball.velocityY=-12;
 })
 ball.velocityY=ball.velocityY+0.8;
 ball.collide(platform);
 spawnblocks();
 ball.collide(blocksgroup);
 if(ball.isTouching(ground)){
     blocksgroup.setVelocityXEach(0);
     blocksgroup.destroyEach();
 }
 drawSprites();
}
function spawnblocks(){
    if(World.frameCount%60===0){
        var r=Math.round(random(100,400))
        block1=createSprite(490,r,200,30);
        block1.shapeColor="black";
        block1.velocityX=-4;
        block1.lifetime=500;
        blocksgroup.add(block1);
    }
}

  
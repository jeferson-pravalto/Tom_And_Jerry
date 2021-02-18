
var tom,tom_img, tom_running, tom_hey
var jerry, jerry_img, jerry_tease, jerry_investigate
var garden, garden_img


function preload() {

    tom_img = loadAnimation("cat1.png");
    tom_running = loadAnimation("cat2.png","cat3.png");
    tom_hey = loadAnimation("cat4.png");
    jerry_img = loadAnimation("mouse1.png","mouse2.png","mouse3.png");
    jerry_investigate = loadAnimation("mouse4.png");
    garden_img = loadAnimation("garden.png");
}

function setup(){
    createCanvas(975,705);

    garden = createSprite(487.5,352.5,10,10);
    garden.addAnimation("garden_img",garden_img);
    garden.scale = 1;
  
    tom = createSprite(750,550,10,10);
    tom.addAnimation("tom_img",tom_img);
    tom.addAnimation("Tom_Running",tom_running);
    tom.addAnimation("Tom_spank",tom_hey);
    tom.scale = 0.2;

    jerry = createSprite(250,600,10,10);
    jerry.addAnimation("jerry_img",jerry_img);
    jerry.addAnimation("Jerry_Investigate",jerry_investigate);
    jerry.scale = 0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

 
  keyPressed();
  if(tom.x - jerry.x < (tom.width-jerry.width)/2){
     tom.velocityX=0;
     tom.changeAnimation("Tom_spank");
     jerry.changeAnimation("Jerry_Investigate");
     }
  
 
  
  drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.changeAnimation("Tom_Running");
  }

}

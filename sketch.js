var balloon;
var database;
var position

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


  function setup() {
    database=firebase.database();
    createCanvas(1500,700);
  
    balloon=createSprite(250,450,150,150);
    balloon.addAnimation("hotAirBalloon",balloonImage1);
    balloon.scale=0.5;
  
    textSize(20); 

    var balloonref=database.ref('balloon/position')  
     balloonref.on("value",readPosition,showError) 

 

  }
  
  

function draw(){
    background(bg);
    if(keyDown(LEFT_ARROW)){
        writePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+10);
    }
   
    drawSprites();
}

function writePosition(x,y){
    database.ref('balloon/position').set({
        'x': balloon.x + x ,
        'y': balloon.y + y
    })
    }

function readPosition(data){
    position=data.val()
    balloon.x=position.x 
    balloon.y=position.y
    
    
}

function showError()
{console.log("error")}
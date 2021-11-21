var iss, spacecraft;
var bg, issimg, scimg, scimg1, scimg2, scimg3;
var hasDocked = false
function preload() {
  bg = loadImage("spacebg.jpg");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2 = loadImage("spacecraft3.png");
  scimg3 = loadImage("spacecraft4.png");
  issimg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(280,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15

  iss = createSprite(400,40);
  iss.addImage(issimg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);  
  spacecraft.addImage(scimg)
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(scimg3)
      spacecraft.x = spacecraft.x-2
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(scimg2)
      spacecraft.x = spacecraft.x+1
    }
    
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1)
    }
  }

  if(spacecraft.y<=(iss.y+70) && spacecraft.x <(iss.x-10)){
    hasDocked = true
    textsize(25)
    fill("white")
    text("Docking Succesful", 200,300);
  }
  drawSprites();
}
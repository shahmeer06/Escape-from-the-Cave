var cave;
var spikeImg, spike1, spike2, water;
var gamelevel;
var player, playerAnR, playerImg, playerAnL, playerjumpR, playerjumpL;
var ground;
function preload()
{
  cave = loadImage('caveImg.jpg')
  spikeImg = loadImage('spikesimg.png')
  playerAnR = loadAnimation('player1.png', 'player2.png', 'player3.png')
  playerAnL = loadAnimation('player1L.png', 'player2L.png', 'player3L.png')
  playerImg = loadAnimation('playerS.png')
  playerjumpR = loadAnimation('playerJR.png')
  playerjumpL = loadAnimation('playerJL.png')
}
function setup(){
  createCanvas(windowWidth, 975)
  gamelevel = 1
  player = createSprite(115, 745, 30, 30)
  player.scale = .8
  player.addAnimation('player_standing', playerImg)
  
  player.addAnimation('playerwalkingR', playerAnR) 

  player.addAnimation('playerwalkingL', playerAnL) 

  player.addAnimation('PlayerjumpR', playerjumpR)

  player.addAnimation('PlayerjumpL', playerjumpL)

  ground = createSprite(displayWidth / 2, 834, displayWidth * 2, 10)

  ground.visible = false
  

}

function draw()
{
  background(0)
  image(cave, 0, 0, displayWidth * 2, displayHeight - 100)

 

 

player.collide(ground)
  
  
 
 if (gamelevel === 1){
  spike1 = createSprite(577, 886, 20, 20);
  spike1.addImage(spikeImg) 
  spike1.scale = 0.3

  spike2 = createSprite(1104, 886, 20, 20);
  spike2.addImage(spikeImg) 
  spike2.scale = 0.3
if (player.x > 1362){
  gamelevel =   2
}

if(keyDown("RIGHT_ARROW")){
  player.x = player.x + 3
  player.changeAnimation('playerwalkingR', playerAnR)
}
else
  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 3
    player.changeAnimation('playerwalkingL', playerAnL)
  }


if(keyWentDown('SPACE') && keyWentDown('LEFT_ARROW') && (player.y <= 734)){
  player.x = player.x -3
  player.y = player.y -3
  
  player.changeAnimation('PlayerjumpL', playerjumpL)
}
else
  if (keyWentUp('SPACE') && keyWentUp('LEFT_ARROW')){
    player.y = 733.4
    console.log("helo")
  }
  



else
  if(keyWentDown('SPACE') && keyWentDown('RIGHT_ARROW') && (player.y <= 734)){
    player.x = player.x + 3
    player.y = player.y - 3
    player.changeAnimation('PlayerjumpR', playerjumpR)
  }
else
    if (keyWentUp('SPACE') && keyWentUp('RIGHT_ARROW')){
      player.y = 733.4
    }
  


else
  if(keyDown('SPACE')){
    player.y = player.y - 2
    player.changeAnimation('player_standing', playerImg)

    if (keyWentUp('SPACE')){
     
      player.y = player.y + 3
    }
}

else( player.changeAnimation('player_standing', playerImg))


}

if (gamelevel === 2){
  spike1 = createSprite(577, 821, 20, 20) 
  water = createSprite(200, 200, 30, 50)
}


 drawSprites()

 textSize(20)
 text("x: " + mouseX, 200, 200)
 text("y: " + mouseY, 200, 280)

 
}

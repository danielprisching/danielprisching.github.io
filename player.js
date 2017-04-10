var player = {
  x: 200,
  y: 200,
  w: 40,
  h: 40,
  speed: 3
};

function drawPlayer(context) {
  var x = player.x - (player.w / 2);
  var y = player.y - (player.h / 2);
  context.fillStyle = '#FF0000';
  context.fillRect(x,y, player.w, player.h);
}
  
function movePlayer(dir,enemies) {
  switch (dir) {
    case "left": 
      player.x -= player.speed;

      for(var i in enemies){
      if((enemies[i].x - enemies[i].w/2 < player.x - player.w/2) && (player.x - player.w/2 < enemies[i].x + enemies[i].w/2)){
        if((enemies[i].y - enemies[i].h/2 < player.y + player.h/2 ) && (player.y - player.h/2 < enemies[i].y + enemies[i].h/2)){
        player.x = enemies[i].x + enemies[i].w/2 + player.w/2
        enemies[i].direction = 0
      }
      }
    }
      

      if (player.x < 40) {
        player.x = 20;
      }
      break;
    case "right":
      player.x += player.speed;

      for(var i in enemies){
      if((enemies[i].x + enemies[i].w/2 > player.x + player.w/2) && (player.x + player.w/2 > enemies[i].x - enemies[i].w/2)){
        if((enemies[i].y - enemies[i].h/2 < player.y + player.h/2 ) && (player.y - player.h/2 < enemies[i].y + enemies[i].h/2)){
        player.x = enemies[i].x - enemies[i].w/2 - player.w/2
        enemies[i].direction = 1
      }
      }
    }


      if (player.x > 780) {
        player.x = 780;
      }
      break;
    case "up":

    for(var i in enemies){
      if((player.y - player.h/2 > enemies[i].y - enemies[i].h/2) && (player.y - player.h/2 < enemies[i].y + enemies[i].h/2 )){
        if((player.x-player.w/2 < enemies[i].x + enemies[i].w/2) && (player.x + player.w/2 > enemies[i].x - enemies[i].w/2)){
          player.y = enemies[i].y + enemies[i].h/2 + player.h/2
          enemies[i].direction = 2
        }
      }

    }


      player.y -= player.speed;
      if (player.y < 20) {
        player.y = 20;
      }
      break;
    case "down":
      player.y += player.speed;

      for(var i in enemies){
        if((player.y + player.h/2 < enemies[i].y + enemies[i].h/2) && (player.y + player.h/2 > enemies[i].y - enemies[i].h/2)){
          if((player.x-player.w/2 < enemies[i].x + enemies[i].w/2) && (player.x + player.w/2 > enemies[i].x - enemies[i].w/2)){
          player.y = enemies[i].y - enemies[i].h/2 - player.h/2
          enemies[i].direction = 3
        }
        }
      }

      if (player.y > 380) {
        player.y = 380;
      }
      break;
  }
}
//adds one speed to the player
function fasten() {
  alert("2fast4me")
  player.speed = player.speed +1;
  if (player.speed > 10){
    player.speed = 10;
  }
}

function slowDown(){
  alert("that was 2fast4me")
  player.speed = player.speed -1
  if (player.speed < 1) {
    player.speed = 1;
  }
}

//resets the games
function reset() {
  player.x = 200;
  player.y = 200;
  player.speed = 3;

enemies.splice(0,4);
  createEnemy();
}

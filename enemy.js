var enemies = [];//enemies.push(createEnemy())
function createEnemy() {

	for (i = 0; i < 4; i++) {
		var enemy = {

	x:getRandomInt(360),
	y:getRandomInt(360),
	w: 20,
	h: 20,
	speed: 1,
	direction: randomDirection()

}

	enemies.push(enemy);

	
	}

}


function randomDirection() {
	var direction = Math.floor((Math.random() * 3) + 1) //random number 1-3
	return direction
}
function getRandomInt(s){
	var numero = Math.floor((Math.random()* s) +1)
	return numero
}

function drawEnemy(context) {
	$.each(enemies, function(index, enemy){
		var x = enemy.x - (enemy.w / 2);
  		var y = enemy.y- (enemy.h / 2);
  		context.fillStyle = '#238218';
  		context.fillRect(x,y, enemy.w, enemy.h);

	})

}

function moveEnemy(enemy,player){
  switch (enemy.direction) {
    case 0: //left
      enemy.x -= enemy.speed;
      if ((enemy.x - enemy.w/2) == (player.x + player.w / 2)) {
      	if ((player.y - player.h/2 <= enemy.y + enemy.h /2 ) && (player.y + player.h/2 >= enemy.y - enemy.h/2 ) ) {
      	enemy.direction = 1;
      }
  }

     for(var i in enemies){ 
      if((enemies[i].x - enemies[i].w/2 < enemy.x - enemy.w/2) && (enemy.x - enemy.w/2 < enemies[i].x + enemies[i].w/2)){
        if((enemies[i].y - enemies[i].h/2 < enemy.y + enemy.h/2 ) && (enemy.y - enemy.h/2 < enemies[i].y + enemies[i].h/2)){
        enemies[i].direction = 0;
        enemy.direction = 1;
        break;
      }
      }
    }




      
      if (enemy.x < 10) {
        enemy.direction = 1;
      }

      break;
    case 1: //right
      enemy.x += enemy.speed;
      if ((enemy.x + enemy.w/2) == (player.x - player.w / 2)) {
  		if ((player.y - player.h/2 <= enemy.y + enemy.h /2 ) && (player.y + player.h/2 >= enemy.y - enemy.h/2 ) ){
      	enemy.direction = 0;
      }
      }



      if (enemy.x > 790) {
        enemy.direction = 0;
      }
      break;

    case 2: //up
      enemy.y -= enemy.speed;
      if(player.y + player.h/2 == enemy.y - enemy.h/2){
      	if((player.x - player.w/2 <= enemy.x + enemy.w/2) && (player.x + player.w/2 >= enemy.x - enemy.w/2) ){
      	enemy.direction = 3;
      }
      }
      if (enemy.y < 10) {
        enemy.direction = 3;
      }


      for(var i in enemies){
      if((enemy.y - enemy.h/2 > enemies[i].y - enemies[i].h/2) && (enemy.y - enemy.h/2 < enemies[i].y + enemies[i].h/2 )){
        if((enemy.x-enemy.w/2 < enemies[i].x + enemies[i].w/2) && (enemy.x + enemy.w/2 > enemies[i].x - enemies[i].w/2)){
          enemies[i].direction = 2;
          enemy.direction = 3;
          break;
        }
      }

    }





      break;
    case 3: //down
      enemy.y += enemy.speed;
            if(player.y - player.h/2 == enemy.y + enemy.h/2){
      	if((player.x - player.w/2 <= enemy.x + enemy.w/2) && (player.x + player.w/2 >= enemy.x - enemy.w/2) ){
      	enemy.direction = 2;
      }
      }

      if (enemy.y > 390) {
        enemy.direction = 2;
      }
      break;
  }

}


$(document).ready(function() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 400;
  document.body.appendChild(canvas);

/* Listen to keyboard events */
  var keysDown = {};
  
  window.addEventListener("keydown", function(e) {
     keysDown[e.keyCode] = true;
  }, false);
  
  window.addEventListener("keyup", function(e) {
    delete keysDown[e.keyCode];
  });

/* Left-click destroy enemy*/
document.addEventListener("click", tuhoaVihollinen);
function tuhoaVihollinen(event) {
  
  var xx =  event.clientX -123;
  var yy =   event.clientY -8;

  for (var i in enemies){
    if ((enemies[i].x - enemies[i].w/2 <= xx) && (xx <= enemies[i].x + enemies[i].w/2) &&(enemies[i].y - enemies[i].h/2 <= yy) && (yy <= enemies[i].y + enemies[i].h/2)) {
      enemies.splice(i,1);
      break;

    }
  }
}
  
  
/* Draw everything */
var render = function() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0,0,800,400);
  drawEnemy(ctx);
  drawPlayer(ctx);

};

/* Update stuff every loop */
var update = function(delta) {

    if (38 in keysDown) {
       movePlayer("up",enemies);
    } 
    if (40 in keysDown) {
       movePlayer("down",enemies);
    }
    if (37 in keysDown) {
      movePlayer("left",enemies);
    }
    if (39 in keysDown) {
      movePlayer("right",enemies);
    }

    for (var i in enemies) {
      moveEnemy(enemies[i],player);

    
  }
};

/* Time-based motion animation */
var main = function() {
  var now = Date.now();
  var delta = now - then;

  update(delta / 1000);
  render();

  then = now;


  // Request to do this again ASAP
  requestAnimationFrame(main);
};
  
var then = Date.now();
main();
createEnemy();//ResetFifagod
  
});
var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect=canvas.getBoundingClientRect();

ctx.fillStyle='lightgrey';
function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillRect(0,0,canvas.width,canvas.height);


requestAnimationFrame(loop);
}

loop();
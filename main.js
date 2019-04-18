var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect=getBoundingClientRect(canvas);

function loop(){

requestAnimationFrame(loop);
}

loop();
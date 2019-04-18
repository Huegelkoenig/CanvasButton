var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect=canvas.getBoundingClientRect();

var CButtons=[];
CButtons[0] = new CanvasButton(30,70,100,40,'test');

function loop(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='lightgrey';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for (let CButton of CButtons){
    CButton.draw();
  }

requestAnimationFrame(loop);
}

loop();
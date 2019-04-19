'use strict'
var canvas =document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var rect=canvas.getBoundingClientRect();

var CButtons=[];
CButtons[0] = new CanvasButton(30,70,100,40,'test','white',true);
CButtons[1] = new CanvasButton(120,150,100,40,'test','white',true);
CButtons[2] = new CanvasButton(400,300,100,40,'test','white',true);

for (let i=0; i<CButtons.length; i++){
  let ButtonName = 'B'+ (i+1);
  document.getElementById(ButtonName).addEventListener('click',(evt)=> {
    let buttonNr = parseInt(evt.target.id.slice(1,evt.target.length))-1;
    CButtons[buttonNr].clickable ? CButtons[buttonNr].makeUnclickable() : CButtons[buttonNr].makeClickable();
  })
}


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
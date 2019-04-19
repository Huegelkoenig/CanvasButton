'use strict'
class CanvasButton{
  constructor(x,y,width,height,text,color,clickable){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.text=text;
    this.color = color;
    this.clickable = clickable;
    this.clickHandler; //just a dummy to store te function to be able to remove the eventListener    
    if (this.clickable){
      this.makeClickable();
    }
  }

  makeClickable(){
    console.log('made clickable')
    this.clickable = true;
    this.clickHandler = this.clicker.bind(this)
    canvas.addEventListener('click', this.clickHandler,true);
  }

  makeUnclickable(){
    console.log('made UNclickable')
    this.clickable = false;
    canvas.removeEventListener('click', this.clickHandler,true);
  }

  clicker(evt) {
    if (evt.pageX-rect.left>=this.x && evt.pageX-rect.left<=this.x+this.width && evt.pageY-rect.top>=this.y && evt.pageY-rect.top<=this.y+this.height){
      this.color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
    }
  }


  yes(){
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 1;
  }
  no(){
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 3;
  }
  draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = 'black';
    ctx.font = "30px Verdana";
    ctx.fillText(this.text, this.x, this.y + this.height);

    this.clickable ? this.yes() : this.no();
    
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x+this.width, this.y);
    ctx.lineTo(this.x+this.width, this.y+this.height);
    ctx.lineTo(this.x, this.y+this.height);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}
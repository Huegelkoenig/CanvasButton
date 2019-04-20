'use strict'
class CanvasButton{
  constructor(canvas,x,y,width,height,text,color,clickable){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.rect = this.canvas.getBoundingClientRect();
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
    if (evt.pageX-this.rect.left>=this.x && evt.pageX-this.rect.left<=this.x+this.width && evt.pageY-this.rect.top>=this.y && evt.pageY-this.rect.top<=this.y+this.height){
      this.color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
    }
  }


  yes(){
    this.ctx.strokeStyle = 'black'
    this.ctx.lineWidth = 1;
  }
  no(){
    this.ctx.strokeStyle = 'red'
    this.ctx.lineWidth = 3;
  }
  draw(){
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = 'black';
    this.ctx.font = "30px Verdana";
    this.ctx.fillText(this.text, this.x, this.y + this.height);

    this.clickable ? this.yes() : this.no();
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
    this.ctx.lineTo(this.x+this.width, this.y);
    this.ctx.lineTo(this.x+this.width, this.y+this.height);
    this.ctx.lineTo(this.x, this.y+this.height);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.stroke();
  }
}
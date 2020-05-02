class Box{
    constructor(x,y) {
      this.body = rect(x,y,1,1);
      this.w = 1; 
      this.h = 1;
      this.x = x; 
      this.y = y;
      
    }
    display(){
      rectMode(CENTER);
      fill(0,0,0);
      rect(this.x, this.y, this.w,this.h);
    }
  };
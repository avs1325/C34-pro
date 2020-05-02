var line = [];
var index = 1;


function setup() {
  createCanvas(1000,1000);
}

function mouseDragged(){
  console.log(index);
  line[index] = new Box(mouseX,mouseY);
  index = index + 1; 
}

function draw() {
  background(255,255,255); 
  for (i = 0; i < index; i = i + 1){
    line[1].display();
  }
}
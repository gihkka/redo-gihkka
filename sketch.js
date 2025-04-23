var x = 250; //varibles to mark the starting points
var y = 250;

function setup(){
    createCanvas(500,500);
}

function draw (){
    background(0);
    circOne = 75
    circaTwo = 30
    fill("#FFFF00")
    ellipse(x,y,circOne,circOne);
    fill(0)
    triangle(x+100, 100, x, 250, x+100, 300);
    
    fill("#FFFFFF")
    ellipse(x+75,y,circaTwo,circaTwo);
    fill("#FFFFFF")
    ellipse(x+125,y,circaTwo,circaTwo);
    fill("#FFFFFF")
    ellipse(x+175,y,circaTwo,circaTwo);
    x = x + 3;
    x = x % 500 
}

console.log(x) //check value of x wow cool :D
function setup(){
    createCanvas(windowWidth,windowHeight)
}

function draw(){
    background(0, 0, 0, 3)
    fill("yellow")
    stroke("brown")
    for(var i = 0; i < 10000; i++){
        rect((i*10)%width,(i*10)%height,10,10,2)
        
    }
    for(var i = 0; i < 10000; i++){
        ellipse((i*1)%width,(i*3)%height,10,10,2)
        
    }
    
    fill("brown")
    if(mouseX < 300){
        ellipse(mouseX,mouseY,55,55)
    }else{
        rect(mouseX,mouseY,60,60)
    }
}

   
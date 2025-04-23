//https://p5js.org/reference/p5/Array/ is what I looked at
let frenList = ['kitty','doggo','pusheen'];
//will join with '.png'

//https://sweezy-cursors.com/cursor/pusheen-the-cat-animated/ pusheen
//https://sweezy-cursors.com/cursor/pugsheen-animated/ pugsheen
//https://ca.pinterest.com/pin/774124929355617/ kitty
//https://ca.pinterest.com/pin/377035800073691108/ doggo

//referenced https://www.w3schools.com/jsref/jsref_foreach.asp 
frenList.forEach((value, index, arr) => {
  arr[index] = value + '.png';
});

function setup(){
    createCanvas(windowWidth, windowHeight);
    frenList.push('pugsheen') //I'm not creative lol + referenced this https://www.w3schools.com/jsref/jsref_push.asp

    kitty= loadImage(frenList[0]);
    doggo = loadImage(frenList[1]);
    pushy = loadImage(frenList[2]);
    puggy = loadImage(frenList[3]);
    
}
function draw(){
    background('white');
    fill('white')
    image(pushy, mouseX, mouseY);
    catOuDog()
}

//based on the first lab 
function catOuDog(){
    if(mouseX < windowWidth/2){
        for(var i = 0; i < 10000; i++){
            image(kitty, (i*100)%width,(i*8)%height,100,100)
        }
        push(); //I also looked at this https://p5js.org/reference/p5/push/
        fill('green')
        textSize(500)
        text('✓', windowWidth/2,windowHeight/2);
        pop();
        image(pushy, mouseX, mouseY);
    }else{
        for(var i = 0; i < 10000; i++){
            image(doggo, (i*100)%width,(i*8)%height,100,100)
        }
        textSize(500)
        text('X', windowWidth/2,windowHeight/2);
        image(puggy, mouseX, mouseY);
    }
}



let axe;
let stars = [];
let sun;
let tree1;
let tree2;
let tree3;
let treeY = 350;
let treeSize = 50;

// the tutorial animating with media objects 1-6: https://p5js.org/tutorials/animating-with-media-objects/
function preload(){
    axe = loadImage("axe.gif"); // https://giphy.com/stickers/axe-throwing-throw-4Q6rYtXGULfsPAnkWu
    sun = loadImage("sun.gif"); // https://gifer.com/en/YaDP
    tree1 = loadImage("tree1.png"); //for all 3 trees - https://pixabay.com/illustrations/tree-green-nature-animation-logo-1716991/ 
    tree2 = loadImage("tree2.png");
    tree3 = loadImage("tree3.png");
    
}
// from the tutorial animating with media objects
function setup(){
    createCanvas(400,400);
    
    imageMode(CENTER);
    
    tree1.resize(100,100);
    tree2.resize(100,100);
    tree3.resize(100,100);

    tree1.filter(DILATE);
    tree2.filter(DILATE);
    tree3.filter(DILATE);
}


// from the tutorial animating with media objects + organizing code with functions
function draw(){
    background("lightblue")
    drawStumps();
    growTrees();
    updateAndDrawStars();

    function drawStumps(){
        stroke("#a7620e");
        strokeWeight(14);
        line(100, 400, 100, treeY);
        line(200, 400, 200, treeY);
        line(300, 400, 300, treeY);
    }
    //extends the stumps of the trees, like the stems of the flowers in the tutorial
    function growTrees(){
        image(tree1, 100, treeY, treeSize, treeSize);
        image(tree2, 200, treeY, treeSize, treeSize);
        image(tree3, 300, treeY, treeSize, treeSize);
    }
    //if mouse is pressed + held down, shows the sun
    if (mouseIsPressed){
        // I decided to put the watering/growing gif here, so that I can swap it when the trees shrink
        image(sun, mouseX, mouseY);
        sun.resize(50,50);
        if (treeY > 100){
            treeY-=1;
        }
    }
    // reworked it, so that I can shrink too + diff image
    //if any key is pressed, shows an ax
    if (keyIsPressed){
        axe.resize(70,70);
        image(axe, mouseX, mouseY);
        treeY+=1;
       
    }
    // made it so that it resets when it's all the way at the bottom
    if (treeY == 390){ 
        treeY = 380;
        treeSize = 50;
    }

}
//the rest is from the data structure garden tutorial https://p5js.org/tutorials/data-structure-garden/ 
//when the mouse is pressed it creates a star behind the sun
function mousePressed(){
    let star = createStar();
    star.x = mouseX;
    star.y = mouseY;
    stars.push(star);
  }
function updateAndDrawStars(){
    for (let star of stars){
        drawStar(star);
        star.size *=0.99;
        star.lifespan -= 1;
        if (star.lifespan <=0){
            let i = stars.indexOf(star);
            stars.splice(i, 1);
        }
    }
}
function createStar() {
    let star = {
        x: random(20,380),
        y: random(20,380),
        size: random(20,75),
        lifespan: random(255,300),
        color: color("#ffc800")
    };
    return star;
  }
  
  function drawStar(star) { 
    noStroke();
    fill(star.color);
  
    // originally the part that draws petals, changed to be stars to match the sun
    ellipse(star.x, star.y, star.size / 2, star.size);
    ellipse(star.x, star.y, star.size, star.size / 2);
  }

function setup(){
    createCanvas(windowWidth,windowHeight);

    mydei = loadImage('mydeiChim.png');
    phai = loadImage('phaiChim.png');
    chimTok = createVideo('chimeraTok.mp4'); //https://www.youtube.com/shorts/ZE3hRB5HzL0
    chimTok.hide();
    chimTok.volume(0);
    chimTok.play();
    awoo = createAudio('chimeraAwoo.wav'); //https://www.youtube.com/shorts/ZE3hRB5HzL0
    awoo.speed(10)
}

function draw(){
    background(phai);
    image(mydei, mouseX, mouseY);
    image(chimTok, windowWidth/2, windowHeight/2);
}

function mousePressed(){
    chimTok.play();
    awoo.speed(10)
    awoo.play();
}

function windowResized(){
    resizeCanvas(windowWidth,)
}
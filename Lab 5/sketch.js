let allthekitties = [];
let currentNum = 0;
let catShh;
let cX;
let cY;

function preload(){
    let url = 'https://api.thecatapi.com/v1/images/search?limit=15&category_ids=5';
    loadJSON(url, successCallback);
    
}

function successCallback(data){
    console.log(data);
    for(kitty of data){
        var kitty = createImg(kitty.url);
        kitty.hide();
        allthekitties.push(kitty);
    }
}

function setup(){
    createCanvas(1000,1000)
    background('black');
    fill('white')
    textSize(40)
    text('Click', 10, 40);
    

}

function mousePressed(){
    currentNum++
    currentNum = currentNum % allthekitties.length;
    image(allthekitties[currentNum],100,100,cX,cY );
}
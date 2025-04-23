let nameInput;
let button;
let greeting;
let explain;
let explainTwo;
let explainThree
let label;
let spicy;
let salty;
let sweet;

//images sources linked
function preload(){
    spicy = loadImage("spicy.png"); //https://cookierunkingdom.fandom.com/wiki/Burning_Spice_Cookie 
    sweet = loadImage("sweet.png"); //https://cookierunkingdom.fandom.com/wiki/Pure_Vanilla_Cookie/Gallery
    salty = loadImage("salty.png"); //https://cookierunkingdom.fandom.com/wiki/Fettuccine_Cookie
}

function setup(){
    createCanvas(2000, 1000);
    background(255);
    myRadio = createRadio();
    myRadio.position(10, 230)
    myRadio.option('Spicy')
    myRadio.option('Sweet')
    myRadio.option('Salty')

    greeting = createElement('h2', 'Create a Cookie Name!!');
    greeting.position(10, 5);
   
    explain = createElement('p', 'You are a brand new cookie, freshly baked from the Witches oven. Before you walk free on Earthbread, we must know what type of cookie you are, or what type of cookie you would like to be...? Anyways... We will be creating your name today!')
    explain.position(10, 50);
    label = createElement('label', 'What is your current name, fresh cookie?')
    label.position(10, 130)
    nameInput = createInput();
    nameInput.position(10, 150);

    explainTwo = createElement('p', '*decorate the page by stamping differnt cookies - each depend the selected attribute!')
    explainTwo.position(10, 170);
    explainThree = createElement('p', 'Choose a defining attribute for your cookie name!')
    explainThree.position(10, 190);
  
    button = createButton('submit');
    button.position(10, 260);
    button.mousePressed(welcome);

}
//partly from https://p5js.org/examples/input-elements-input-button/
function welcome() {
    let name = nameInput.value();
    let type = myRadio.value();

    greeting.html(`Welcome to Earthbread, ${type} ${name} Cookie!`);
    nameInput.value('');


}
function draw() {
    //from lab 3 + the other part of the animating with media 
    let cookie = myRadio.value();
    if(cookie == 'Spicy'){
        if(mouseIsPressed){
            spicy.resize(300,250);
            image(spicy, mouseX, mouseY);
        }
    }else if(cookie=='Sweet'){
        if(mouseIsPressed){
            sweet.resize(250,250);
            image(sweet, mouseX, mouseY);
        }
    }
    else if(cookie=='Salty'){
        if(mouseIsPressed){
            salty.resize(200,150);   
            image(salty, mouseX, mouseY);
        }
    }

}

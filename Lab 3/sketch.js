var colourPicker;
let strokeWeightSlider;
let myRadio;
var bgColourPicker;

function setup(){
    createCanvas(720,480);
    myRadio = createRadio();
    myRadio.position(750,50);
    myRadio.size(50);
    myRadio.option('lines')
    myRadio.option('circles')
    myRadio.option('squares')
    myRadio.selected('lines')
    colourPicker = createColorPicker('black');
    strokeWeightSlider = createSlider(1,10,5,1);
    bgColourPicker = createColorPicker('white');
    var bgColorbutton = createButton('Refresh');
    bgColorbutton.mousePressed(repaint);
    bgColourPicker.changed(repaint);
    background(bgColourPicker.value());
}

function draw(){
    strokeWeight(strokeWeightSlider.value());
    stroke(colourPicker.value());
    let c = myRadio.value();
    if(c == 'lines'){
        if(mouseIsPressed){
            line(mouseX, mouseY, pmouseX,pmouseY);
        }
    }else if(c=='circles'){
        if(mouseIsPressed){
            ellipse(mouseX, mouseY, 30,30);
        }
    }
    else{
        if(mouseIsPressed){
            rect(mouseX,mouseY, 20,20)   
        }
    }
}
function repaint(){
    background(bgColourPicker.value());
}
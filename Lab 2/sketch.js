var knuckles = {
    x: 0,
    y: 0,
    w: 40,
    y: 5,
    xSpeed: 5,
    ySpeed: 5,
    colour: 'red',
    outColour: 'purple',
    strokeSize: '90',

    draw: function(){
        fill(this.colour);
        stroke(this.outColour)
        strokeWeight(this.strokeSize);
        ellipse(this.x, this.y, this.w, this.h);

    },
    move: function(){
        this.x += this.xSpeed
        this.y += this.ySpeed
        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    
    }

};

var tails = {
    x: 600,
    y: 0,
    w: 10,
    y: 5,
    xSpeed: 10,
    ySpeed: 10,
    colour: 'yellow',
    outColour: 'blue',
    strokeSize: '2',

    draw: function(){
        fill(this.colour);
        stroke(this.outColour)
        strokeWeight(this.strokeSize)
        ellipse(this.x, this.y, this.w, this.h);

    },
    move: function(){
        this.x += this.xSpeed
        this.y += this.ySpeed
        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    
    }

};

var sonic = {
    x: 700,
    y: 0,
    w: 35,
    y: 5,
    xSpeed: 30,
    ySpeed: 30,
    colour: 'blue',
    outColour: 'green',
    strokeSize: '8',
    
    draw: function(){
        fill(this.colour);
        stroke(this.outColour)
        strokeWeight(this.strokeSize)
        ellipse(this.x, this.y, this.w, this.h);

    },
    move: function(){
        this.x += this.xSpeed
        this.y += this.ySpeed
        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    
    }

};



function setup(){
    createCanvas(720,480);
}

function draw(){
    background('black');
    knuckles.draw();
    knuckles.move();
    tails.draw();
    tails.move();
    sonic.draw();
    sonic.move();
}
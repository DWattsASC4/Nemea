function setup(){
    createCanvas(900,800);
    background(0);
    textSize (50);
    rectMode(CENTER);
}

function draw(){
    strokeWeight(5);
    fill(255,255,255);
    
for (var i = 0; i<8; i++){   
    for(var j = 0; j<3; j++){
    rect((i+1)*100,(j+1)*100,46,46);
}

}

}




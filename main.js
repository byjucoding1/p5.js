function take_snapshot(){
    save('WebcamSnapshot.png')
}

function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 150, 100, 350, 300 );
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 40);
    circle(590, 50, 40);
    circle(50, 450, 40);
    circle(590, 450, 40);
    fill(0, 255, 0);
    stroke(0, 255, 0);
    rect(70, 48, 500, 20);
    rect(70,445,500,20);
    rect(50,70,15,360);
    rect(580,70,15,360)
}
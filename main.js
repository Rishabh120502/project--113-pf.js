function preload(){

}

function setup(){
canvas=createCanvas(500,425);
canvas.position(400,165);
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,90,95,320,240);

fill(0,255,0)
circle(50,50,80)

fill(255,33,255)
rect(90,40,320,20)

fill(0,255,0)
circle(450,50,80)

fill(255,33,255)
rect(40,90,20,250)

fill(0,255,0)
circle(50,380,80)

fill(255,33,255)
rect(89,375,325,20)

fill(0,255,0)
circle(450,380,80)

fill(255,33,255)
rect(442,90,20,250)
}

function take_snapshot(){
    save('My_image.png');
}


noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
  MarioAnimation();
  img = loadImage('ping.png');
}

function setup() {
 instializeInSetup(ping);
 canvas.parent('canvas');
 poseNet.on('pose', gotPoses);
 poseNet=ml5.poseNet(video, modelLoaded);
}

function draw(){
  video=createCapture(VIDEO);
  video.size(600, 400);
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);
  }
}

function ModelLoaded() 
{
  console.log("Model is loaded");
}
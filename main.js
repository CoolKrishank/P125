noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    canvas = createCanvas(550,400);
    canvas.position(800,120);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded()
{
    console.log("PoseNet Is Intitalized");
}
function draw()
{
   background('#7B7B7B');
   document.getElementById("textfont").innerHTML = "Size of the word = " + difference + "px";
   textSize(difference);
   fill('#FFE787')
   text('Krishank', leftWristX, rightWristX, difference);
}
function gotPoses(results)
{
    if(results.length   > 0)
    {
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + " noseY = " + noseY);
    }
}

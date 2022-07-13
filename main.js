leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song1="";
song2="";

function preload(){

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5p.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw(){
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX=results[0].pose.keypoints[0].score;
        leftWristX=results[0].pose.keypoints[9].score;
        console.log("rightWristX = " + rightWristY + "leftWristX = " + leftWristY);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX=" + leftWristX + " leftWristY = " + leftWristY );

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX= " + rightWristX + "rightWristY=" + rightWristY);
    }  
}


function modelLoaded(){
    console.log("PoseNet is Initiated")
}




















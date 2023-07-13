leftwristx = 0;
rightwristx = 0;

difference = 0;

songstatus = "";




function setup(){
    video = createCapture(VIDEO);
    video.size(560,560);

    canvas = createCanvas(550,550);
    canvas.position(590,115);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw(){
    background("#ADD8E6");
    textSize(difference);
    document.getElementById("fontsize").innerHTML = "Font size of the text = "+difference+"."
    fill('#e39b0b');
    text('Napoleon', 50, 400);

}

function modelLoaded(){
    console.log("Posenet Is Initialized!")
}

function gotPoses(results,error){
if(error)
{
    console.error(error);
}

    if(results.length > 0)
    {
console.log(results)

leftwristx = results[0].pose.leftWrist.x;
rightwristx = results[0].pose.rightWrist.x;

difference = floor(leftwristx - rightwristx);

    }
}
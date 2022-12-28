rw=0;
lw=0;
diff=0;

function preload(){

}
function setup(){
video=createCapture(VIDEO)
video.size(550,500)

canvas=createCanvas(550,500)
canvas.position(600,100)

posenet=ml5.poseNet(video,modelloaded())
posenet.on("pose",gotposes)


}
function draw(){
    background("black")
    document.getElementById("fontsize").innerHTML="Font size will be "+diff;
    textSize(diff)
    fill("white")
    text("Krishna",50,450)
}

function modelloaded(){
    console.log("posenet is initialized")
}

function gotposes(result){
    if(result.length>0){
        console.log(results)
        rw=result[0].pose.rightWrist.x;
        lw=result[0].pose.leftWrist.x;
        diff=floor(lw-rw);
    }
}
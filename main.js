olhosX = 0;
olhosY = 0;
function preload(){
    juliet = loadImage("bigode.png")
}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}
function modelLoaded(){
    console.log("poseNet inicializado")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        olhosX = results[0].pose.nose.x-205
        olhosY = results[0].pose.nose.y-100
    }
}
function draw(){
    image(video,0,0,300,300)
    image(juliet,olhosX,olhosY,50,25)
}
function take_snapshot() {
    save("selfie.png")
}
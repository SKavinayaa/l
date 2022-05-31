lipX = 0;
lipY = 0;
function preload()
{
    lipstick_lip = loadImage('https://i.postimg.cc/1tX74CXm/download-6.jpg')
}

function  setup()
    {
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose',gotPoses);
    }

 
    function gotPoses(results)
    {
if(results.length>0)
{
console.log('results');
lipX = results[0].pose.lip.x-15;
lipY = results[0].pose.lip.y-15
console.log("lip x =" + lipX);
console.log("lip y =" + lipY);
}
    }


function modelLoaded()
{
console.log('poseNet is intialized');

}

function draw()
{
image(video,0,0,300,300);
image(lipstick_lip,lipX,lipY,30,30);

}

function take_snapshot()
{
 save('myFilter.png');
}
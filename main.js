mustache_x = 0 ;
mustache_y = 0 ;


function preload()
{
    mustache_img = loadImage("https://i.postimg.cc/4xbwDd4k/m.png");
}

function setup()
{
  canvas =  createCanvas(300,300);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  posenet = ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses);
}

function draw()
{
   image(video,0,0,300,300);
   
  image(mustache_img,mustache_x,mustache_y,20,20);
   
}

function take_snapshot()
{
  save('filteredimg.png');
}

function modelLoaded()
{
  console.log('Posenet is Initialised');
}

function gotPoses(results)
{
   if (results.length > 0) 
   {
     console.log(results); 
    
     mustache_x = results[0].pose.nose.x - 10;
     mustache_y = results[0].pose.nose.y + 1.5;
     console.log("nose x = " + mustache_x);
     console.log("nose y = " + mustache_y);
   }
}
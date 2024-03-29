let cells = [];
let minwidth = 50;
let square_size = minwidth;
let palette;

function random_color(){
  thecol = color(random(0,255),random(0,255),random(0,255));
  return thecol;
}

function reportsize(){
	resizeCanvas(windowWidth,windowHeight);
  init();
}

window.addEventListener('resize', reportsize);



function create_2d_array(x_len,y_len){
  arr = new Array(x_len);
  for (let i=0; i<arr.length; i++){
    arr[i] = new Array(y_len);
  }
  return arr;
}


function set_palette(){
  palette = [random_color(), random_color(), random_color(), random_color()]
}


function init(){
  ww = windowWidth;
  wh = windowHeight;

  minwidth = 50;
  large = Math.max(ww,wh);
  if (large/20 < minwidth) {
    square_size = large/20
  }
  else {
    square_size = minwidth
  }
  w_count = Math.round(ww/square_size)
  h_count = Math.round(wh/square_size)

  cells = create_2d_array(w_count, h_count)


  canvas = createCanvas(ww,wh);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  noStroke();


}

function setup(){
  pixelDensity(2);
  init();
  noStroke();
}

function draw(){
  fill("red")
  circle(mouseX, mouseY, 100);
  // background(bg_color)
  // circle(mouseX,mouseY,100);
}

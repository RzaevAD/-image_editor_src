document.getElementById('input__file').onchange = function(e) {
  var img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);
};

function draw() {
  var canvas = document.getElementById('canvas');
  canvas.width = this.width;
  canvas.height = this.height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(this, 0,0);
}

function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}


//put this outside the event loop..
// var canvas = document.getElementById("imgCanvas");
// var context = canvas.getContext("2d");

// let timerId = setTimeout(function tick() {

// }, 1000);


// function draw(evt) {
//     var pos = getMousePos(canvas, evt);

//     context.fillStyle = "#000000";
//     context.fillRect (pos.x, pos.y, 4, 4);
// }

// получение координат курсора по книку на canvas
var context = canvas.getContext("2d");

canvas.addEventListener('click', event =>
{
    let bound = canvas.getBoundingClientRect();

    let x = event.clientX - bound.left - canvas.clientLeft;
    let y = event.clientY - bound.top - canvas.clientTop;

    // context.fillRect(x, y, 16, 16);
    context.fillStyle = "#000000";
    context.fillRect (x, y, 4, 4);

    console.log(x, y);
});


document.querySelector('.draw-rect').onclick  = function(e) {
  document.querySelector('.coords-rect').style.display = "block";
};

document.querySelector('.draw-line').onclick  = function(e) {
  document.querySelector('.coords-line').style.display = "block";
};

document.querySelector('.draw-circle').onclick  = function(e) {
  document.querySelector('.coords-circle').style.display = "block";
};


// отрисовка прямоугольника
document.querySelector('.draw-rect-btn').onclick  = function(e) {

  let rectX = +document.querySelector('#rect-x').value;
  let rectY = +document.querySelector('#rect-y').value;
  let rectH = +document.querySelector('#rect-h').value;
  let rectW = +document.querySelector('#rect-w').value;
  let rectAngle = +document.querySelector('#rect-angle').value;
  let rectColor = document.querySelector('#rect-color').value;
  let rectLineWidth = +document.querySelector('#rect-linew').value;
  
  if (rectLineWidth == 0) rectLineWidth = 1;

  document.querySelector('#rect-x').value = '';
  document.querySelector('#rect-y').value = '';
  document.querySelector('#rect-h').value = '';
  document.querySelector('#rect-w').value = '';
  document.querySelector('#rect-angle').value = '';
  document.querySelector('#rect-color').value = '#000000';
  document.querySelector('#rect-linew').value = '';

  // console.log(rectX, rectY, rectH, rectW, rectAngle, rectColor, rectLineWidth);

  let canvas = document.querySelector('#canvas');
  let ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.lineWidth = rectLineWidth;
  ctx.strokeStyle = rectColor;
  ctx.strokeRect(rectX, rectY, rectW, rectH);

  // if (rectAngle == 0) {
  //   ctx.rect(rectX, rectY, rectW, rectH);
  //   ctx.stroke();
  // } else {
  //   let x2 = rectX + rectH * Math.cos(angle),
  //       y2 = rectY + rectW * Math.sin(angle);

  //   ctx.moveTo(x1, y1);
  //   ctx.lineTo(x2, y2);

  // }

  document.querySelector('.coords-rect').style.display = "none";
};


// отрисовка линии
document.querySelector('.draw-line-btn').onclick  = function(e) {

  let lineX1 = +document.querySelector('#line-x1').value;
  let lineY1 = +document.querySelector('#line-y1').value;
  let lineX2 = +document.querySelector('#line-x2').value;
  let lineY2 = +document.querySelector('#line-y2').value;
  let lineColor = document.querySelector('#line-color').value;
  let lineLineWidth = +document.querySelector('#line-linew').value;
  
  if (lineLineWidth == 0) lineLineWidth = 1;

  document.querySelector('#line-x1').value = '';
  document.querySelector('#line-y1').value = '';
  document.querySelector('#line-x2').value = '';
  document.querySelector('#line-y2').value = '';
  document.querySelector('#line-color').value = '#000000';
  document.querySelector('#line-linew').value = '';

  // console.log(lineX1, lineY1, lineX2, lineY2, lineColor, lineLineWidth);

  let canvas = document.querySelector('#canvas');
  let ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.lineWidth = lineLineWidth;
  ctx.strokeStyle = lineColor;
  ctx.moveTo(lineX1, lineY1);
  ctx.lineTo(lineX2, lineY2);
  ctx.stroke();

  document.querySelector('.coords-line').style.display = "none";
};


// отрисовка круга
document.querySelector('.draw-circle-btn').onclick  = function(e) {

  let circleX = +document.querySelector('#circle-x').value;
  let circleY = +document.querySelector('#circle-y').value;
  let circleR = +document.querySelector('#circle-r').value;
  let circleColor = document.querySelector('#circle-color').value;
  let circleLineWidth = +document.querySelector('#circle-linew').value;
  
  if (circleLineWidth == 0) circleLineWidth = 1;

  document.querySelector('#circle-x').value = '';
  document.querySelector('#circle-y').value = '';
  document.querySelector('#circle-r').value = '';
  document.querySelector('#circle-color').value = '#000000';
  document.querySelector('#circle-linew').value = '';

  // console.log(circleX, circleY, circleR, circleColor, circleLineWidth);

  let canvas = document.querySelector('#canvas');
  let ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.lineWidth = circleLineWidth;
  ctx.strokeStyle = circleColor;
  ctx.arc(circleX, circleY, circleR, 0, 2 * Math.PI);
  ctx.stroke();

  document.querySelector('.coords-circle').style.display = "none";
};

/// код для поворота и отрисовки линии с поворотом ////////////
// var canvas = document.querySelector('canvas'),
//     ctx = canvas.getContext('2d'),
//     x = 100, y =50, length = 40, angle = 30;


// ctx.beginPath();
// lineToAngle(ctx, x, y, length, angle);
// ctx.lineWidth = 1;
// ctx.stroke();


// function lineToAngle(ctx, x1, y1, length, angle) {

//     angle *= Math.PI / 180;
    
//     var x2 = x1 + length * Math.cos(angle),
//         y2 = y1 + length * Math.sin(angle);
    
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);

//     return {x: x2, y: y2};
// }
/////////////////////////////////////////////////////

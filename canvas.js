function addcanvas() {
  var canvas = document.getElementById('canvas');
  canvas.width = 1260
  canvas.height = 450
}
function grid() {
  var grid = canvas.getContext('2d');
  grid.font = "bold 8px sans-serif";
  grid.clearRect(0, 0, canvas.width, canvas.height);
  for (var x = -0.5; x < 1260; x += 22.5) {
    grid.moveTo(x, 0);
    grid.lineTo(x, 450);
    let xn=x/22.5+0.5/22.5-28
    if (xn!=0){
    grid.fillText(xn, x, 223);
    }
  }
  
  for (var y = -0.5; y < 450; y += 22.5) {
    grid.moveTo(0, y);
    grid.lineTo(1260, y);
    let yn=y+0.5
    grid.fillText((10-yn/22.5), 632, (y-2));
  }

  grid.strokeStyle = "#D1D1D1";
  grid.stroke();
  grid.beginPath();
  grid.moveTo(630, 0);
  grid.lineTo(630, 450);
  grid.strokeStyle = "#000";
  grid.stroke();

  grid.beginPath();
  grid.moveTo(0, 225);
  grid.lineTo(1260, 225);
  grid.strokeStyle = "#000";
  grid.stroke();


  grid.fillText("x", 1249, 236);
  grid.fillText("y", 619, 10);
}



function anim(level, params,le) {
  var graph = canvas.getContext('2d');
  if(level<=1){
    if (xx <= arr[level].x[1] * 22.5 + 630) {
      graph.moveTo(x1, y1);
      xx = x1
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frfr * xk * 22.5 + params.scfr * 22.5
      yy = 225 - yy
      
      graph.lineTo(xx, yy);
      x1 = xx
      y1 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[1] * 22.5 + 630 && xx < arr[level].x[2] * 22.5 + 630) {
      graph.moveTo(x2, y2);
      xx = x2
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frsc * xk * 22.5 + params.scsc * 22.5
      yy = 225 - yy
      graph.lineTo(xx, yy);
      x2 = xx
      y2 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[2] * 22.5 + 630 && xx < arr[level].x[3] * 22.5 + 630) {
      graph.moveTo(x3, y3);
      xx = x3
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frthd * xk * 22.5 + params.scthd * 22.5
      yy = 225 - yy
      graph.lineTo(xx, yy);
      x3 = xx
      y3 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[3] * 22.5 + 630 && xx < arr[level].x[4] * 22.5 + 630) {
      graph.moveTo(x4, y4);
      xx = x4
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frfth * xk * 22.5 + params.scfth * 22.5
      yy = 225 - yy
      graph.lineTo(xx, yy);
      x4 = xx
      y4 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[4] * 22.5 + 630){
      ok4(level,le)
    }
  }
  if (level==2){
    if (xx <= arr[level].x[1] * 22.5 + 630) {
      graph.moveTo(x1, y1);
      xx = x1
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frfr * xk * 22.5 + params.scfr * 22.5
      yy = 225 - yy
      
      graph.lineTo(xx, yy);
      x1 = xx
      y1 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[1] * 22.5 + 630 && xx < arr[level].x[2] * 22.5 + 630) {
      graph.moveTo(x2, y2);
      xx = x2
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frsc * xk*xk* 22.5 + params.scsc *xk* 22.5 + params.thdsc*22.5
      yy = 225 - yy
      
      graph.lineTo(xx, yy);
      x2 = xx
      y2 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[2] * 22.5 + 630 && xx < arr[level].x[3] * 22.5 + 630) {
      graph.moveTo(x3, y3);
      xx = x3
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frthd * xk * 22.5 + params.scthd * 22.5
      yy = 225 - yy
      
      graph.lineTo(xx, yy);
      x3 = xx
      y3 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[3] * 22.5 + 630 && xx < arr[level].x[4] * 22.5 + 630) {
      graph.moveTo(x4, y4);
      xx = x4
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frfth * xk*xk* 22.5 + params.scfth *xk* 22.5 + params.thdfth *22.5
      yy = 225 - yy
      graph.lineTo(xx, yy);
      x4 = xx
      y4 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[4] * 22.5 + 630){
      ok4(level,le)
    }
  }
  if (level>2){
    if (xx <= arr[level].x[1] * 22.5 + 630) {
      graph.moveTo(x1, y1);
      xx = x1
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frfr * xk*xk* 22.5 + params.scfr *xk* 22.5 + params.thdfr*22.5
      yy = 225 - yy
      
      graph.lineTo(xx, yy);
      x1 = xx
      y1 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[1] * 22.5 + 630 && xx < arr[level].x[2] * 22.5 + 630) {
      graph.moveTo(x2, y2);
      xx = x2
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frsc * xk*xk* 22.5 + params.scsc *xk* 22.5 + params.thdsc*22.5
      yy = 225 - yy
      
      graph.lineTo(xx, yy);
      x2 = xx
      y2 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[2] * 22.5 + 630 && xx < arr[level].x[3] * 22.5 + 630) {
      graph.moveTo(x3, y3);
      xx = x3
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frthd * xk*xk* 22.5 + params.scthd *xk* 22.5 + params.thdthd*22.5
      yy = 225 - yy
      
      graph.lineTo(xx, yy);
      x3 = xx
      y3 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[3] * 22.5 + 630 && xx < arr[level].x[4] * 22.5 + 630) {
      graph.moveTo(x4, y4);
      xx = x4
      xx = xx + 2.25
      xk = xk + 0.1
      yy = params.frfth * xk*xk* 22.5 + params.scfth *xk* 22.5 + params.thdfth *22.5
      yy = 225 - yy
      graph.lineTo(xx, yy);
      x4 = xx
      y4 = yy
      graph.strokeStyle = "#000";
      graph.stroke();
    }
    if (xx >= arr[level].x[4] * 22.5 + 630){
      if(level==4){
        ok5(level,le)
      }
      if(level==3){
        ok4(level,le)
      }
    }
  }
  if (xx <arr[level].x[4] * 22.5 + 630)
  window.setTimeout(() => anim(level, params,le), 10);
  // if(){
  // animation(le)
  // }

}
function animation(level, params,le) {
  var speed = 10

  
  xk = arr[level].x[0]
  x1 = arr[level].x[0] * 22.5 + 630 //перевод в канвас координаты
  y1 = 225 - arr[level].ogryend[0] * 22.5
  x2 = arr[level].x[1] * 22.5 + 630
  y2 = 225 - arr[level].first(params.frfr, params.scfr, params.thdfr) * 22.5
  x3 = arr[level].x[2] * 22.5 + 630
  y3 = 225 - arr[level].two(params.frsc, params.scsc, params.thdsc) * 22.5
  x4 = arr[level].x[3] * 22.5 + 630
  y4 = 225 - arr[level].three(params.frthd, params.scthd, params.thdthd) * 22.5
  xx = x1
  yy = y1
  window.setTimeout(() => anim(level, params,le), speed)
}

function level_map(le) {
  var pen = canvas.getContext('2d');
  if (le == 0) {
    pen.moveTo(246.75, 202); //start dot
    pen.arc(246.75, 202, 2.5, 0, Math.PI * 2, false); //dot
    pen.fillStyle = "#000";
    pen.fill();

    pen.lineWidth = 1.5;
    pen.fillStyle = "rgb(41%, 41%, 41%, 0.5)"; //columns fill
    pen.fillRect(382.5, -1, 45, 316);
    pen.fillRect(382.5, 360, 45, 110);
    pen.fillRect(540, -1, 45, 46);
    pen.fillRect(540, 90, 45, 361);
    pen.fillRect(810, -1, 45, 158.5);
    pen.fillRect(810, 202.5, 45, 400);
    pen.strokeRect(382.5, -1, 45, 316); //columns stroke
    pen.strokeRect(382.5, 360, 45, 110);
    pen.strokeRect(540, -1, 45, 46);
    pen.strokeRect(540, 90, 45, 361);
    pen.strokeRect(810, -1, 45, 158.5);
    pen.strokeRect(810, 202.5, 45, 400);

    gradient = pen.createLinearGradient(1035, 157.5, 1080, 202.5); //end box gradient fill
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "red");
    pen.fillStyle = gradient;
    pen.fillRect(1035, 157.5, 45, 45);
    pen.strokeRect(1035, 157.5, 45, 45); //end box stroke
  }
  if (le == 1) {
    pen.moveTo(359.5, 179.5); //start dot
    pen.arc(359.5, 179.5, 2.5, 0, Math.PI * 2, false); //dot
    pen.fillStyle = "#000";
    pen.fill();

    pen.lineWidth = 1.5;
    pen.fillStyle = "rgb(41%, 41%, 41%, 0.5)"; //columns fill
    pen.fillRect(427.5, -1, 45, 158.5);
    pen.fillRect(427.5, 180, 45, 271);
    pen.fillRect(607.5, -1, 45, 316);
    pen.fillRect(607.5, 337.5, 45, 360);
    pen.fillRect(765, -1, 45, 181);
    pen.fillRect(765, 202.5, 45, 112.5);
    pen.fillRect(765, 337.5, 45, 200);
    pen.strokeRect(427.5, -1, 45, 158.5);
    pen.strokeRect(427.5, 180, 45, 271);
    pen.strokeRect(607.5, -1, 45, 316);
    pen.strokeRect(607.5, 337.5, 45, 360);
    pen.strokeRect(765, -1, 45, 181);
    pen.strokeRect(765, 202.5, 45, 112.5);
    pen.strokeRect(765, 337.5, 45, 200);

    gradient = pen.createLinearGradient(922.5, 382.5, 967.5, 427.5); //end box gradient fill
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "green");
    pen.fillStyle = gradient;
    pen.fillRect(922.5, 382.5, 45, 45);
    pen.strokeRect(922.5, 382.5, 45, 45); //end box stroke
  }
  if (le == 2) {
    pen.moveTo(337, 157); //start dot
    pen.arc(337, 157, 2.5, 0, Math.PI * 2, false); //dot
    pen.fillStyle = "#000";
    pen.fill();

    pen.lineWidth = 1.5;
    pen.fillStyle = "rgb(41%, 41%, 41%, 0.5)"; //columns fill
    pen.fillRect(495, -1, 22.5, 181);
    pen.fillRect(495, 202.5, 22.5, 300);
    pen.fillRect(562.5, -1, 45, 271);
    pen.fillRect(562.5, 292.5, 45, 300);
    pen.fillRect(810, -1, 45, 158.5);
    pen.fillRect(810, 180, 45, 300);
    pen.strokeRect(495, -1, 22.5, 181);
    pen.strokeRect(495, 202.5, 22.5, 300);
    pen.strokeRect(562.5, -1, 45, 271);
    pen.strokeRect(562.5, 292.5, 45, 300);
    pen.strokeRect(810, -1, 45, 158.5);
    pen.strokeRect(810, 180, 45, 300);

    gradient = pen.createLinearGradient(877.5, 247.5, 922.5, 292.5); //end box gradient fill
    gradient.addColorStop(0, "green");
    gradient.addColorStop(1, "purple");
    pen.fillStyle = gradient;
    pen.fillRect(877.5, 247.5, 45, 45);
    pen.strokeRect(877.5, 247.5, 45, 45); //end box stroke
  }
  if (le == 3) {
    pen.moveTo(584.5, 247); //start dot
    pen.arc(584.5, 247, 2.5, 0, Math.PI * 2, false); //dot
    pen.fillStyle = "#000";
    pen.fill();

    pen.lineWidth = 1.5; //top 
    pen.moveTo(585, -1);
    pen.lineTo(585, 225);
    pen.lineTo(607.5, 247.5);
    pen.lineTo(630, 315);
    pen.lineTo(675, 90);
    pen.lineTo(720, 90);
    pen.lineTo(742.5, 135);
    pen.lineTo(798.75, 292.5);
    pen.lineTo(922.5, 67.5);
    pen.lineTo(922.5, -1);

    pen.moveTo(585, 451); //bottom
    pen.lineTo(585, 270);
    pen.lineTo(630, 360);
    pen.lineTo(675, 315);
    pen.lineTo(720, 180);
    pen.lineTo(787.5, 337.5);
    pen.lineTo(900, 270);
    pen.lineTo(967.5, 112.5);
    pen.lineTo(967.5, 451);
    pen.strokeStyle = "#000";
    pen.stroke();
    pen.fillStyle = "rgb(41%, 41%, 41%, 0.5)"; //columns fill 
    pen.fill();

    gradient = pen.createLinearGradient(922.5, 67.5, 967.5, 112.5); //end box gradient fill
    gradient.addColorStop(0, "purple");
    gradient.addColorStop(1, "yellow");
    pen.fillStyle = gradient;
    pen.fillRect(922.5, 67.5, 45, 45);
    pen.strokeRect(922.5, 67.5, 45, 45); //end box stroke
  }
  if (le == 4) {
    pen.moveTo(359.5, 202); //start dot
    pen.arc(359.5, 202, 2.5, 0, Math.PI * 2, false); //dot
    pen.fillStyle = "#000";
    pen.fill();

    pen.lineWidth = 1.5; //top
    pen.moveTo(382.5, -1);
    pen.lineTo(382.5, 180);
    pen.arc(472.5, 180, 90, Math.PI, 3 * Math.PI / 2, false);
    pen.bezierCurveTo(517.5, 135, 540, 225, 540, 292.5);
    pen.bezierCurveTo(652.5, 270, 765, 115.5, 787.5, 90);
    pen.bezierCurveTo(877.5, 112.5, 945, 202.5, 990, 337.5);
    pen.lineTo(990, -1);

    pen.moveTo(382.5, 451);
    pen.lineTo(382.5, 225);
    pen.arc(382.5, 157.5, 67.5, Math.PI / 2, 2 * Math.PI, true);
    pen.bezierCurveTo(455, 225, 495, 315, 517.5, 337.5);
    pen.bezierCurveTo(607.5, 337.5, 765, 225, 787.5, 135);
    pen.bezierCurveTo(810, 225, 900, 382.5, 990, 405);
    pen.lineTo(990, 451);
    pen.strokeStyle = "#000";
    pen.stroke();
    pen.fillStyle = "rgb(41%, 41%, 41%, 0.5)"; //columns fill 
    pen.fill();



    gradient = pen.createLinearGradient(922.5, 315, 967.5, 360); //end box gradient fill
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.25, "red");
    gradient.addColorStop(0.5, "green");
    gradient.addColorStop(0.75, "purple");
    gradient.addColorStop(1, "yellow");
    pen.fillStyle = gradient;
    pen.fillRect(922.5, 315, 45, 45);
    pen.strokeRect(922.5, 315, 45, 45); //end box stroke
  }

}







function onload() {
    document.getElementById("start").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("canvas").style.display = "none";

    reset();
    for (var i = 0; i < arr.length; i++) {
        document.getElementById("level" + (i + 1)).style.display = "none";
    }
}

function reset() {
    document.querySelectorAll("input").forEach(function (e) {
        e.value = null;
    });


}

function start() {
    document.getElementById("start").style.display = "block"
    if (document.getElementById("start").style.display == 'block') {
        document.getElementById("start").style.display = "none";
        document.getElementById("level1").style.display = "block";
        document.getElementById("canvas").style.display = "block";
    }
    else {
        document.getElementById("start").style.display = "block";
    }
    addcanvas();
    grid();
    var le = 0
    level_map(le);
}
function end() {
    if (document.getElementById("end").style.display == 'block') {
        document.getElementById("end").style.display = "none";
        document.getElementById("level1").style.display = "block";
        document.getElementById("canvas").style.display = "block";
    }
    else {
        document.getElementById("end").style.display = "block";
    }
    addcanvas();
    grid();
    var le = 0
    level_map(le);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ok4(level,le){
    alert("Верно!");
    document.getElementById("level" + (level + 1)).style.display = "none";
    document.getElementById("level" + (level + 2)).style.display = "block";
    addcanvas();
    grid();
    le=le+1;
    level_map(le);
}
function ok5(level,le){
    alert("Верно!");
    document.getElementById("level5").style.display = "none";
    document.getElementById("canvas").style.display = "none";
    document.getElementById("end").style.display = "block";
    reset();
}
function lvlcheck(level) {
    var le = level
    r = 0
    let obj = {};
    obj.frfr = document.getElementById((level + 1) + "lev-1eq-1k");
    obj.scfr = document.getElementById((level + 1) + "lev-1eq-2k");
    obj.frsc = document.getElementById((level + 1) + "lev-2eq-1k");
    obj.scsc = document.getElementById((level + 1) + "lev-2eq-2k");
    obj.frthd = document.getElementById((level + 1) + "lev-3eq-1k");
    obj.scthd = document.getElementById((level + 1) + "lev-3eq-2k");
    obj.frfth = document.getElementById((level + 1) + "lev-4eq-1k");
    obj.scfth = document.getElementById((level + 1) + "lev-4eq-2k");
    obj.thdsc = document.getElementById((level + 1) + "lev-2eq-3k");
    obj.thdfth = document.getElementById((level + 1) + "lev-4eq-3k");
    obj.thdfr = document.getElementById((level + 1) + "lev-1eq-3k");
    obj.thdthd = document.getElementById((level + 1) + "lev-3eq-3k");

    document.querySelectorAll("input").forEach(function (e) {
        e.className = "input";
    });

    const pp = Object.entries(obj);
    let iswrong = false;
    for (i = 0; i < pp.length; i++) {
        if (pp[i][1] != undefined && pp[i][1].value == "") {
            pp[i][1].className = "input-wrong";
            iswrong = true;
        }
    }

    if (iswrong) {
        alert("Введите все коэффициенты");
        return;
    }
    //alert(frfr)

    frfr = Number(obj.frfr.value);
    scfr = Number(obj.scfr.value);
    frsc = Number(obj.frsc.value);
    scsc = Number(obj.scsc.value);
    frthd = Number(obj.frthd.value);
    scthd = Number(obj.scthd.value);
    frfth = Number(obj.frfth.value);
    scfth = Number(obj.scfth.value);
    if (level>1){
        if (level>2){
            thdfr = Number(obj.thdfr.value);
            thdthd = Number(obj.thdthd.value);
        }
    thdsc = Number(obj.thdsc.value);
    thdfth = Number(obj.thdfth.value);
    }
    if (level<=1){
        thdfr=0
        thdsc=0
        thdthd=0
        thdfth=0
    }
    //alert(frfr)
    //alert(scfr)
    //alert(thdfr)
    y = arr[level].first(frfr, scfr, thdfr);
    //alert(y)
    if (y <= arr[level].ogryend[1] && y >= arr[level].ogryend[2]) {
        r = r + 1
    }
    //alert(r)
    y = arr[level].two(frsc, scsc, thdsc);

    if (y <= arr[level].ogryend[3] && y >= arr[level].ogryend[4]) {
        r = r + 1

    }
    //alert(r)
    y = arr[level].three(frthd, scthd, thdthd);
    //alert(y)
    if (y <= arr[level].ogryend[5] && y >= arr[level].ogryend[6]) {
        r = r + 1
    }
    //alert(r)
    y = arr[level].four(frfth, scfth, thdfth);
    if (y <= arr[level].ogryend[7] && y >= arr[level].ogryend[8]) {
        r = r + 1
    }
    //alert(r)
    
    /////////////////////////////////////////////////
    y = arr[level].prefirst(frfr, scfr, thdfr);
    if (y == arr[level].ogryend[0]) {
        r = r + 1
    }


    y = arr[level].pretwo(frsc, scsc, thdsc);
    if (y <= arr[level].ogryend[1] && y >= arr[level].ogryend[2]) {
        r = r + 1
    }


    y = arr[level].prethree(frthd, scthd, thdthd);
    //alert(y)
    if (y <= arr[level].ogryend[3] && y >= arr[level].ogryend[4]) {
        r = r + 1
    }

    
    y = arr[level].prefour(frfth, scfth, thdfth)
    if (y <= arr[level].ogryend[5] && y >= arr[level].ogryend[6]) {
        r = r + 1
    }
    const params = {
        frfr,
        scfr,
        frsc,
        scsc,
        frthd,
        scthd,
        frfth,
        scfth,
        thdfr,
        thdsc,
        thdthd,
        thdfth
    };
    if (level == 4) { //end
        if (r == 8) {
            animation(level, params,le)
            
        }
        if (r != 8) {
            alert("Неверно!")
            //document.getElementById("level" + (level + 1)).style.display = "none";
            //document.getElementById("level" + (level + 2)).style.display = "block";
        }
    }
    if (level != 4) { //next level
        
        if (r != 8) {
            alert("Неверно!")
        }
        
        if (r == 8) {
            animation(level, params,le)
            
        }
        
    }

}



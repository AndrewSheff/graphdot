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
    var le=0
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
    var le=0
    level_map(le);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function lvlcheck(level) {
    var le=level
    r = 0

   
    let frfr = document.getElementById((level + 1) + "lev-1eq-1k");
    let scfr = document.getElementById((level + 1) + "lev-1eq-2k");
    let frsc = document.getElementById((level + 1) + "lev-2eq-1k");
    let scsc = document.getElementById((level + 1) + "lev-2eq-2k");
    let frthd = document.getElementById((level + 1) + "lev-3eq-1k");
    let scthd = document.getElementById((level + 1) + "lev-3eq-2k");
    let frfth = document.getElementById((level + 1) + "lev-4eq-1k");
    let scfth = document.getElementById((level + 1) + "lev-4eq-2k");
    let thdsc = document.getElementById((level + 1) + "lev-2eq-3k");
        
    let thdfth = document.getElementById((level + 1) + "lev-4eq-3k") || {value:""};
    let thdfr = document.getElementById((level + 1) + "lev-1eq-3k") || {value:""};
    let thdthd = document.getElementById((level + 1) + "lev-3eq-3k") || {value:""};
    
    document.querySelectorAll("input").forEach(function (e) {
        e.className = "input";
    });

    if (frfr.value == ""){
        frfr.className = "input-wrong";
    }
    if (scfr.value == ""){
        scfr.className = "input-wrong";
    }
    if (frsc.value==""){
        frsc.className = "input-wrong";
    }
    if (scsc.value==""){
        scsc.className = "input-wrong";
    }
    if (frthd.value==""){
        frthd.className = "input-wrong";
    }
    if (scthd.value==""){
        scthd.className = "input-wrong";
    }
    if (frfth.value==""){
        frfth.className = "input-wrong";
    }
    if (scfth.value==""){
        scfth.className = "input-wrong";
    }
    if (thdfr.value==""){
        thdfr.className = "input-wrong";
    }
    if (thdsc.value==""){
        thdsc.className = "input-wrong";
    }
    if (thdthd.value==""){
        thdthd.className = "input-wrong";
    }
    if (thdfth.value==""){
        thdfth.className = "input-wrong";
    }    
    //alert(frfr)
    frfr = Number(frfr.value);
    scfr = Number(scfr.value);
    frsc = Number(frsc.value);
    scsc = Number(scsc.value);
    frthd = Number(frthd.value);
    scthd = Number(scthd.value);
    frfth = Number(frfth.value);
    scfth = Number(scfr.value);
    thdfr = Number(frsc.value);
    thdsc = Number(scsc.value);
    thdthd = Number(frthd.value);
    thdfth = Number(scthd.value);
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
    //alert(y)
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
    
    if (level == 4) { //end
        if (r == 8) {
            alert("Верно!");
            document.getElementById("level5").style.display = "none";
            document.getElementById("canvas").style.display = "none";
            document.getElementById("end").style.display = "block";
            reset();
        }
        if (r != 8) {
            alert("Неверно!")
            //document.getElementById("level" + (level + 1)).style.display = "none";
            //document.getElementById("level" + (level + 2)).style.display = "block";
        }
    }
    if (level != 4) { //next level
        animation(level)
        // if (r == 8) {
        //     alert("Верно!");
        //     document.getElementById("level" + (level + 1)).style.display = "none";
        //     document.getElementById("level" + (level + 2)).style.display = "block";
        //     addcanvas();
        //     grid();
        //     le=le+1;
        //     level_map(le);
        // }
        // if (r != 8) {
        //     alert("Неверно!")
        //      document.getElementById("level" + (level + 1)).style.display = "none";
        //      document.getElementById("level" + (level + 2)).style.display = "block";
        //      addcanvas();
        //      grid();
        //      le=le+1;
        //      level_map(le);
        // }
    }

}



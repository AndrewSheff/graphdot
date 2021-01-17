function onload() {
    document.getElementById("start").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("canvas").style.display = "none";

    reset();
    for (var i = 0; i < arr.length; i++) {
        document.getElementById("level" + (i + 1)).style.display = "none";
    }
    document.getElementById("1lev-1eq-3k").value=0;
    document.getElementById("1lev-2eq-3k").value=0;
    document.getElementById("1lev-3eq-3k").value=0;
    document.getElementById("1lev-4eq-3k").value=0;
    document.getElementById("2lev-1eq-3k").value=0;
    document.getElementById("2lev-2eq-3k").value=0;
    document.getElementById("2lev-3eq-3k").value=0;
    document.getElementById("2lev-4eq-3k").value=0;
    document.getElementById("3lev-1eq-3k").value=0;
    document.getElementById("3lev-3eq-3k").value=0;
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
    draw();
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
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function lvlcheck(level) {

    r = 0

    let frfr = document.getElementById((level + 1) + "lev-1eq-1k").value;
    let scfr = document.getElementById((level + 1) + "lev-1eq-2k").value;
    let frsc = document.getElementById((level + 1) + "lev-2eq-1k").value;
    let scsc = document.getElementById((level + 1) + "lev-2eq-2k").value;
    let frthd = document.getElementById((level + 1) + "lev-3eq-1k").value;
    let scthd = document.getElementById((level + 1) + "lev-3eq-2k").value;
    let frfth = document.getElementById((level + 1) + "lev-4eq-1k").value;
    let scfth = document.getElementById((level + 1) + "lev-4eq-2k").value;
    let thdsc = document.getElementById((level + 1) + "lev-2eq-3k").value;
    let thdfth = document.getElementById((level + 1) + "lev-4eq-3k").value;
    let thdfr = document.getElementById((level + 1) + "lev-1eq-3k").value;
    let thdthd = document.getElementById((level + 1) + "lev-3eq-3k").value;
    document.querySelectorAll("input").forEach(function (e) {
        e.className = "input";
        document.getElementById("1lev-2eq-3k").className="unviz";
        document.getElementById("1lev-4eq-3k").className="unviz";
        document.getElementById("1lev-1eq-3k").className="unviz";
        document.getElementById("1lev-3eq-3k").className="unviz";
        document.getElementById("2lev-2eq-3k").className="unviz";
        document.getElementById("2lev-4eq-3k").className="unviz";
        document.getElementById("2lev-1eq-3k").className="unviz";
        document.getElementById("2lev-3eq-3k").className="unviz";
        document.getElementById("3lev-1eq-3k").className="unviz";
        document.getElementById("3lev-3eq-3k").className="unviz";
    });
    if (frfr== ""){
        document.getElementById((level + 1) + "lev-1eq-1k").className = "input-wrong";
    }
    if (scfr== ""){
        document.getElementById((level + 1) + "lev-1eq-2k").className = "input-wrong";
    }
    if (frsc==""){
        document.getElementById((level + 1) + "lev-2eq-1k").className = "input-wrong";
    }
    if (scsc==""){
        document.getElementById((level + 1) + "lev-2eq-2k").className = "input-wrong";
    }
    if (frthd==""){
        document.getElementById((level + 1) + "lev-3eq-1k").className = "input-wrong";
    }
    if (scthd==""){
        document.getElementById((level + 1) + "lev-3eq-2k").className = "input-wrong";
    }
    if (frfth==""){
        document.getElementById((level + 1) + "lev-4eq-1k").className = "input-wrong";
    }
    if (scfth==""){
        document.getElementById((level + 1) + "lev-4eq-2k").className = "input-wrong";
    }
    if (thdfr==""){
        document.getElementById((level + 1) + "lev-1eq-3k").className = "input-wrong";
    }
    if (thdsc==""){
        document.getElementById((level + 1) + "lev-2eq-3k").className = "input-wrong";
    }
    if (thdthd==""){
        document.getElementById((level + 1) + "lev-3eq-3k").className = "input-wrong";
    }
    if (thdfth==""){
        document.getElementById((level + 1) + "lev-4eq-3k").className = "input-wrong";
    }    
    //alert(frfr)
    frfr = Number(frfr);
    scfr = Number(scfr);
    frsc = Number(frsc);
    scsc = Number(scsc);
    frthd = Number(frthd);
    scthd = Number(scthd);
    frfth = Number(frfth);
    scfth = Number(scfr);
    thdfr = Number(frsc);
    thdsc = Number(scsc);
    thdthd = Number(frthd);
    thdfth = Number(scthd);
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
    //alert(r)
    if (level == 4) {
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
    if (level != 4) {
        if (r == 8) {
            alert("Верно!");
            document.getElementById("level" + (level + 1)).style.display = "none";
            document.getElementById("level" + (level + 2)).style.display = "block";
        }
        if (r != 8) {
            alert("Неверно!")
            //document.getElementById("level" + (level + 1)).style.display = "none";
            //document.getElementById("level" + (level + 2)).style.display = "block";
        }
    }

}



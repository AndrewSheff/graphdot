function jjj() {
    document.getElementById("start").style.display = "block";
    document.getElementById("end").style.display = "none";
    document.getElementById("level1").style.display = "none";
    document.getElementById("level2").style.display = "none";
    document.getElementById("level3").style.display = "none";
    document.getElementById("level4").style.display = "none";
    document.getElementById("level5").style.display = "none";
}
function nuller() {    
    document.getElementById("1lev-1eq-1k").value = null;
    document.getElementById("1lev-1eq-2k").value = null;
    document.getElementById("1lev-2eq-1k").value = null;
    document.getElementById("1lev-2eq-2k").value = null;
    document.getElementById("1lev-3eq-1k").value = null;
    document.getElementById("1lev-3eq-2k").value = null;
    document.getElementById("1lev-4eq-1k").value = null;
    document.getElementById("1lev-4eq-2k").value = null;
    document.getElementById("2lev-1eq-1k").value = null;
    document.getElementById("2lev-1eq-2k").value = null;
    document.getElementById("2lev-2eq-1k").value = null;
    document.getElementById("2lev-2eq-2k").value = null;
    document.getElementById("2lev-3eq-1k").value = null;
    document.getElementById("2lev-3eq-2k").value = null;
    document.getElementById("2lev-4eq-1k").value = null;
    document.getElementById("2lev-4eq-2k").value = null;
    document.getElementById("3lev-1eq-1k").value = null;
    document.getElementById("3lev-1eq-2k").value = null;
    document.getElementById("3lev-2eq-1k").value = null;
    document.getElementById("3lev-2eq-2k").value = null;
    document.getElementById("3lev-2eq-3k").value = null;
    document.getElementById("3lev-3eq-1k").value = null;
    document.getElementById("3lev-3eq-2k").value = null;
    document.getElementById("3lev-4eq-1k").value = null;
    document.getElementById("3lev-4eq-2k").value = null;
    document.getElementById("3lev-4eq-3k").value = null;
    document.getElementById("4lev-1eq-1k").value = null;
    document.getElementById("4lev-1eq-2k").value = null;
    document.getElementById("4lev-1eq-3k").value = null;
    document.getElementById("4lev-2eq-1k").value = null;
    document.getElementById("4lev-2eq-2k").value = null;
    document.getElementById("4lev-2eq-3k").value = null;
    document.getElementById("4lev-3eq-1k").value = null;
    document.getElementById("4lev-3eq-2k").value = null;
    document.getElementById("4lev-3eq-3k").value = null;
    document.getElementById("4lev-4eq-1k").value = null;
    document.getElementById("4lev-4eq-2k").value = null;
    document.getElementById("4lev-4eq-3k").value = null;
    document.getElementById("5lev-1eq-1k").value = null;
    document.getElementById("5lev-1eq-2k").value = null;
    document.getElementById("5lev-1eq-3k").value = null;
    document.getElementById("5lev-2eq-1k").value = null;
    document.getElementById("5lev-2eq-2k").value = null;
    document.getElementById("5lev-2eq-3k").value = null;
    document.getElementById("5lev-3eq-1k").value = null;
    document.getElementById("5lev-3eq-2k").value = null;
    document.getElementById("5lev-3eq-3k").value = null;
    document.getElementById("5lev-4eq-1k").value = null;
    document.getElementById("5lev-4eq-2k").value = null;
    document.getElementById("5lev-4eq-3k").value = null;
}
    frfr = 0
    scfr = 0
    thdfr = 0
    frsc = 0
    scsc = 0
    thdsc = 0
    frthd = 0
    scthd = 0
    thdthd = 0
    frfth = 0
    scfth = 0
    thdfth = 0
function skip() {
    document.getElementById("level" + (level + 1)).style.display = "none";
    document.getElementById("level" + (level + 2)).style.display = "block";
}
function start() {
    document.getElementById("start").style.display = "block"
    if (document.getElementById("start").style.display == 'block') {
        document.getElementById("start").style.display = "none";
        document.getElementById("level1").style.display = "block";
    }
    else {
        document.getElementById("start").style.display = "block";
    }
}
function end() {
    if (document.getElementById("end").style.display == 'block') {
        document.getElementById("end").style.display = "none";
        document.getElementById("level1").style.display = "block";
    }
    else {
        document.getElementById("end").style.display = "block";
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
const arr = [
    {
        x: [-17, -10, -3, 9, 18], ogryend: [1, -4, -6, 8, 6, 3, 1, 3, 1],
        prefirst(frfr, scfr) {
            return frfr * this.x[0] + scfr;
        },
        pretwo(frsc, scsc) {
            return frsc * this.x[1] + scsc;
        },
        prethree(frthd, scthd) {
            return frthd * this.x[2] + scthd;
        },
        prefour(frfth, scfth) {
            return frfth * this.x[3] + scfth;
        },
        first(frfr, scfr) {
            return frfr * this.x[1] + scfr;
        },
        two(frsc, scsc) {
            return frsc * this.x[2] + scsc;
        },
        three(frthd, scthd) {
            return frthd * this.x[3] + scthd;
        },
        four(frfth, scfth) {
            return frfth * this.x[4] + scfth;
        },
    },
    { 
        x: [-12, -8, 0, 7, 15], ogryend: [2, 3, 2, -4, -5, -4, -4.67, -7, -9.67],
        prefirst(frfr, scfr) {
            return frfr * this.x[0] + scfr;
        },
        pretwo(frsc, scsc) {
            return frsc * this.x[1] + scsc;
        },
        prethree(frthd, scthd) {
            return frthd * this.x[2] + scthd;
        },
        prefour(frfth, scfth) {
            return frfth * this.x[3] + scfth;
        },
        first(frfr, scfr) {
            return frfr * this.x[1] + scfr;
        },
        two(frsc, scsc) {
            return frsc * this.x[2] + scsc;
        },
        three(frthd, scthd) {
            return frthd * this.x[3] + scthd;
        },
        four(frfth, scfth) {
            return frfth * this.x[4] + scfth;
        },
    },
    {   x: [-13, -5, -3, 9, 13], ogryend: [3, 2, 1, -2, -3, 3, 2, -1,-13], 
        prefirst(frfr, scfr) {
            return frfr * this.x[0] + scfr;
        },
        pretwo(frsc, scsc, thdsc) {
            return frsc * this.x[1] * this.x[1]  + scsc * this.x[1]+ thdsc;
        },
        prethree(frthd, scthd) {
            return frthd * this.x[2] + scthd;
        },
        prefour(frfth, scfth, thdfth) {
            return frfth * this.x[3] * this.x[3] + scfth * this.x[3]+ thdfth;
        },
        first(frfr, scfr) {
            return frfr * this.x[1] + scfr;
        },
        two(frsc, scsc, thdsc) {
            return frsc * this.x[2] * this.x[2] + scsc * this.x[2]+ thdsc;
        },
        three(frthd, scthd) {
            return frthd * this.x[3] + scthd;
        },
        four(frfth, scfth, thdfth) {
            return frfth * this.x[4] * this.x[4] + scfth * this.x[4]+ thdfth;
        },
    },

    { x: [-2, 0, 3, 7, 15], ogryend: [-1, -4, -6, 6, 3, -3, -5, 12, 5], 
        prefirst(frfr, scfr, thdfr) {
            return frfr * this.x[0] * this.x[0] + scfr * this.x[0] + thdfr;
        },
        pretwo(frsc, scsc, thdsc) {
            return frsc * this.x[1] * this.x[1]  + scsc * this.x[1]+ thdsc;
        },
        prethree(frthd, scthd, thdthd) {
            return frthd * this.x[2] * this.x[2] + scthd * this.x[2] + thdthd;
        },
        prefour(frfth, scfth, thdfth) {
            return frfth * this.x[3] * this.x[3] + scfth * this.x[3]+ thdfth;
        },
        first(frfr, scfr, thdfr) {
            return frfr * this.x[1] * this.x[1] + scfr * this.x[1] + thdfr;
        },
        two(frsc, scsc, thdsc) {
            return frsc * this.x[2] * this.x[2] + scsc * this.x[2]+ thdsc;
        },
        three(frthd, scthd, thdthd) {
            return frthd * this.x[3] * this.x[3] + scthd * this.x[3]+ thdthd;
        },
        four(frfth, scfth, thdfth) {
            return frfth * this.x[4] * this.x[4] + scfth * this.x[4]+ thdfth;
        },
    },
    { x: [-12, -8, -5, 7, 15], ogryend: [1, 5.88, 3, -3, -5, 6, 4, -4, -11], 
        prefirst(frfr, scfr, thdfr) {
            return frfr * this.x[0] * this.x[0] + scfr * this.x[0] + thdfr;
        },
        pretwo(frsc, scsc, thdsc) {
            return frsc * this.x[1] * this.x[1]  + scsc * this.x[1]+ thdsc;
        },
        prethree(frthd, scthd, thdthd) {
            return frthd * this.x[2] * this.x[2] + scthd * this.x[2] + thdthd;
        },
        prefour(frfth, scfth, thdfth) {
            return frfth * this.x[3] * this.x[3] + scfth * this.x[3]+ thdfth;
        },
        first(frfr, scfr, thdfr) {
            return frfr * this.x[1] * this.x[1] + scfr * this.x[1] + thdfr;
        },
        two(frsc, scsc, thdsc) {
            return frsc * this.x[2] * this.x[2] + scsc * this.x[2]+ thdsc;
        },
        three(frthd, scthd, thdthd) {
            return frthd * this.x[3] * this.x[3] + scthd * this.x[3]+ thdthd;
        },
        four(frfth, scfth, thdfth) {
            return frfth * this.x[4] * this.x[4] + scfth * this.x[4]+ thdfth;
        },
    },
]
function lvlcheck(level) {
    r = 0
    
    let frfr = Number(document.getElementById((level + 1) + "lev-1eq-1k").value);
    let scfr = Number(document.getElementById((level + 1) + "lev-1eq-2k").value);
    let frsc = Number(document.getElementById((level + 1) + "lev-2eq-1k").value);
    let scsc = Number(document.getElementById((level + 1) + "lev-2eq-2k").value);
    let frthd = Number(document.getElementById((level + 1) + "lev-3eq-1k").value);
    let scthd = Number(document.getElementById((level + 1) + "lev-3eq-2k").value);
    let frfth = Number(document.getElementById((level + 1) + "lev-4eq-1k").value);
    let scfth = Number(document.getElementById((level + 1) + "lev-4eq-2k").value);
    let thdsc = Number(document.getElementById((level + 1) + "lev-2eq-3k").value);
    let thdfth = Number(document.getElementById((level + 1) + "lev-4eq-3k").value);
    let thdfr = Number(document.getElementById((level + 1) + "lev-1eq-3k").value);
    let thdthd = Number(document.getElementById((level + 1) + "lev-3eq-3k").value);
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
    if (level==4) {
        if (r == 8) {
            alert("Верно!");
            document.getElementById("level5").style.display = "none";
            document.getElementById("end").style.display = "block";
        }
        if (r != 8) {
            alert("Неверно!")
        }
    }
    if (level!=4){
        if (r == 8) {
            alert("Верно!");
            document.getElementById("level" + (level + 1)).style.display = "none";
            document.getElementById("level" + (level + 2)).style.display = "block";
        }
        if (r != 8) {
            alert("Неверно!")
        }
    }
    
}



var arr = [
    {
        x: [-17, -10, -3, 9, 18], ogryend: [1, -6, -6, 8, 8, 2, 1, 3, 1],
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
        x: [-12, -8, 0, 7, 15], ogryend: [2, 3, 3, -5, -5, -4, -4.67, -7, -9.67],
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
        x: [-13, -5, -3, 9, 13], ogryend: [3, 1, 1, -3, -3, 3, 3, -1, -13],
        prefirst(frfr, scfr) {
            return frfr * this.x[0] + scfr;
        },
        pretwo(frsc, scsc, thdsc) {
            return frsc * this.x[1] * this.x[1] + scsc * this.x[1] + thdsc;
        },
        prethree(frthd, scthd) {
            return frthd * this.x[2] + scthd;
        },
        prefour(frfth, scfth, thdfth) {
            return frfth * this.x[3] * this.x[3] + scfth * this.x[3] + thdfth;
        },
        first(frfr, scfr) {
            return frfr * this.x[1] + scfr;
        },
        two(frsc, scsc, thdsc) {
            return frsc * this.x[2] * this.x[2] + scsc * this.x[2] + thdsc;
        },
        three(frthd, scthd) {
            return frthd * this.x[3] + scthd;
        },
        four(frfth, scfth, thdfth) {
            return frfth * this.x[4] * this.x[4] + scfth * this.x[4] + thdfth;
        },
    },

    {
        x: [-2, 0, 3, 7, 15], ogryend: [-1, -4, -6, 6, 3, -3, -5, 12, 5],
        prefirst(frfr, scfr, thdfr) {
            return frfr * this.x[0] * this.x[0] + scfr * this.x[0] + thdfr;
        },
        pretwo(frsc, scsc, thdsc) {
            return frsc * this.x[1] * this.x[1] + scsc * this.x[1] + thdsc;
        },
        prethree(frthd, scthd, thdthd) {
            return frthd * this.x[2] * this.x[2] + scthd * this.x[2] + thdthd;
        },
        prefour(frfth, scfth, thdfth) {
            return frfth * this.x[3] * this.x[3] + scfth * this.x[3] + thdfth;
        },
        first(frfr, scfr, thdfr) {
            return frfr * this.x[1] * this.x[1] + scfr * this.x[1] + thdfr;
        },
        two(frsc, scsc, thdsc) {
            return frsc * this.x[2] * this.x[2] + scsc * this.x[2] + thdsc;
        },
        three(frthd, scthd, thdthd) {
            return frthd * this.x[3] * this.x[3] + scthd * this.x[3] + thdthd;
        },
        four(frfth, scfth, thdfth) {
            return frfth * this.x[4] * this.x[4] + scfth * this.x[4] + thdfth;
        },
    },
    {
        x: [-12, -8, -5, 7, 15], ogryend: [1, 5.88, 3, -3, -5, 6, 4, -4, -11],
        prefirst(frfr, scfr, thdfr) {
            return frfr * this.x[0] * this.x[0] + scfr * this.x[0] + thdfr;
        },
        pretwo(frsc, scsc, thdsc) {
            return frsc * this.x[1] * this.x[1] + scsc * this.x[1] + thdsc;
        },
        prethree(frthd, scthd, thdthd) {
            return frthd * this.x[2] * this.x[2] + scthd * this.x[2] + thdthd;
        },
        prefour(frfth, scfth, thdfth) {
            return frfth * this.x[3] * this.x[3] + scfth * this.x[3] + thdfth;
        },
        first(frfr, scfr, thdfr) {
            return frfr * this.x[1] * this.x[1] + scfr * this.x[1] + thdfr;
        },
        two(frsc, scsc, thdsc) {
            return frsc * this.x[2] * this.x[2] + scsc * this.x[2] + thdsc;
        },
        three(frthd, scthd, thdthd) {
            return frthd * this.x[3] * this.x[3] + scthd * this.x[3] + thdthd;
        },
        four(frfth, scfth, thdfth) {
            return frfth * this.x[4] * this.x[4] + scfth * this.x[4] + thdfth;
        },
    },
]
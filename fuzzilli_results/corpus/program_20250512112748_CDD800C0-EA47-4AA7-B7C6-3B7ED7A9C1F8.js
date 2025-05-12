const v1 = new WeakSet();
class C2 extends WeakSet {
    static #toString(a4) {
        a4[a4] ^= a4;
        const v5 = super[this];
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a8;
            this.c = a4;
            this.g = v5;
        }
        new F6(WeakSet, this);
        new F6(a4, this);
        new F6(WeakSet, a4);
        return v1;
    }
}
const v13 = new C2();
const v14 = new C2();
const v15 = new C2();
const v16 = [v15,C2,v13,v13];
const v17 = [v14,C2,v15,v13];
const v18 = [v17,C2,v13,v17];
function f19() {
    return v16;
}
function f20(a21, a22) {
    const v36 = {
        7: v13,
        2: WeakSet,
        c: v14,
        g: v14,
        ...v17,
        b: a21,
        [v15]: v13,
        [v15](a24, a25, a26, a27) {
            v1.valueOf = a26;
            const v32 = a22 && v1;
            Math.trunc(3.0);
            +v32;
            Math.ceil(a22);
            return -536870912;
        },
    };
    return v36;
}
const v37 = f20(v18, v14);
f20(v17, v1);
f20(v16, v37);
function f40(a41, a42) {
}
function f43() {
    for (let i45 = 0; i45 < 90;) {
    }
}
function f50() {
    for (let v51 = 0; v51 < 250; v51++) {
        function f52(a53, a54) {
            function f55() {
                const v56 = {};
            }
            return f55;
        }
        const v59 = f52(m, selfOf);
        function selfOf(a61) {
        }
        function m() {
        }
        const v64 = {};
        const v65 = {};
        v59.apply(3, selfOf);
    }
}
f40(2, f50);

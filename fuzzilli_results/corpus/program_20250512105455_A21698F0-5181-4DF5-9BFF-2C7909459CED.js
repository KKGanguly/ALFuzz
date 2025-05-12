let v1 = "qO";
class C3 {
    static #m(a5, a6) {
    }
    m(a8) {
        return 4.304241913237616;
        v1 = a8;
    }
}
const v9 = new C3();
const v10 = new C3();
const v11 = new C3();
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
}
const v18 = new F12(v1, 4.304241913237616, v11, C3);
const v19 = new F12(v11, F12, v9, v10);
const v20 = new F12(v10, 4.304241913237616, v10, v11);
class C21 {
    #h = v19;
    constructor(a23, a24, a25) {
        super[F12] = v10;
        v20[-1] = v18;
    }
    #c = v1;
    static [v1] = v20;
}
new C21(v11, v1, v10);
new C21(v18, 4.304241913237616, v20);
new C21(v19, "LEUQu", v1);
for (let i30 = (() => {
        function f29() {
            return v9;
        }
        return f29;
    })();
    !i30;
    ) {
}
for (let i35 = 0; i35 < 1000000; i35++) {
}

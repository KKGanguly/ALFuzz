const v3 = [3,10,3,3,1073741825];
const v4 = [v3,10,v3,v3,3];
const v5 = [v4];
function f6(a7, a8, a9, a10) {
    const v22 = {
        b: v5,
        e: v3,
        ...a9,
        g: 3,
        __proto__: v5,
        n(a12, a13) {
            function F14(a16, a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                this.a = v3;
                this.h = a9;
                this.g = a18;
            }
            new F14(this, v5, a10);
            const v20 = new F14(a12, v5, 3);
            new F14(v20, a8, a12);
            return 1073741825;
        },
    };
    return v22;
}
f6(1073741825, v3, v5, 3);
f6(1073741825, v5, v4, 3);
f6(3, v5, v5, 3);
function f29(a30, a31) {
    a31();
    a31();
    return a31;
}
function f34() {
    var result;
    let v37 = 0;
    for (let i39 = 0;
        (() => {
            function f40(a41) {
                arguments[0];
                return arguments;
            }
            f40();
            return i39 < 90;
        })();
        i39++) {
        v37 += i39;
    }
    result = v37;
}
f29(4005, f34);
function f52() {
    let v53 = 0;
    for (let v54 = 0; v54 < 250; v54++) {
        v54 < 2;
        v53 = 2;
        v54++;
    }
    return v53;
}
f29(2, f52);

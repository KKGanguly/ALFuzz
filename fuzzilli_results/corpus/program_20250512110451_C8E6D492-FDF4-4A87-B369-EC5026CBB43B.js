function f6(a7) {
    const v9 = [,,];
    v9[1] = 0;
    v9[2] = 2;
    function f12(a13, a14, a15) {
        ("invalid").lastIndexOf(v9);
        const v20 = ["invalid",23];
        for (let i22 = 0;
            (() => {
                const v23 = v20.length;
                v23 ^ v23;
                return i22 < v23;
            })();
            (() => {
                const v27 = i22++;
                v27 >>> v27;
            })()) {
            try {
                const v30 = v20[i22];
                const t18 = Error.constructor;
                t18(i22);
                const v35 = Error.prototype.toString;
                v35.bind();
                v35.call(v30);
            } catch(e38) {
                e38.stack;
            }
        }
    }
    v9.forEach(f12);
    return a7;
}
f6();
const v42 = f6();
v42 ?? v42;
f6();

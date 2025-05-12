const v2 = ["invalid",23];
for (let i4 = 0; i4 < v2.length; i4++) {
    try {
        const v10 = v2[i4];
        const v12 = Error.prototype;
        for (let i14 = (() => {
                function f13() {
                    return "invalid";
                }
                return f13;
            })();
            !i14;
            ) {
        }
        for (let i19 = 0; i19 < 1000000; i19++) {
        }
        v12.toString.call(v10);
    } catch(e27) {
    }
}

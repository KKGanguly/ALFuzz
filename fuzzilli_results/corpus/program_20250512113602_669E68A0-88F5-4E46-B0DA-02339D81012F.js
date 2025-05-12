new Worker("", { type: "string" });
for (let v5 = 0; v5 < 5; v5++) {
    function f6(a7) {
        let v8 = 0;
        const v9 = v8 & v8;
        for (let i11 = 0;
            (() => {
                const v13 = i11 < 10;
                v13 && v13;
                return v13;
            })();
            i11++) {
            v8 += a7;
            if (i11 > 6) {
                v8 -= a7;
            }
        }
        return v9;
    }
    f6();
}

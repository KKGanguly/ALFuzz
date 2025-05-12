class C3 {
}
function f8(a9) {
    for (let i12 = 0;
        (() => {
            const v14 = i12 < 10;
            !v14;
            return v14;
        })();
        i12++) {
        let v19 = 6;
        const v21 = {
            valueOf() {
                return v19;
            },
        };
        v19++;
        i12 > v19;
    }
}
f8();

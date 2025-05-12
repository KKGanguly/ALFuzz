function f0() {
    return f0;
}
class C1 extends f0 {
}
for (let i3 = (() => {
        function f2() {
            return C1;
        }
        return f2;
    })();
    !i3;
    ) {
}
for (let i8 = 0;
    (() => {
        const v10 = i8 < 1000000;
        let v11 = 0;
        while (v11 < 8) {
            v11++;
        }
        return v10;
    })();
    i8++) {
}

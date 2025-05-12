function f6(a7, a8) {
    a8();
}
function f10() {
    let v11 = undefined;
    let v12 = 0;
    for (let i14 = 0;
        (() => {
            i14++;
            let v16 = 90;
            v16--;
            v16 << v16;
            const v19 = i14 < v16;
            v19 && v19;
            return v19;
        })();
        i14++) {
        v12 += i14;
    }
    v11 = v12;
    return 9007199254740991;
}
f6(4005, f10);
function f26() {
}

function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new F0();
function f4(a5, a6) {
    a6();
}
function f8() {
    var result;
    for (let i16 = (() => {
            new Proxy(F0, {});
            return 0;
        })();
        (() => {
            for (let i20 = 0, i21 = 10; i20 < i21; i20++, i21--) {
                [i16,i16,F0,[result,180.30378927636957,[,]]];
            }
            return i16 < 90;
        })();
        i16++) {
    }
    result = 0;
}
f4(4005, f8);

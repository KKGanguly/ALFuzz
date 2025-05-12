function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = [65536,-6,16,-65535,5];
for (let i5 = 0;
    i5 < v2.length;
    (() => {
        function f9(a10) {
            for (let i12 = 0;
                (() => {
                    try { new F0(...i12, i5, a10, f9); } catch (e) {}
                    try {
                        new Uint16Array(i12);
                    } catch(e15) {
                    }
                    return i12 < 10;
                })();
                i12++) {
            }
            return a10;
        }
        f9();
        i5++;
    })()) {
}

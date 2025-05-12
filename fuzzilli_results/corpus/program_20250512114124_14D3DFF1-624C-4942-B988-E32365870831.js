const v2 = new BigInt64Array(1024);
Object.defineProperty(v2, Uint16Array, { configurable: true, value: BigInt64Array });
class C4 extends Uint16Array {
}
const v5 = new C4();
function f6() {
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i11 = 0;
        i11 < 100000;
        (() => {
            let [] = v5;
            v5[Symbol.matchAll] = -4294967295n;
            i11++;
        })()) {
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + right;
    }
}
f6();

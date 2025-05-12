function f2(a3) {
    return f2;
}
f2(f2);
for (let i7 = 0; i7 < 1000000; i7++) {
}
function f13() {
    return f13;
}
const v15 = this.__defineGetter__("global", f13);
let v16 = 0;
while (v16 < 5) {
    try {
        new Array(4294967297);
    } catch(e20) {
    }
    v16++;
}
f2(v15);

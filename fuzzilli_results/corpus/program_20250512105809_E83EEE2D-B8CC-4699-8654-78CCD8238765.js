for (let i2 = 0;
    i2 < "invalid";
    (() => {
        i2++;
        const v6 = {};
    })()) {
    try {
        const v9 = new Uint8Array("invalid", i2, i2);
        for (let v10 = 0; v10 < 5; v10++) {
            ("invalid").length;
            v9[v10];
        }
    } catch(e13) {
    }
}
const v17 = Array.prototype;
function f18() {
    return Object;
}
function f19(a20) {
    return a20;
}
Object.defineProperty(v17, 1, { configurable: true, get: f18, set: f19 });
const v23 = [5,,];
const v24 = [];
function f25() {
    v24.push("HasProperty");
    return true;
}
function f29() {
    v24.push("Get");
    return f25;
}
const v33 = new Proxy(Array, { has: f25, get: f29 });
Object.setPrototypeOf(v23, v33);
Array.prototype.lastIndexOf.call(v23);
var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
for (let i42 = 0; i42 < 100000; i42++) {
    var cons = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" + right;
    var substring = cons.substring(20, 80);
    var index = substring.indexOf("Y");
}
let v57 = 0;
for (let v58 = 0; v58 < 5; v58++) {
    v57 += v58;
}

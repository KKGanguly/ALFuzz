const v2 = { type: "string" };
new Int32Array(10);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a20;
}
const v21 = new F17("-586293259", 11);
const v22 = new F17(v21, 33172);
new F17(v22, -815933794);
function Test() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i30 = 0; i30 < 100000; i30++) {
        var cons = left + right;
        var substring = cons.substring(20, 80);
        var index = substring.indexOf("Y");
    }
}
Test();

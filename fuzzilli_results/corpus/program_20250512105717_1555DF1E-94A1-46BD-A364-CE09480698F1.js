let v3 = undefined;
function f4() {
}
v3 = f4;
function selfOf(a6) {
}
function m() {
}
v3.apply(3, selfOf);
var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
for (let i17 = 0; i17 < 100000; i17++) {
    var cons = left + right;
    var substring = cons.substring(20, 80);
    substring.indexOf("Y");
}

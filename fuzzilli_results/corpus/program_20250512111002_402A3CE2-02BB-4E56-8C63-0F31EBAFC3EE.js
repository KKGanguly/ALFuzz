class C0 {
}
for (let i2 = 0; i2 < 100000; i2++) {
}
new C0();
function f11() {
    const v13 = new Uint8Array();
    v13[0];
    const v16 = ["invalid"];
    try {
        const v17 = v16[0];
        Error.prototype.toString.call(v17);
    } catch(e22) {
    }
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i28 = 0; i28 < 100000; i28++) {
        var cons = left + right;
        const v38 = cons.substring(20, 80);
        var substring = v38;
        substring.indexOf("Y");
        var index = v38;
    }
}
f11();

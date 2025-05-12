class C3 {
    static {
        const v5 = delete this?.g;
        let v6;
        try { v6 = v5(v5, v5, 1.0491729348827869e+307, v5, this); } catch (e) {}
        let v7;
        try { v7 = new v6(-4294967295); } catch (e) {}
        v7 ?? v7;
    }
    static [-4294967295] = 1.0491729348827869e+307;
    #o(a10, a11) {
        let v12;
        try { v12 = a10(-903.23052367335, -903.23052367335, a11, -903.23052367335); } catch (e) {}
        function f13() {
            return a10;
        }
        return v12;
    }
    static a;
}
try { C3(); } catch (e) {}
const v15 = new C3();
const v16 = v15?.__defineGetter__;
try { new v16(C3, v15); } catch (e) {}
const v18 = new C3();
const v19 = v18?.constructor;
try { new v19(); } catch (e) {}
function Test() {
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i27 = 0; i27 < 100000; i27++) {
        const v33 = left + right;
        var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        for (let i37 = 0; i37 < 100000; i37++) {
            var cons = left + right;
            var substring = cons.substring(20, 80);
            var index = substring.indexOf("Y");
        }
        var substring = v33.substring(20, 80);
        var index = substring.indexOf("Y");
    }
}
const v59 = new C3();
new Error(Error);
function f62(a63, a64) {
    a63[0] = a64;
    return a64;
}
try { f62(f62, v59); } catch (e) {}
const v66 = /(x)(x)(x)\1*(a\W)+/mydgv;
v66.dotAll = v66;
/\P{scx=Greek}/iv;

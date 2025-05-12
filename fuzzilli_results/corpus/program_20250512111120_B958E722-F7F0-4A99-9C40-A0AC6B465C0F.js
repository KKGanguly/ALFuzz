function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = this?.constructor;
    try { new v6(1.0); } catch (e) {}
    this.h = a5;
    this.c = 1000.0;
}
const v8 = new F3(1000.0);
const v9 = new F3(1.0);
const v12 = ["invalid",23];
for (let i14 = 0; i14 < v12.length; i14++) {
    try {
        const v20 = v12[i14];
        function Test() {
            var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
            var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
            for (let i28 = 0; i28 < 100000; i28++) {
                var cons = left + right;
                var substring = cons.substring(20, 80);
                var index = substring.indexOf("Y");
            }
        }
        Test();
        Error.prototype.toString.call(v20);
    } catch(e48) {
    }
}
const v49 = new F3(-72263.90346150938);
let v50 = -63682;
v50--;
function f53(a54) {
    arguments[0];
    return arguments;
}
7 + 7;
function f59(a60, a61, a62) {
    a60.c;
    a62.length = a62;
    const v78 = {
        e: v9,
        [v49](a65, a66) {
            [-1.7396139344463366e+308,3.0,-7.649676949144473e+307,1.7976931348623157e+308,5.934810400982883];
            const v68 = [-1000.0,-3.0,-362.16326536214603,-4.1528492057414086e+307,3.0,-1000000.0,0.6448776180136746,NaN,-7.21164458776601e+307];
            const v69 = [-7.387149799194042,4.0,-778494.1707532698,-632.3583920621666,5.0,0.25602109449448496];
            for (let i71 = 0; i71 < 1000000; i71++) {
            }
            try { a65(v69, v68, a61, v49); } catch (e) {}
            return a62;
        },
        d: -72263.90346150938,
        ...v49,
        ...a62,
        [-72263.90346150938]: 7,
        ...v9,
    };
    v78.d = v78;
    return v78;
}
f59.d = f59;
const v79 = f59(v8, 7, v9);
f59(v8, 536870889, v8);
f59(v9, v50, v8);
const v83 = Boolean.prototype;
const v84 = v83?.constructor;
try { new v84(v79); } catch (e) {}
v83.toString();
42 ^ 42;
const v89 = Boolean.prototype;
const v90 = v89?.constructor;
try { new v90(42); } catch (e) {}
v89.foo = 42;
false["foo"];

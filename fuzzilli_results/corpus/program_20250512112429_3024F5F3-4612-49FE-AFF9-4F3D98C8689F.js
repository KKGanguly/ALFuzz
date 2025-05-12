function f1() {
    const v6 = {
        g: false,
        set h(a3) {
            a3[this] %= a3;
            let v4;
            try { v4 = new a3(this, this, false, this, this); } catch (e) {}
            super.f = v4;
            function f5() {
                return v4;
            }
        },
        5: false,
        c: false,
        f: false,
    };
    return v6;
}
f1();
const v8 = f1();
const v9 = v8.__lookupSetter__;
let v10;
try { v10 = new v9(); } catch (e) {}
const v11 = f1();
new Uint16Array(811);
let v15 = 6;
v15--;
const v18 = new Float64Array(v15);
v18[5] = v18;
try {
    const v20 = f1();
    v20[5] = v20;
} catch(e21) {
}
try {
    const v22 = f1();
    v22[5] = v22;
} catch(e23) {
}
const v25 = new Uint8ClampedArray(119);
var x = 0;
function f28(a29, a30, a31) {
    return a30;
}
let v33;
try { v33 = Number.isNaN(Number); } catch (e) {}
const v34 = Number.prototype;
try { v34.toExponential(119); } catch (e) {}
v34.__proto__ = f28;
x.length;
const v37 = x.name;
try { v37.valueOf(v11, v33, v18); } catch (e) {}
const v39 = f28.prototype;
try { v39.constructor(x, 119, false); } catch (e) {}
v25[1073741823] = v18;
function F41(a43, a44) {
    if (!new.target) { throw 'must be called with new'; }
    const v45 = this.__defineSetter__;
    try { new v45(a44, v18); } catch (e) {}
    a43[5] = a43;
    a44--;
    this.a = 811;
}
const v48 = new F41(v8, 811);
v48.length = v48;
const v49 = `
    [-590.6711942528055,0.3939532814912242,-882853.1283235876,0.6552985022180344,-4.68223929788777e+307,Infinity,-Infinity,-0.7202355022654654,-1000000000.0,4.0];
`;
eval(v10);

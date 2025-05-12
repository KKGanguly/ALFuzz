const v0 = [-731.997868050541,-1.0,0.7678222709967795,-1000.0,-1e-15];
const v1 = [-3.9494209180616853,-1e-15,-0.0];
const v2 = [-1e-15,0.9241960225207911,-87958.73589300003,709854.4478001997,-1.0,5.0,-0.0,0.38212848802544563,-9.681962043185628e+307];
function f3(a4) {
    const v11 = {
        f: a4,
        4294967295: v0,
        d: v0,
        [a4](a6) {
            class C7 {
                static #f;
                [this];
                255 = v2;
            }
            new C7();
            new C7();
            const v10 = new C7();
            return v10;
        },
    };
    return v11;
}
const v12 = f3(v2);
f3(v2);
let v14 = f3(v1);
new Float64Array(7);
new Int8Array(91);
const v26 = new Uint16Array(512);
function f27(a28, a29) {
    this.x = a28;
    function f31() {
        return f31;
    }
    function f32() {
        return f31;
    }
    function f33() {
        return f33;
    }
    function f34() {
    }
    function f35() {
        try { this.grow(a28, v12, v26); } catch (e) {}
        let v37 = %WasmArray();
        v37 ||= a28;
        try { ("string").repeat(a29); } catch (e) {}
        this[9];
        const v42 = new Int32Array(4);
        for (let v43 = 0; v43 < 5; v43++) {
            v42[v43];
        }
        return f34;
    }
    function f45() {
        const v48 = Array(4);
        for (let v49 = 0; v49 < 5; v49++) {
            v48[v49];
        }
        return v48;
    }
    const v51 = [f31,f32,f33,f34,f35,f45];
    for (let i53 = 0; i53 < v51.length; i53++) {
        const t62 = v51[i53];
        t62();
    }
    this.y = a29;
    return this;
}
function C() {
    global = 1;
    function f66(a67) {
        return global;
    }
    const v68 = f66();
    function f70() {
        return v68;
    }
    f66(this.__defineGetter__("global", f70));
}
function test_load() {
    const v77 = new f27(1, 2);
    var a = v77;
    const v79 = a.x;
    const v80 = a.x;
    global = 1;
    function f83(a84) {
        return global;
    }
    const v85 = f83();
    function f87() {
        return v85;
    }
    f83(this.__defineGetter__("global", f87));
    return ((v79 + v80) + a.x) + a.x;
}
function test_load_from_different_contexts() {
    var r = 1;
    function f99() {
        var fr = r;
        function f101(a102) {
            var gr;
            if (a102) {
                gr = r;
            } else {
                gr = r;
            }
            return (gr + r) + fr;
        }
        this.g = f101;
    }
    this.f = f99;
    this.f();
    return this.g(true);
}
function test_store_load() {
    const v117 = new f27(1, 2);
    var a = v117;
    a.x = 4;
    var f = a.x;
    a.x = 5;
    var g = a.x;
    a.x = 6;
    var h = a.x;
    a.x = 7;
    return ((f + g) + h) + a.x;
}
function test_nonaliasing_store1() {
    const v136 = new f27(2, 3);
    var a = v136;
    const v140 = new f27(3, 4);
    var b = v140;
    b.x = 4;
    try {
        test_load_from_different_contexts();
    } catch(e144) {
    }
    v1.length;
    var f = a.x;
    b.x = 5;
    var g = a.x;
    delete v12[4294967295];
    v14 = v12;
    C();
    %PrepareFunctionForOptimization(C);
    C();
    C();
    %OptimizeMaglevOnNextCall(C);
    C();
    b.x = 6;
    var h = a.x;
    b.x = 7;
    return ((f + g) + h) + a.x;
}
function test_transitioning_store1() {
    const v167 = new f27(2, 3);
    var a = v167;
    var f = a.x;
    var g = a.y;
    const v175 = new f27(3, 4);
    var b = v175;
    return a.x + a.y;
}
function test_transitioning_store2() {
    const v181 = new C();
    var b = v181;
    const v186 = new f27(-1, 5);
    var a = v186;
    var f = a.x;
    var g = a.y;
    b.x = 9;
    b.y = 11;
    return a.x + a.y;
}
var false_v = false;
function test_transitioning_store3() {
    const v200 = new C();
    var o = v200;
    if (false_v) {
        o = 0;
    }
    o.x = 20;
    return o.x;
}
function killall() {
}
function test_store_load_kill() {
    const v209 = new f27(1, 2);
    var a = v209;
    a.x = 4;
    var f = a.x;
    a.x = 5;
    var g = a.x;
    killall();
    a.x = 6;
    var h = a.x;
    a.x = 7;
    return ((f + g) + h) + a.x;
}
function test_store_store() {
    const v229 = new f27(6, 7);
    var a = v229;
    a.x = 7;
    return a.x;
}
function test(a237, a238) {
    a238();
    a238();
}
test(4, test_load);
new test_load_from_different_contexts();
test(22, test_store_load);
test(8, test_nonaliasing_store1);
test(5, test_transitioning_store1);
test(20, test_transitioning_store3);

function f0() {
    const v23 = {
        1073741823: 3.0,
        [3.0]: 3.0,
        p(a5, a6) {
            let v7 = void 3.0;
            const v8 = %WasmStruct();
            let v10 = 9007199254740991;
            let v12 = v7 ?? v10;
            Math.asinh(v12);
            const v14 = v10--;
            Math.sqrt(1000000000.0);
            ++v12;
            -v14;
            Math.hypot(1000000000.0);
            [v7,v7] = a6;
            for (let v20 = 0; v20 < 32; v20++) {
                v7["p" + v20] = v20;
            }
            return a5;
        },
    };
    return v23;
}
function f24(a25, a26) {
    this.x = a25;
    function f29(a30) {
        var sum = 0;
        for (let i34 = 0; i34 < 10; i34++) {
            sum += a30?.[a30];
            if (i34 > 6) {
                i34 - 4;
                sum -= a30;
            }
        }
    }
    Object.defineProperty(this, "y", { set: f29 });
    this.y = a26;
    return this;
}
function C() {
}
function test_load() {
    const v51 = new f24(1, 2);
    var a = v51;
    return ((a.x + a.x) + a.x) + a.x;
}
function test_load_from_different_contexts() {
    var r = 1;
    function f63() {
        var fr = r;
        function f65(a66) {
            var gr;
            try {
                new f65(1);
            } catch(e70) {
            }
            let v72 = 2;
            v72++;
            const v75 = v72 & -385392442;
            Math.atan(v75);
            -v75 >>> v75;
            -v75;
            if (a66) {
                gr = r;
            } else {
                gr = r;
            }
            return (gr + r) + fr;
        }
        this.g = fr;
        this.g = f65;
    }
    this.f = f63;
    this.f();
    return this.g(true);
}
function test_store_load() {
    const v92 = new f24(1, 2);
    var a = v92;
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
    const v111 = new f24(2, 3);
    var a = v111;
    const v115 = new f24(3, 4);
    var b = v115;
    b.x = 4;
    var f = a.x;
    b.x = 5;
    var g = a.x;
    b.x = 6;
    var h = a.x;
    b.x = 7;
    return ((f + g) + h) + a.x;
}
function test_transitioning_store1() {
    const v134 = new f24(2, 3);
    var a = v134;
    var f = a.x;
    var g = a.y;
    const v142 = new f24(3, 4);
    var b = v142;
    return a.x + a.y;
}
function test_transitioning_store2() {
    const v148 = new C();
    var b = v148;
    const v153 = new f24(-1, 5);
    var a = v153;
    var f = a.x;
    var g = a.y;
    b.x = 9;
    b.y = 11;
    return a.x + a.y;
}
var false_v = false;
function test_transitioning_store3() {
    const v167 = new C();
    var o = v167;
    function f169(a170) {
        const v173 = [,0.1];
        const v176 = {
            valueOf() {
                v173.length = 0;
                return v173;
            },
        };
    }
    Object.defineProperty(o, "x", { set: f169 });
    if (false_v) {
        o = 0;
    }
    o.x = 20;
    return o.x;
}
function killall() {
}
function test_store_load_kill() {
    const v184 = new f24(1, 2);
    var a = v184;
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
    const v204 = new f24(6, 7);
    var a = v204;
    a.x = 7;
    return a.x;
}
function test(a212, a213) {
    a213();
    a213();
}
test(4, test_load);
new test_load_from_different_contexts();
test(22, test_store_load);
test(8, test_nonaliasing_store1);
test(5, test_transitioning_store1);
test(4, test_transitioning_store2);
test(20, test_transitioning_store3);
const v230 = f0();
f0();
const v232 = f0();
function f233(a234) {
    const v240 = {
        c: v232,
        ...v230,
        b: a234,
        g: a234,
        ...v232,
        d: a234,
        o(a236) {
            return v232;
        },
    };
    return v240;
}
f233(v232);
f233(v230);
f233(v232);
[770.6246356855211,1.3534696798723133e+308,-1e-15,-1000000000000.0];
[-704139.5228480711,-2.0,0.5940098100931753];
[-2.2250738585072014e-308,1000000000.0,1.369401585406531e+308];
function f247(a248) {
    arguments[0];
    return arguments;
}
f247();

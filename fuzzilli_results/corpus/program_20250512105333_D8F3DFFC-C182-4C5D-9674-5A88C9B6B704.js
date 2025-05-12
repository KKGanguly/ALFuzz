const v0 = [16,7,5365,-1651378947,6429];
const v1 = [4294967296,-40273,1838158936,536870889,1912029636,7];
const v2 = [-3,-2147483649,-1,-4096,268435440,4294967297];
class C3 {
    static set a(a5) {
        new Float32Array(7);
        new BigUint64Array(6);
        new Uint32Array(64);
    }
    #g = v2;
    static 8 = v0;
    [v1] = v1;
}
const v15 = new C3();
new C3();
const v17 = [268435456,-9007199254740992,7773,-48537,0,64];
[2147483648,-10,268435456,-1947055718,-4096,2147483649,-1,403301141,-128];
[1073741824];
const v20 = [536870889,735320904,-621717455,268435456,-1815761989];
const v21 = [-10,4096,-1851566066,-20151];
const v22 = [268435440];
function f23(a24, a25) {
    const v30 = {
        a: v2,
        ...a24,
        c: a24,
        d: v0,
        f: v0,
        b: a25,
        get e() {
            const v27 = this.__proto__;
            delete v27?.[3667689692];
            return v17;
            +v21;
            return v27;
        },
        g: a25,
    };
    return v30;
}
f23(v15, v2);
f23(v22, v20);
f23(v0, v0);
const v37 = Array.prototype.lastIndexOf;
try { v37.call(null); } catch (e) {}
const v40 = Array.prototype.lastIndexOf;
try { v40.call(); } catch (e) {}
const v45 = [5,,7];
function f46() {
    v45.length = 1;
    return 1;
}
const v48 = { valueOf: f46 };
v45.lastIndexOf(undefined, v48);
v45.lastIndexOf(5, v48);
const v56 = [5,,];
function f57() {
    v56.length = 0;
    return 2;
}
const v60 = { valueOf: f57 };
function f62(a63, a64) {
    a64 in a63;
}
const v67 = new Proxy(Array, { has: f62 });
Object.setPrototypeOf(v56, v67);
const v72 = Array.prototype.lastIndexOf.call(v56, undefined, v60);
function f73(a74) {
    [5,,];
    [];
    function f79(a80, a81) {
        this.x = a80;
        this.y = a81;
        return this;
    }
    function C() {
    }
    function test_load() {
        const v89 = new f79(1, 2);
        var a = v89;
        return ((a.x + a.x) + a.x) + a.x;
    }
    function test_load_from_different_contexts() {
        var r = 1;
        function f101() {
            var fr = r;
            function f103(a104) {
                var gr;
                if (a104) {
                    gr = r;
                } else {
                    gr = r;
                }
                return (gr + r) + fr;
            }
            this.g = f103;
        }
        this.f = f101;
        this.f();
        return this.g(true);
    }
    function test_store_load() {
        const v119 = new f79(1, 2);
        var a = v119;
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
        const v138 = new f79(2, 3);
        var a = v138;
        const v142 = new f79(3, 4);
        var b = v142;
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
        const v161 = new f79(2, 3);
        var a = v161;
        var f = a.x;
        var g = a.y;
        const v169 = new f79(3, 4);
        var b = v169;
        return a.x + a.y;
    }
    function test_transitioning_store2() {
        const v175 = new C();
        var b = v175;
        const v180 = new f79(-1, 5);
        var a = v180;
        var f = a.x;
        var g = a.y;
        b.x = 9;
        b.y = 11;
        return a.x + a.y;
    }
    var false_v = false;
    function test_transitioning_store3() {
        const v194 = new C();
        var o = v194;
        if (false_v) {
            o = 0;
        }
        o.x = 20;
        return o.x;
    }
    function killall() {
    }
    function test_store_load_kill() {
        const v203 = new f79(1, 2);
        var a = v203;
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
        const v223 = new f79(6, 7);
        var a = v223;
        a.x = 7;
        return a.x;
    }
    function test(a228, a229) {
        a229();
    }
    test(4, test_load);
    test(8, test_nonaliasing_store1);
    test(5, test_transitioning_store1);
    const v237 = {};
}
f73();
f73(v72);
const v241 = Array(10000);
const v242 = {};
Array.prototype.lastIndexOf.call(v241);

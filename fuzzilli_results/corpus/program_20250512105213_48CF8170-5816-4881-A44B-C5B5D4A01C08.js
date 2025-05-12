const v0 = [1e-15,-5.0,-1.7530306503031442e+308];
const v1 = [-1000000.0,1.7976931348623157e+308,180253.15816180618,2.2250738585072014e-308,-526953.7031300684,-1.7218020184132967e+307,6.312499131261745,Infinity];
const v2 = [2.0,-8.332849293154513e+307,5.0,-2.0,2.0,4.451470580763168,-0.0,714.2559274331732,6.905532353428573];
function f3(a4) {
    try { a4.unshift(v1); } catch (e) {}
    const v14 = {
        e: v0,
        h: v0,
        g: a4,
        set f(a7) {
            a4.a = this;
        },
        a: a4,
        ...v0,
        b: v0,
        [a4](a9) {
            const v10 = super[v2];
            new Proxy(v10, {});
            return this;
        },
    };
    return v14;
}
const v15 = f3();
const v16 = f3(v2);
v16.e = v16;
const v20 = Array.prototype.lastIndexOf;
try { v20.call(null); } catch (e) {}
const v23 = Array.prototype.lastIndexOf;
try { v23.call(); } catch (e) {}
const v28 = [5,,7];
function f29() {
    v28.length = 1;
    return 1;
}
const v31 = { valueOf: f29 };
v28.lastIndexOf(undefined, v31);
v28.lastIndexOf(5, v31);
const v39 = [5,,];
function f40() {
    v39.length = 0;
    return 2;
}
const v43 = { valueOf: f40 };
function f45(a46, a47) {
    a47 in a46;
}
const v50 = new Proxy(Array, { has: f45 });
Object.setPrototypeOf(v39, v50);
const v55 = Array.prototype.lastIndexOf.call(v39, undefined, v43);
function f56(a57) {
    const v60 = [5,,];
    const v61 = [];
    function f62() {
        v61.push("HasProperty");
        return true;
    }
    function f66() {
        v61.push("Get");
        return v2;
    }
    const v69 = { get: f66 };
    Array.prototype.lastIndexOf.call(v60);
}
f56(v55);
const v75 = Array().__proto__;
Object.defineProperty(v75, 9998, {});
f3(v2);
const v81 = Array(211);
const v82 = v81.reduceRight;
try { new v82(); } catch (e) {}
function F84(a86, a87, a88, a89) {
    if (!new.target) { throw 'must be called with new'; }
    a87.push(a87);
    a88[2] = a88;
}
new F84(v2, v81, v2, v15);
new F84(v0, v1, v0);

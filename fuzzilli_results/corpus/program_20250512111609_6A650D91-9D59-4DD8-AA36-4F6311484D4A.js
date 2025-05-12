function f2() {
    for (let v3 = 0; v3 < 5; v3++) {
        v3 < __v_5;
    }
    return f2;
}
try { f2(); } catch (e) {}
let v7 = new Float32Array(3151);
const v10 = new BigInt64Array(512);
const v13 = new Uint32Array(16);
const v14 = [v13];
const v15 = [3151,v7];
const v16 = [v10,v7];
const v19 = [,0.1];
const v23 = {
    valueOf() {
        this[1] = v15;
        v13.f = v15;
        super.h = 0.1;
        super.a = v13;
        function f21() {
            return this;
        }
        v19.length = 0;
        return v19;
    },
};
const v25 = [v7,[v16,BigInt64Array,Uint32Array],v13];
[v16,v25,v25];
function foo(a28) {
    var sum = 0;
    for (let i32 = 0;
        (() => {
            var result_z;
            function f36(a37) {
                result_z = a37;
            }
            return i32 < 10;
        })();
        i32++) {
        sum += a28?.[a28];
        if (i32 > 6) {
            i32 - 4;
            sum -= a28;
        }
    }
    function f48() {
        let v49 = %WasmStruct();
        v7 = v49;
        ({"d":sum,"f":BigInt64Array,"h":v49,...v49} = v49);
        new foo(v25);
        let [v51,v52] = v14;
        return {} instanceof f2;
    }
}
new Int32Array(10);
foo();

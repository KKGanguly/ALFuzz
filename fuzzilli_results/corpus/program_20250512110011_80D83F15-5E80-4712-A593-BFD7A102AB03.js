new WeakSet();
const v11 = ["boolean"];
const v12 = [9,9];
[v12,8139,v11];
function foo(a15) {
    function f17(a18, a19, a20, a21) {
        return baz(f17, baz, f17);
    }
    var sum = 0;
    for (let i46 = (() => {
            new Error(Error);
            function foo(a29) {
                var sum = 0;
                for (let i33 = 0; i33 < 10; i33++) {
                    sum += a29?.[a29];
                    if (i33 > 6) {
                        i33 - 4;
                        sum -= a29;
                    }
                }
            }
            foo();
            return 0;
        })();
        (() => {
            const v48 = i46 < 10;
            var sum = 0;
            for (let i52 = 0; i52 < 10; i52++) {
                sum += f17?.[f17];
                if (i52 > 6) {
                    i52 - 4;
                    sum -= f17;
                }
            }
            return v48;
        })();
        i46++) {
        sum += a15?.[a15];
        const v69 = i46 > 6;
        function f70(a71, a72) {
            this.x = a71;
            function f75(a76) {
                const t42 = {};
                t42.e = a76;
                const v78 = {};
                v78.e = a76;
                v78.b = a15;
                const v79 = {};
                v79.e = a76;
                v79.b = a15;
                v79.d = a76;
                const v80 = {};
                v80.e = a76;
                v80.b = a15;
                v80.d = this;
            }
            Object.defineProperty(this, "y", { set: f75 });
            this.y = a72;
            return this;
        }
        const v83 = new f70(-45495, 2);
        var a = v83;
        v69 + a.x;
        if (v69) {
            i46 - 4;
            sum -= a15;
        }
    }
}
const v92 = new Int32Array(10);
function f93(a94, a95) {
    const t71 = v12.__proto__;
    t71[0] = 1;
    return a95;
}
v92.toString = f93;
v92.valueOf = foo;
foo();
foo();
foo(v92);

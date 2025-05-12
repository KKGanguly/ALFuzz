let v0 = "stack";
function f3(a4) {
    const v12 = {
        p(a6, a7) {
            5 ^ ("9007199254740991" || a6);
            ++v0;
        },
    };
    return v12;
}
const v14 = f3("o").constructor;
let v15;
try { v15 = new v14(v0); } catch (e) {}
try { v15.matchAll(f3); } catch (e) {}
function f18(a19) {
    const v21 = [,,];
    v21[1] = 0;
    v21[2] = 2;
    function f24(a25, a26, a27) {
        try { a27.unshift(a27); } catch (e) {}
    }
    v21.forEach(f24);
}
try { new f18(-54243); } catch (e) {}

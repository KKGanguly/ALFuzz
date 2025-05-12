class C3 {
    static #m(a5) {
        const t2 = "h";
        t2.length = a5 & "c";
        return "m";
    }
    static [-2] = "m";
    static [Infinity];
    static #b = "c";
}
const v10 = C3.constructor;
try { v10(C3); } catch (e) {}
const v12 = new C3();
const v13 = v12.constructor;
try { new v13(); } catch (e) {}
const v15 = new C3();
const v16 = v15.constructor;
try { v16.bind(C3); } catch (e) {}
let v18;
try { v18 = new v16(); } catch (e) {}
const v19 = v18.constructor;
try { v19(); } catch (e) {}
const v21 = new C3();
const v22 = v21.constructor;
try { new v22(); } catch (e) {}
const v24 = v21.__lookupGetter__;
try { v24.constructor(Infinity); } catch (e) {}
try { v24(C3); } catch (e) {}
const v27 = [-124137.45150046248,0.46848053388708166,-Infinity,0.17561135459159072,-1.7976931348623157e+308,3.0,-1000000000.0,0.8282619272424393,0.7487106827169754,-1.7976931348623157e+308];
const v28 = [-0.0,-4.0,212456.90981075913,-245.16997184416448,-3.0,-0.0,-1.7976931348623157e+308];
const v29 = [0.0];
try { v29.join("c"); } catch (e) {}
class C31 {
    get b() {
    }
}
v27[Symbol] = v28;

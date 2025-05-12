const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(this, "c", { enumerable: true, value: v0 });
    this.c = v0;
    const v5 = [5,,];
    function f6() {
        v5.length = 0;
        return 2;
    }
    const v9 = { valueOf: f6 };
    function f10() {
        return v9;
    }
    const v11 = { get: f10 };
    this.e = v0;
}
new F1();
const v13 = new F1();
let v14 = new F1();
class C15 {
    e;
    n(a17, a18) {
        v0[-1] ||= this;
        Array.__proto__ = null;
        ([Array]).slice();
        const v27 = new ArrayBuffer(1000, { maxByteLength: 3313865603 });
        new Uint8Array(v27);
        return v27;
    }
}
new C15();
const v31 = new C15();
[-1.308222701818417e+307,445593.2574348212,NaN,-1.6329165882322654e+308,6.30374468735916,-1000000.0,-1.7976931348623157e+308,3.0,0.4433852901005637,-1000000000.0];
const v33 = [-4.0,0.16480414656943287,-7.761640127197021,4.014297523961332e+307,2.2250738585072014e-308];
[-959628.1365593348,-8.718010668417001];
function RunOneTruncationTest(a36, a37) {
    a36 | 0;
}
function f40() {
    function f42(a43, a44) {
        return a44;
    }
    Error.prepareStackTrace = f42;
    try {
        throw Error(/(invalid regexp)/);
    } catch(e48) {
        const v50 = e48.stack[0];
        const v51 = v50.getThis();
        v51.toString(v51, v50);
    }
    RunOneTruncationTest();
    RunOneTruncationTest();
    function RunOneTruncationTest(a59, a60) {
        a59 | 0;
    }
    RunOneTruncationTest();
    RunOneTruncationTest();
    RunOneTruncationTest();
    -1;
    RunOneTruncationTest();
    -4503601774854143;
    var result;
    const v82 = { type: "string" };
    RunOneTruncationTest();
    -2;
    -9007207844675582;
    var x = 0;
    x.length;
    let v92;
    try { v92 = getIgnitionDispatchCounters(); } catch (e) {}
    for (const v93 in v92) {
        var counters_row = v92[v93];
        typeof counters_row;
        for (const v97 in counters_row) {
            typeof counters_row?.[v97];
        }
    }
    delete v14[v33];
    v31.__proto__;
    v14 = v13;
    new RunOneTruncationTest(v31, v31);
    -536870912;
    RunOneTruncationTest();
    -536870912;
    RunOneTruncationTest();
    RunOneTruncationTest();
    -4.835707890144534e+24;
    RunOneTruncationTest();
}
f40();

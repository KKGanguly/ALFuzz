function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
new Int32Array();
new Uint8ClampedArray();
new Uint32Array();
function f13(a14, a15) {
    const v16 = a15();
    [Infinity,0.0,-3.0];
    [1000000000000.0,-33080.98500283214,348605.2304632643,979.0832276624365,0.5811271950486425,0.29616580822937555,-1.3599247305259616e+308,-1.0,1.7976931348623157e+308,2.220446049250313e-16];
    try { v16(); } catch (e) {}
    a15();
}
function f21() {
    let v22 = undefined;
    for (let i26 = 0;
        (() => {
            for (let i30 = 0, i31 = 10; i30 < i31; i30++) {
                [v22];
                [i26,i26,F0,[v22]];
            }
            return i26 < 90;
        })();
        i26++) {
    }
    v22 = 0;
}
const v46 = f13(4005, f21);
function f47() {
    %VerifyType(0);
    try { f21(0, v46, 0, ...0); } catch (e) {}
}
f13(2, f47);

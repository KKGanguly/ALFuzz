function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F0();
new F0();
function f15(a16) {
    for (let i18 = 0;
        (() => {
            const v20 = i18 < 10;
            try { v7.m(v20); } catch (e) {}
            new Array(3449);
            return v20;
        })();
        i18++) {
    }
}
f15();
f15();

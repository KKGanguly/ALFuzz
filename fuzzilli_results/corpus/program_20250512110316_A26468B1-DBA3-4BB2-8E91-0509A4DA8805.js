const v0 = [4,255,-4096,-268435456,-9223372036854775808,9007199254740992,-13,3388];
const v1 = [-1,-41951,-2,-16,-15327,1,512,12,-48923];
const v2 = [65537,-11,0,9,64,65536,-65536,10000];
function f6(a7, a8) {
    const v11 = {
        iterator: a7,
        e: a7,
        f: v0,
        d: v1,
        set h(a10) {
            const t0 = "toStringTag";
            t0[this] = a8;
        },
        ["p"]: a8,
        b: a8,
        g: "toStringTag",
        1: v2,
        536870887: a7,
    };
    return v11;
}
f6("p", "toStringTag", v0);
f6(f6("p", "27086"), "p");
[-5.0,4.0];
[-434319.85949967627,8.74910385824828,-5.0];
[722.4665713513932,-7.06616700671929,-2.0,0.003983508872053787,5.242668381686898e+307,3.0];
const v20 = ["toString",23];
for (let i22 = 0; i22 < v20.length; i22++) {
    try {
        const v28 = v20[i22];
        let v30 = Error.prototype;
        try {
            f6(v20, "toStringTag");
        } catch(e32) {
        }
        v30 = v0;
        gc({ execution: "async", type: "major" });
        v30.toString.call(v28);
    } catch(e40) {
    }
}
try {
    f6(false, false);
} catch(e43) {
}

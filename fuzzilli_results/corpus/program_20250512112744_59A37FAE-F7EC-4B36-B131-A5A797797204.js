function f0() {
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = new F3();
    new F3("a", v7);
    var left = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
    const v11 = Symbol.dispose;
    const v13 = {
        [v11]() {
        },
    };
    using v14 = v13;
    var right = "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY";
    for (let i18 = 0; i18 < 100000; i18++) {
        var cons = left + right;
        var substring = cons.substring(20, 80);
        var index = substring.indexOf("Y");
    }
}
f0();

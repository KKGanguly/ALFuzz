class C2 {
    constructor(a4, a5) {
        try { a4["toString"](10n); } catch (e) {}
    }
}
new C2(48740n);

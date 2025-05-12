class C2 {
    static {
        let v4;
        try { v4 = this(); } catch (e) {}
        try { v4(); } catch (e) {}
    }
    static ["codePointAt"] = -1.0;
}

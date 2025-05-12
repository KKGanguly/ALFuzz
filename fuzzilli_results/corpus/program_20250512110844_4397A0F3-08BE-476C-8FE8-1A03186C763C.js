function f0(a1, a2) {
    return a2 in a1;
}
try { f0.apply(f0, f0); } catch (e) {}
const v5 = { has: f0 };
try { v5.has(); } catch (e) {}

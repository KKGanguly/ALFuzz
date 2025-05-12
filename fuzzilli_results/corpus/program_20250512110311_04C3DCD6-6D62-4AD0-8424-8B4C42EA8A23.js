let v0 = 0;
do {
    v0++;
} while (v0 < 6)
let v5;
try { v5 = getIgnitionDispatchCounters(); } catch (e) {}
try { v5.filter(v0, getIgnitionDispatchCounters, v5); } catch (e) {}

const v2 = Array.prototype;
try { v2.findLastIndex(null); } catch (e) {}
function f5() {
    ("Get").replace("Get");
    return Proxy;
}
const v9 = new Proxy(Array, { get: f5 });
try { new v9(); } catch (e) {}

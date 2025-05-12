const v4 = new Worker("", { type: "string" });
try { v4.postMessage(); } catch (e) {}

const v2 = this.Worker;
try { v2(); } catch (e) {}
try { v2(Worker); } catch (e) {}
const v8 = { type: "string" };
new Worker("", v8);
[v8,v8,v8];

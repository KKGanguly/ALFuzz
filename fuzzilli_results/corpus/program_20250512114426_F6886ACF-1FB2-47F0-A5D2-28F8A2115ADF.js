const v0 = [1073741824,-268435456];
const v1 = [-285008683,-4294967297,6250,1516293776,-9007199254740992];
const v2 = [v1,v0,v1];
const v7 = new Worker("", { type: "string" });
v7.postMessage(v2);

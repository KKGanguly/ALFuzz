class C1 {
    #d;
}
const v2 = new C1();
const v3 = ["45772",v2];
const v7 = new Worker("45772", { type: "string" });
v7.postMessage(v3);

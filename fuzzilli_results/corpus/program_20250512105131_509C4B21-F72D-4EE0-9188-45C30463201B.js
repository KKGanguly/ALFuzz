const v1 = new Error(Error);
Reflect.get(v1, "stack", 0);

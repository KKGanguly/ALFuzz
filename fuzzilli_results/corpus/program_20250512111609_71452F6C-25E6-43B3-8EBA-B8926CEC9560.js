const v1 = ("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX").normalize();
try { Reflect.set(v1, v1, v1, Reflect); } catch (e) {}

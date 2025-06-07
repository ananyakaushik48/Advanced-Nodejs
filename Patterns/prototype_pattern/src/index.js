import base_prototype from "./base_prototypes.js";

var codelicks = base_prototype.clone();
codelicks.name = "Codelicks";

var john = base_prototype.clone();
john.name = "John";

console.log(`${codelicks.name}: ${codelicks.cartItems}`);
console.log(`${john.name}: ${john.cartItems}`);

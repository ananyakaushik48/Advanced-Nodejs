import person_factory from './person_factory.js';

var codelicks = person_factory("Codelicks", 500);
var john = person_factory("John", 900, "employee", "Something");

john.payDay(1999);

console.log(codelicks.toString());
console.log(john.toString());

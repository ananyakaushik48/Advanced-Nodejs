/**
 * Builder Pattern:
 * 
 * The old inefficient way of creating customers and employees
 * 
 * import Customer from './Customer.js';
 * Employees
 * var john = new Customer("John", true, true, 50);
 * var bill = new Customer("Bill", true, false, 30);
 * var max = new Customer("Max", true, false);
 *
 * Customers
 * var frank = new Customer("Frank", false, false, 0, 600, ["shorts", "shoes", s]);
 * var ali = new Customer("Ali", false, false, 0, 1100);
 */

// We will directly import the Builder class
import PersonBuilder from './PersonBuilder.js';

// For an employee
var john = new PersonBuilder("John").makeEmployee(true).makeManager(40).build();

// For a customer
var frank = new PersonBuilder("Frank").makeCustomer().withFunds(600).withList(["shorts", "shoes"]).build();
// For another customer
var ali = new PersonBuilder("Ali").makeCustomer().withFunds(1100).build();

console.log(john.toString());
console.log(frank.toString());
console.log(ali.toString());




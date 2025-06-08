import Person from './Person.js';
class Customer extends Person {
  constructor(name, funds = 0) {
    super(name);
    this.funds = funds;
    this.employee = false;
  }
}

export default Customer;

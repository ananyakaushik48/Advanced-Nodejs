import Customer from "./Customer.js";

class PersonBuilder {
    constructor(name) {
        this.name = name;
    }
    makeEmployee() {
        this.isEmployee = true;
        // Return to allow method chaining
        return this;
    }
    makeManager(hours=40) {
        this.isManager = true;
        this.hours = hours;
        return this;
    }
    withFunds(funds) {
        this.funds = funds;
        return this;
    }

    withList(list) {
        this.shoppingList = list;
        return this;
    }
    makeCustomer() {
        this.isEmployee = false;
        return this;
    }
    build() {
        return new Customer(this);
    }
}

export default PersonBuilder;
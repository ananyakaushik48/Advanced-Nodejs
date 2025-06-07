import Customer from './Customer.js';
import Employee from './Employee.js';


var person_factory = (name, funds = 0, type , employer) => {
    if(type === "employee") {
        return new Employee(name, funds, employer);
    }
    return new Customer(name, funds);
}

export default person_factory;
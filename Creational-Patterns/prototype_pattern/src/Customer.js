class Customer {
  constructor(name = "no name") {
    this._name = name;
    this._cartItems = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get cartItems() {
    return this._cartItems.join(", ");
  }

  addItemToList(item) {
    this._cartItems.push(item);
  }
  clone () {
    // This will copy all the items and all the values
    var proto = Object.getPrototypeOf(this); // Creates a prototype of the same object
    var clone = Object.create(proto); // Creates a copy of the protoype
    clone._name = this._name;
    clone._cartItems = [...this._cartItems]; // Spread operator to copy array
    return clone;
  }
}

export default Customer;

import logger from "./Logger.js";
import Customer from "./Customer.js";
import Product from "./Product.js";


logger.log("starting app...");

var codelicks = new Customer("Codelicks", 600);
var book_product = new Product("Some books", [
  {
    item: "Book1",
    qty: 5,
    price: 200,
  },
  {
    item: "Book2",
    qty: 20,
    price: 39,
  },
]);

logger.log("finished setup...");

console.log(`${logger.count} total logs`);
logger.logs.map((log) => console.log(`   ${log.message}`));

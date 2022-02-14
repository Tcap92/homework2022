// let pizzaToppings = ["bacon", "onion", "pep", "sausage"];
// console.log(pizzaToppings);
// function greetCustomer() {
//   let message = "Welcome to Pizza House, our toppings are "
//   // console.log(message + pizzaToppings );
//   for (let name of pizzaToppings) {
//     message += `${name}, `;
//   }
// console.log(message);
// }

// greetCustomer();
// function getPizzaOrder(size, crust, ...toppings) {
//   let message = `One ${size} ${crust} pizza with `;
//   console.log({size, crust, toppings})
//   for (let name of toppings) {
//     message += `${name}, `;
//   }
//   console.log(`${message} coming up!`);
//   return [size, crust, toppings]
// }
// getPizzaOrder("large", "thin", "pep");

// create a function with array prams
function preparePizza([aSize, aCrust, ...atoppings]) {
  // console.log(preparePizza);

  let obj = {
    size: aSize,
    crust: aCrust,
    toppings: atoppings
  };
  let response = `cooking pizza with ${aSize}, ${aCrust} crust and ${atoppings} toppings!`;
  // let response = `cooking pizza with ${aSize}, ${aCrust} crust, and ${atoppings.map(topping => topping)} for toppings`
  // console.log(obj);
  console.log(response);
  return obj;
}
// console.log(preparePizza);
// preparePizza(["large", "thin", ["pep", "sausage"]]);

// }
// has a parameter of a pizza Object
function servePizza(obj) {
  let response = `ORDER UP ${obj.size}, ${obj.crust} crust and ${obj.toppings} toppings!`;
  console.log(response);
}
servePizza(preparePizza(["large", "thin", ["pep", "sausage"]]));

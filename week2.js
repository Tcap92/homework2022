let pizzaPlace = "Bob's Pizza";
let numberOfToppings = 2;

console.log(typeof pizzaPlace);
console.log(typeof numberOfToppings);

console.log(
  `"Welcome to ${pizzaPlace}!, home of the ${numberOfToppings} topping pizza!"`
);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

for (var x = 0; x <= 10; x++) {
  if (x === 0) {
    console.log(x + " is even");
  } else if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}

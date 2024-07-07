const pizzaPlace = "Poppa Pizzas";
let numberOfToppings = 5;

console.log(pizzaPlace, typeof pizzaPlace); // string
console.log(numberOfToppings, typeof numberOfToppings); // number

console.log(`At ${pizzaPlace} we offer ${numberOfToppings} Pizza Toppings.`);

if (numberOfToppings <= 10) {
  console.log("Quality, not quantity.");
}


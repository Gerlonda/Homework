// I am not entirely sure if I was supposed to create a separate folder to put this js file in because
// the instructions only said to create a file, if I need to put it in a folder please let me know.

let pizzaToppings = ["pepperoni", "mushrooms", "onions", "sausage", "bacon"];

function greetCustomer() {
  console.log(
    "Welcome to Big G's Pizzeria, where we serve top of the line toppings! our toppings are:"
  );
  for (let i = 0; i < pizzaToppings.length; i++) {
    if (i === pizzaToppings.length - 1 && i !== 0) {
      console.log(`and ${pizzaToppings[i]}.`);
    } else if (i === 0) {
      console.log(pizzaToppings[i]);
    } else {
      console.log(pizzaToppings[i]);
    }
  }
}

function getPizzaOrder(size, crust, ...toppings) {
  console.log(
    `One ${size} ${crust} pizza with ${toppings.join(", ")} coming up!`
  );
  return [size, crust, toppings];
}

function preparePizza(pizzaArray) {
  const [size, crust, toppings] = pizzaArray;
  console.log("...your pizza is cooking, yummy!...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(pizzaObject) {
  console.log(
    `Order up! Here's your ${pizzaObject.size} ${
      pizzaObject.crust
    } pizza with ${pizzaObject.toppings.join(", ")}. Enjoy and come again!`
  );
  return pizzaObject;
}

greetCustomer();

const pizzaOrder = getPizzaOrder(
  "large",
  "thick crust",
  "pepperoni",
  "mushrooms",
  "bacon"
);
const pizza = preparePizza(pizzaOrder);
servePizza(pizza);

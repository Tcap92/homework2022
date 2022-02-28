const { getEnvironmentData } = require("worker_threads");

function Games(id, name, price) {
  this.id = id;
  this.name = name;
  this.price = price;
}
this.greet = function() {
  return `We have ${this.id} and ${this.name} is ${this.price} dollars`;
};
const game = new Games("bio", "bioshcok", 60);
console.log(game);

class GameConsoles extends Games {
  constructor(id, name, price, console, rating) {
    super(id, name, price);
    this.console = console;
    this.rating = rating;
  }
  // greet() {
  //   return `This videogame ${this.name} is ${this.price} dollars. It for for ${this.console} and is rated ${this.rating}`;
}
const redDead = new GameConsoles("id", "RedDead", 60, "Xbox/PS5", "M");
console.log(redDead);

//In a new .js file, create a few classes. Create one "general category" class, then two more specific classes which extend from the first class.

//For example: Perhaps you are creating a web store that sells video games and game consoles.

//You could create a general Item class to hold properties that any and every item for sale shares in common, like id, name, or price.
//Then, extend Item with a class for GameConsoles and a class for VideoGames and include properties specific to each category of item.

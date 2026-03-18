const user = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
  isMarried: false,
};
// let name = user.name;
// let age = user.age;
// let city = user.city;
// let country = user.country;
// let isMarried = user.isMarried;
// let isMarried = user.isMarried;
// console.log(name, age, city, isMarried);

// Destructuring
const { name: firstName, age, city, country, isMarried } = user;
console.log(firstName, age, city, country, isMarried);
console.log(firstName);
console.log(country);

let year = 2020;
let isElectric = true;
const car = {
  brend: "Ford",
  madell: "Mustang",
  year: 2020,
  color: "red",
  isElectric: false,
};

const { brend, madell, year: carYear, color, isElectric: carIsElectric } = car;
console.log(brend, madell, carYear, color, carIsElectric);

const game = ["counter-strike2", "dota 2", "pubg", "fortnite"];
const [a, b, c, d] = game;
console.log(a, b, c, d);

// otkazib yuborish

const [, , , fortnite] = game;
console.log(fortnite);

// spread operator yordamida destructuring
const [counterStrike, ...otherGames] = game;
console.log(counterStrike);

// birrlashtirish
const user1 = {
  name: "Alice",
  age: 25,
};

const combainedUser = { ...user, ...user1 };
console.log(combainedUser);

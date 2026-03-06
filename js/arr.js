// const arr = [
//   { id: 1, name: "mardon", email: "mardonjorayev@gmail.com" },
//   { id: 2, name: "yulduz", email: "yulduzusmonova@gmail.com" },
//   { id: 3, name: "jhon", email: "jhonsins@gmail.com" },
// ];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// const cars = ["Audi", "BMW", "porsche"];
// console.log(cars.toString());
// // push
// cars.push("Lamborghini");
// console.log(cars);
// // unshift
// cars.unshift("Ferrari");
// console.log(cars);
// // pop
// cars.pop();
// console.log(cars);
// // shift
// cars.shift();
// console.log(cars);
// // join
// console.log(cars.join(" - "));

// // indexof
// cars.indexOf("BMW");
// console.log(cars.indexOf("BMW"));
// console.log(cars.indexOf("Ferari"));
// // includes
// console.log(cars.includes("Audi"));
// console.log(cars.includes("Ferari"));
// // slice
// console.log(cars.slice(1, 3));
// console.log(cars.slice(0, 2));
// // splice
// console.log(cars.splice(1, 1, "Mazda", "Toyota"));
// console.log(cars);
// // forEach
// for (let i = 0; i < cars.length; i++) {
//   console.log(i, cars[i]);
// }
// // for-of  loop
// cars.forEach(function (car, index) {
//   console.log(index, car);
// });

// const numbers = [-5, 8, 0, 12, -6];
// const nums = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 0) {
//     positiveNumbers.push(numbers[i]);
//   }
// }
// console.log(positiveNumbers);
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < 0) {
//     positiveNumbers.push(numbers[i]);
//   }
// }
// console.log(positiveNumbers);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 3 === 0) {
//     nums.push(numbers[i]);
//   } else {
//     console.log("soni 3 ga bolinmaydi");
//   }
// }
// console.log(nums);
// const arr = [1, 2, 3, 4, 5];
// const newArr = [];
// arr.forEach((value) => {
//   if (value % 2 === 0 || value % 5 === 0) newArr.push(value);
// });
// let nums = 1;
// arr.forEach((value) => {
//   nums *= value;
// });
// console.log();

// const numbers = [2, 3, -4, 0];
// let s = 0;
// for (let i = 0; i < numbers.length; i++) {
//   s += numbers[i] ** 2;
// }
// console.log(s);

// const numbers = [16, 9, 25, 4, 36];
// const newNumbers = numbers.map((value) => value ** 2);
// console.log(newNumbers);

const numbers = [16, 9, 25, 4, 36];
const newNumbers = numbers.map((value, index) => {
  return `son: ${value + 1} index : ${index}`;
});
console.log(newNumbers);

const nums = numbers.filter((value, index) => value % 2 === 0);
console.log(nums);

const filteredNums = numbers.filter((value) => value > 5);

console.log(filteredNums);

// find Method
const foundNums = numbers.find((value) => value >= 25);
console.log(foundNums);
// sort
const sortedArray = nums.sort();
console.log(sortedArray);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

// reverse
points.reverse();
console.log(points);

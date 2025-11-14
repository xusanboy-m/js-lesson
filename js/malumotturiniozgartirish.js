// type coversion and type coercion
const age = "16";
console.log(typeof age);
console.log(typeof Number(age));
console.log(Number(48));
console.log(typeof Number(age));
console.log(Number("text"));
console.log(Number("12a0c"));
console.log(typeof NaN); // number
// persetInt[], parseFloat[]
console.log(parseInt("17"));
console.log(typeof parseInt("17"));
console.log(parseInt("102.25"));
console.log(parseInt("z-generation")); // nan
console.log(parseInt("12adc")); // 12
console.log(parseInt("adc12")); // nan
// parseFloat
console.log(parseFloat("17.89")); // 17.89
console.log(typeof parseFloat("12.47"));
console.log(parseFloat(117));
console.log(parseFloat("z-generation"));
// string to number conversion using unary plus (+)
console.log(String(78));
console.log(typeof String(103));
console.log(String(true));
console.log(typeof String(true));
// boolean
console.log(Boolean(0)); // false
console.log(Boolean("1")); // true
console.log(Boolean("hello")); // true
console.log(Boolean("Salom Dunyo"));
console.log(Boolean(" ")); //true
// type cuercion in js
console.log("5" + 6); // "56"
console.log("5" - 3); // 2
console.log("5" * 2); // 10
console.log("10" / 2); // 5
console.log("10" % 3); // 1
console.log("30" - 44); // -14
console.log("145" / 5); // 29
//  proctis
console.log(Number("17") - String(10)); // 7
console.log(parseFloat("a132b") * 5); // "NaN"

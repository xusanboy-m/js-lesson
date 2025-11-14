// /C:/Users/_muxtorov_/OneDrive/Desktop/js/js/aperators.js
// Asosiy operatorlar va ularga misollar (JavaScript)

// 1) Aritmetik operatorlar
let a = 10;
let b = 3;
console.log("a + b =", a + b); // qo'shish
console.log("a - b =", a - b); // ayirish
console.log("a * b =", a * b); // ko'paytirish
console.log("a / b =", a / b); // bo'lish
console.log("a % b =", a % b); // qoldiq
console.log("a++ =", a++); // post-inkrement (avval qiymatni qaytaradi, keyin +1)
console.log("++a =", ++a); // pre-inkrement (avval +1, keyin qiymatni qaytaradi)

// 2) Tayinlash operatorlari
let x = 5;
x += 2; // x = x + 2
x *= 3; // x = x * 3
console.log("x =", x);

// 3) Taqqoslash (comparison) operatorlari
console.log("5 == '5' ->", 5 == "5"); // tenglik (tur farqi inobatga olinmaydi)
console.log("5 === '5' ->", 5 === "5"); // qat'iy tenglik (tur ham bir xil bo'lishi kerak)
console.log("5 != '6' ->", 5 != "6");
console.log("5 !== '5' ->", 5 !== "5");
console.log("3 > 2 ->", 3 > 2);
console.log("3 <= 3 ->", 3 <= 3);

// 4) Mantiqiy (logical) operatorlar
console.log("true && false ->", true && false); // va
console.log("true || false ->", true || false); // yoki
console.log("!true ->", !true); // inkor

// 5) Ternary operator (shartli bir qator)
let age = 18;
let status = age >= 18 ? "balog'atda" : "voyaga yetmagan";
console.log("status:", status);

// 6) Unar operatorlar: typeof, delete, instanceof
console.log("typeof 123 ->", typeof 123);
const obj = { name: "Ali", age: 30 };
console.log("obj.name ->", obj.name);
delete obj.age; // obyekt xossasini o'chirish
console.log("after delete obj:", obj);
console.log("obj instanceof Object ->", obj instanceof Object);

// 7) String operatori (qo'shish)
let s = "Salom, " + "dunyo!";
console.log(s);

// 8) Bitwise operator (misol uchun AND)
console.log("5 & 3 ->", 5 & 3); // (0101 & 0011) = 0001 -> 1

// 9) Comma operatori (kamroq ishlatiladi)
let y = (1, 2, 3); // y = 3
console.log("y (comma) =", y);

// Oddiy foydalanish namunasi
function check(n) {
  // oddiy shart: n musbat va juft bo'lsa
  return n > 0 && n % 2 === 0 ? "musbat juft" : "shart bajarilmadi";
}
console.log("check(4) ->", check(4));
console.log("check(-2) ->", check(-2));

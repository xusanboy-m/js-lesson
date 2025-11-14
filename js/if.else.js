// const number = 7;
// if (number > 0) {
//   console.log("berilgan son musbat");
// } else {
//   console.log("berilgan son manfiy yoki nol");
// }

// console.log("if bloki tugadi");
// const example = +prompt("balingizni kiriting");
// let score = 50;
// if (score >= 56 && score < 70);
// {
//   console.log("3 baho");
// }
// else if (score >= 71 && score < 85) {
//   console.log("4 baho");
// } else if (score >= 86 && score <= 100) {
//   console.log("5 baho");
// } else {
//   console.log("siz imtihondan ota olmadingiz");
// }
let productPrice = 40;
const isManber = true;
const hascupon = true;

if (isManber) {
  console.log("Azolikka chegirma qollaniladi: 10%");
}
if (hascupon) {
  console.log("Kuponga chegirma qollaniladi: 5%");
  productPrice *= 0.95;
}
if (productPrice < 50) {
  console.log("qoshimcha chegirma qollanildi: 5%");
  productPrice *= 0.95;
}

console.log(`Mahsulot narxi: ${productPrice}`);

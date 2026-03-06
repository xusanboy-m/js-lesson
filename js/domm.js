// acsessing elemnt
const element = document.getElementById("learn");
console.log(element);
console.log(element.innerText);
console.log(element.textContent);
element.innerText = "Learn DOM Manipulation";
console.log(element);

// 2. innerHTML - element ichidagi HTML kodni o'qish va o'zgartirish
const paragraph = document.getElementById(".paragraph");
console.log(paragraph.innerHTML);

paragraph.innerHTML = "<h2> heading two</h2>";

const titleElement = document.querySelector(".title");

console.log(titleElement);

console.log(titleElement.getAttribute("title"));

console.log(titleElement.setAttribute("title", "new title attribute"));

titleElement.setAttribute("Style", "color: red; background: darkblue");

const imageElement = document.querySelector(".image");

imageElement.setAttribute("src", "./image/screen1.png");

imageElement.setAttribute("width", "100px");
imageElement.setAttribute("height", "100px");

imageElement.remove("haight");

console.log(paragraph.innerHTML);

// 3. TextCantent - element ichidagi faqat matnni o'qish va o'gartirish
console.log(paragraph.textContent);

const spanElement = document.createElement("span");

spanElement.textContent = "this is a span element";

console.log(spanElement);

spanElement.appendChild(document.createTextNode(" - appended text node"));

console.log(spanElement);
